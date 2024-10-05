"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";
import { DateRange as DayPickerDateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { fetchBabysitter } from "@/utils/actions";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
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

export default function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<CustomDateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 20),
  });
  const [babysitters, setBabysitters] = React.useState<Babysitter[]>([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedBabysitter, setSelectedBabysitter] = React.useState<Babysitter | null>(null);

  // State lưu trữ thông tin người dùng nhập vào
  const [userInfo, setUserInfo] = React.useState({ name: "", phone: "", address: "", hours: 1, totalAmount: 20000 });

  // Hàm tính toán tổng số tiền dựa trên số giờ nhập vào
  const calculateAmount = (hours: number) => {
    return hours * 20000;
  };

  // Hàm xử lý cập nhật thông tin người dùng nhập vào
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "hours") {
      const hours = Number(value);
      if (!isNaN(hours) && hours > 0) {
        setUserInfo({ ...userInfo, [name]: hours, totalAmount: calculateAmount(hours) });
      }
    } else {
      setUserInfo({ ...userInfo, [name]: value });
    }
  };

  const transformDateRange = (dateRange: CustomDateRange | undefined) => {
    if (!dateRange) {
      return { startDate: null, endDate: null };
    }
    return { startDate: dateRange.from, endDate: dateRange.to };
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

  const Random = () => Math.floor(Math.random() * 1000000);

  // Mở Modal khi nhấn nút Booking
  const handleBookingClick = (babysitter: Babysitter) => {
    setSelectedBabysitter(babysitter);
    setIsModalOpen(true);
  };

  // Hàm gửi thông tin đến API khi nhấn Confirm
  const handleConfirmBooking = async () => {
    const url = "https://payos-deploy.onrender.com/create-payment-link";
    const payload = {
      orderCode: Random(),
      amount: userInfo.totalAmount,
      description: `Đặt ${userInfo.hours} giờ với bảo mẫu`,
      returnUrl: "https://exe-201-71jh.vercel.app/success",
      cancelUrl: "https://exe-201-71jh.vercel.app/failed",
      customerName: userInfo.name,
      customerPhone: userInfo.phone,
      customerAddress: userInfo.address,
    };
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    
      // Kiểm tra nếu response có lỗi
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    
      const data = await response.json(); // Parse JSON từ phản hồi
      console.log("Response Data: ", data); // Log dữ liệu đã parse
    
      if (data && data.checkoutUrl) {
        window.location.href = data.checkoutUrl; // Chuyển hướng đến URL thanh toán
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
    <div className={cn("grid gap-4", className)}>
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
      <Button onClick={handleDateChange}>Log Date Range</Button>

      {/* Render Babysitter Cards */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {babysitters.map((babysitter) => (
          <Card key={babysitter.id} className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <CardTitle className="text-tiny uppercase font-light">Babysitter</CardTitle>
              <h4 className="font-bold text-large">
                {babysitter.firstName} {babysitter.lastName}
              </h4>
            </CardHeader>
            <CardContent className="overflow-visible py-2">
              <Image alt={`${babysitter.firstName} ${babysitter.lastName}`} className="object-cover rounded-xl" src={babysitter.profileImage} width={270} height={160} />
            </CardContent>
            <CardFooter className="flex gap-3">
              <Button variant="outline" className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white" onClick={() => handleBookingClick(babysitter)}>
                Booking
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Modal hiển thị form nhập thông tin */}
      {isModalOpen && (
        <Dialog open={isModalOpen} onOpenChange={() => setIsModalOpen(false)}>
          <DialogContent>
            <DialogTitle>Thông tin đặt chỗ</DialogTitle>
            <DialogDescription>
              Vui lòng nhập thông tin của bạn để tiến hành đặt chỗ cho bảo mẫu:
              <strong> {selectedBabysitter?.firstName} {selectedBabysitter?.lastName}</strong>
            </DialogDescription>
            <Input name="name" placeholder="Tên của bạn" onChange={handleInputChange} value={userInfo.name} />
            <Input name="phone" placeholder="Số điện thoại của bạn" className="mt-4" onChange={handleInputChange} value={userInfo.phone} />
            <Input name="address" placeholder="Địa chỉ của bạn" className="mt-4" onChange={handleInputChange} value={userInfo.address} />
            <Input name="hours" type="number" placeholder="Số giờ" className="mt-4" onChange={handleInputChange} value={userInfo.hours} />
            <p className="mt-2">Tổng tiền: <strong>{userInfo.totalAmount.toLocaleString()} VND</strong></p>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>Hủy</Button>
              <Button variant="outline" className="bg-blue-500 text-white" onClick={handleConfirmBooking}>Xác nhận</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
