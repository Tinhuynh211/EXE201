"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";
import { DateRange as DayPickerDateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { fetchBabysitter } from "@/utils/actions";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

type CustomDateRange = {
  from: Date;
  to: Date;
};

type Babysitter = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profileImage: string;
  experience: string;
};

export default function DatePickerWithRange({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<CustomDateRange | undefined>({ from: new Date(), to: addDays(new Date(), 20) });
  const [babysitters, setBabysitters] = React.useState<Babysitter[]>([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedBabysitter, setSelectedBabysitter] = React.useState<Babysitter | null>(null);
  const [bookingType, setBookingType] = React.useState("hourly");
  const [userInfo, setUserInfo] = React.useState({ name: "", phone: "", address: "", hours: 1, months: 1, totalAmount: 20000, email: "" });

  // Kiểm tra trạng thái `status` từ URL và gửi email khi có sự thay đổi
  // React.useEffect(() => {
  //   const query = new URLSearchParams(window.location.search);
  //   const status = query.get("status");

  //   if (status === "PAID" && userInfo.email) {
  //     console.log("Thanh toán thành công, tiến hành gửi email.");
  //     sendEmail(
  //       userInfo.email,
  //       "Xác nhận thanh toán thành công",
  //       `<h2>Đơn hàng đã được thanh toán thành công!</h2>
  //        <p>Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi.</p>
  //        <p>Tên khách hàng: ${userInfo.name}</p>
  //        <p>Số tiền thanh toán: ${userInfo.totalAmount.toLocaleString()} VND</p>`
  //     );
  //   }

  //   if (status === "CANCELLED" && userInfo.email) {
  //     console.log("Đơn hàng đã bị hủy.");
  //     sendEmail(
  //       userInfo.email,
  //       "Thông báo hủy đơn hàng",
  //       `<h2>Đơn hàng của bạn đã bị hủy.</h2>
  //        <p>Chúng tôi rất tiếc thông báo rằng đơn hàng của bạn đã bị hủy.</p>
  //        <p>Vui lòng liên hệ với chúng tôi nếu có bất kỳ thắc mắc nào.</p>`
  //     );
  //   }
  // }, [userInfo.email, userInfo.name, userInfo.totalAmount]);

  // const sendEmail = async (to: string, subject: string, html: string) => {
  //   try {
  //     const response = await fetch("/api/send-email", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ to, subject, html }),
  //     });

  //     if (!response.ok) {
  //       throw new Error(`Failed to send email. Status: ${response.status}`);
  //     }

  //     console.log("Email sent successfully!");
  //   } catch (error) {
  //     console.error("Failed to send email:", error);
  //   }
  // };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const numberValue = Number(value);

    if (name === "hours" || name === "months") {
      if (!isNaN(numberValue) && numberValue > 0) {
        const updatedUserInfo = { ...userInfo, [name]: numberValue };
        const newTotalAmount = calculateAmount(updatedUserInfo.hours, updatedUserInfo.months, bookingType);
        setUserInfo({ ...updatedUserInfo, totalAmount: newTotalAmount });
      }
    } else if (name === "bookingType") {
      setBookingType(value);
      const newTotalAmount = calculateAmount(userInfo.hours, userInfo.months, value);
      setUserInfo({ ...userInfo, totalAmount: newTotalAmount });
    } else {
      setUserInfo({ ...userInfo, [name]: value });
    }
  };

  const calculateAmount = (hours: number, months: number, type: string) => {
    if (type === "hourly") return hours * 20000;
    if (type === "monthly") return months * 8000000;
    return 0;
  };

  const handleDateChange = async () => {
    const transformedDate = transformDateRange(date);
    const result = await fetchBabysitter(transformedDate);

    if (result && Array.isArray(result.babysitters)) {
      setBabysitters(result.babysitters);
    } else {
      console.error("Invalid data format:", result);
      setBabysitters([]);
    }
  };

  const transformDateRange = (dateRange: CustomDateRange | undefined) => {
    if (!dateRange) return { startDate: null, endDate: null };
    return { startDate: dateRange.from, endDate: dateRange.to };
  };

  const handleBookingClick = (babysitter: Babysitter) => {
    setSelectedBabysitter(babysitter);
    setIsModalOpen(true);
  };

  const Random = () => Math.floor(Math.random() * 1000000);

  const handleConfirmBooking = async () => {
    const url = "https://payos-deploy.onrender.com/create-payment-link";
    const payload = {
      orderCode: Random(),
      amount: userInfo.totalAmount,
      description: `Đặt ${bookingType === "hourly" ? `${userInfo.hours} giờ` : `${userInfo.months} tháng`} với bảo mẫu`,
      returnUrl: "http://localhost:3000/?status=PAID",
      cancelUrl: "http://localhost:3000/?status=CANCELLED",
      customerName: userInfo.name,
      customerPhone: userInfo.phone,
      customerAddress: userInfo.address,
      customerEmail: userInfo.email,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data && data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        console.error("No payment URL returned in response:", data);
        alert("Không có URL thanh toán được trả về. Vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Error creating payment link:", error);
      alert("Không thể tạo liên kết thanh toán. Vui lòng thử lại sau.");
    }
  };

  return (
    <div className={cn("grid gap-4 p-4 bg-white shadow-lg rounded-lg", className)}>
    {/* Select Type Booking */}
    <div className="flex items-center gap-2 mb-4">
      <label className="text-lg font-medium">Loại đặt chỗ:</label>
      <select name="bookingType" value={bookingType} onChange={handleInputChange} className="border border-gray-300 rounded px-2 py-1">
        <option value="hourly">Theo giờ</option>
        <option value="monthly">Theo tháng</option>
      </select>
    </div>

    {/* Chọn ngày */}
    <Popover>
      <PopoverTrigger asChild>
        <Button id="date" variant={"outline"} className={cn("w-[300px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date?.from ? (
            date.to ? (
              <>
                {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
              </>
            ) : (
              format(date.from, "LLL dd, y")
            )
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar initialFocus mode="range" defaultMonth={date?.from} selected={date as DayPickerDateRange} onSelect={setDate as React.Dispatch<React.SetStateAction<DayPickerDateRange | undefined>>} numberOfMonths={2} />
      </PopoverContent>
    </Popover>

    <Button onClick={handleDateChange} className="w-full bg-blue-500 text-white hover:bg-blue-600">
      Tìm kiếm bảo mẫu
    </Button>

    {/* Render Babysitter Cards */}
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {babysitters.map((babysitter) => (
        <Card key={babysitter.id} className="py-4 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center text-center">
            <CardTitle className="text-tiny uppercase font-light text-gray-600">Babysitter</CardTitle>
            <h4 className="font-bold text-lg text-gray-800">{babysitter.firstName} {babysitter.lastName}</h4>
          </CardHeader>
          <CardContent className="overflow-visible py-2 flex justify-center">
            <Image alt={`${babysitter.firstName} ${babysitter.lastName}`} className="object-cover rounded-xl" src={babysitter.profileImage} width={270} height={160} />
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant="outline" className="w-full bg-green-500 text-white hover:bg-green-600 justify-center items-center" onClick={() => handleBookingClick(babysitter)}>
              Đặt lịch
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>

    {/* Modal hiển thị form nhập thông tin */}
    {isModalOpen && (
      <Dialog open={isModalOpen} onOpenChange={() => setIsModalOpen(false)}>
        <DialogContent className="max-w-xl">
          <DialogTitle>Thông tin đặt chỗ</DialogTitle>
          <DialogDescription>
            Nhập thông tin để đặt lịch cho bảo mẫu:
            <strong> {selectedBabysitter?.firstName} {selectedBabysitter?.lastName}</strong>
          </DialogDescription>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Tên của bạn</label>
              <Input name="name" placeholder="Nhập tên của bạn" onChange={handleInputChange} value={userInfo.name} />
            </div>
            <div>
              <label className="block text-sm font-medium">Số điện thoại</label>
              <Input name="phone" placeholder="Nhập số điện thoại" onChange={handleInputChange} value={userInfo.phone} />
            </div>
            <div>
              <label className="block text-sm font-medium">Địa chỉ</label>
              <Input name="address" placeholder="Nhập địa chỉ" onChange={handleInputChange} value={userInfo.address} />
            </div>
            <div>
        <label className="block text-sm font-medium">Email</label>
        <Input name="email" type="email" placeholder="Nhập email" onChange={handleInputChange} value={userInfo.email} />
      </div>
            
            {/* Input tùy chỉnh dựa trên loại đặt chỗ */}
            {bookingType === "hourly" ? (
              <div>
                <label className="block text-sm font-medium">Số giờ</label>
                <Input name="hours" type="number" placeholder="Nhập số giờ" onChange={handleInputChange} value={userInfo.hours} />
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium">Số tháng</label>
                <Input name="months" type="number" placeholder="Nhập số tháng" onChange={handleInputChange} value={userInfo.months} />
              </div>
            )}
          </div>
          <p className="mt-4 text-lg">Tổng tiền: <strong>{userInfo.totalAmount.toLocaleString()} VND</strong></p>
          <p className="mt-2 text-sm text-red-600">
            <strong>Lưu ý:</strong> {bookingType === "hourly" ? "Bạn cần thanh toán đầy đủ số tiền khi đặt theo giờ." : "Bạn chỉ cần thanh toán 50% số tiền khi đặt theo tháng."}
          </p>
          <DialogFooter className="mt-6">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>Hủy</Button>
            <Button className="bg-blue-500 text-white" onClick={handleConfirmBooking}>Xác nhận</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )}
  </div>
  );
}
