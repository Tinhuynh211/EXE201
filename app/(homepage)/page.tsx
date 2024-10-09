"use client"; // Thêm "use client" nếu sử dụng Next.js 13+

import React, { useEffect } from "react";

import { AccordionComponent } from "@/components/landing/Accordion ";
import { CarouselHome } from "@/components/landing/Carousel";
import { Pricing } from "@/components/home/Pricing";
import ContactButton from "@/components/ContactButton";



interface SearchParams {
  category?: string;
  search?: string;
  status?: string; // Thêm tham số status
  email?: string;
}

function HomePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  // Hàm gửi email
  const sendEmail = async (to: string, subject: string, html: string) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ to, subject, html }),
      });

      if (!response.ok) {
        throw new Error(`Failed to send email. Status: ${response.status}`);
      }

      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  // Kiểm tra `status` và gửi email nếu trạng thái là `PAID`
  React.useEffect(() => {
    if (searchParams.status === "PAID") {
      console.log("Gửi email vì trạng thái là PAID");
  
      // Gửi email khi phát hiện trạng thái `PAID`
      sendEmail(
        "tinhuynh211@gmail.com", // Thay bằng email của bạn hoặc người dùng
        "Xác nhận thanh toán thành công",
        `<h2>Thanh toán thành công!</h2>
         <p>Cảm ơn bạn đã hoàn tất đơn hàng.</p>
         <p>Trạng thái thanh toán: ${searchParams.status}</p>`
      );
    }
  
    if (searchParams.status === "CANCELLED") {
      console.log("Gửi email vì trạng thái là CANCELLED");
  
      // Gửi email khi phát hiện trạng thái `CANCELLED`
      sendEmail(
        "tinhuynh211@gmail.com", // Thay bằng email của bạn hoặc người dùng
        "Thông báo hủy đơn hàng",
        `<h2>Đơn hàng đã bị hủy!</h2>
         <p>Đơn hàng của bạn đã bị hủy thành công.</p>
         <p>Trạng thái đơn hàng: ${searchParams.status}</p>`
      );
    }
  }, [searchParams.status]); // Chỉ chạy khi `searchParams.status` thay đổi
  

  return (
    <section className="relative">
      <CarouselHome />

      {/* Hiển thị thông tin dựa trên searchParams */}
      {searchParams.category && (
        <h2 className="text-2xl font-bold text-center my-4">
          Danh mục: {searchParams.category}
        </h2>
      )}

      {searchParams.search && (
        <h3 className="text-xl text-gray-700 text-center mb-6">
          Kết quả tìm kiếm cho: {searchParams.search}
        </h3>
      )}

      {searchParams.status && (
        <h3 className={`text-xl text-center mb-6 ${getStatusColor(searchParams.status)}`}>
          Trạng thái: {searchParams.status}
        </h3>
      )}

      <AccordionComponent />
      <Pricing />

      {/* Thêm nút Contact Us vào cuối trang */}
      <ContactButton />
    </section>
  );
}

// Hàm trả về màu sắc dựa vào trạng thái
function getStatusColor(status: string): string {
  switch (status) {
    case "PAID":
      console.log("PAID");
      return "text-green-500"; // Màu xanh lá khi đã thanh toán
    case "CANCELLED":
      console.log("Cancel");
      return "text-red-500"; // Màu đỏ khi hủy
    case "PENDING":
      return "text-yellow-500"; // Màu vàng khi đang chờ xử lý
    default:
      return "text-gray-500"; // Màu xám cho các trạng thái khác
  }
}

export default HomePage;