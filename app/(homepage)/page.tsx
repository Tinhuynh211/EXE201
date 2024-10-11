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
        `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <div style="text-align: center; background-color: #f8f8f8; padding: 10px; border-bottom: 1px solid #ddd;">
            <h1 style="color: #333;">Thanh Toán Thành Công!</h1>
          </div>
          
          <div style="padding: 20px;">
            <h2 style="color: #4CAF50;">Xin chào,</h2>
            <p style="font-size: 16px; color: #333;">Cảm ơn bạn đã hoàn tất đơn hàng của mình.</p>
            <p style="font-size: 16px; color: #333;">Thông tin thanh toán của bạn đã được xác nhận.</p>
            
            <div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; background-color: #f9f9f9; margin: 20px 0;">
              <h3 style="color: #4CAF50;">Chi tiết thanh toán:</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">Trạng thái thanh toán:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd; color: #333;"><strong>${searchParams.status}</strong></td>
                </tr>
              </table>
            </div>
            
            <p style="font-size: 16px; color: #333;">Nếu bạn có bất kỳ thắc mắc nào, vui lòng liên hệ với chúng tôi qua email hoặc số điện thoại dưới đây.</p>
          </div>
          
          <div style="text-align: center; background-color: #f8f8f8; padding: 10px; border-top: 1px solid #ddd;">
            <p style="font-size: 14px; color: #888;">&copy; 2024 Công ty TYF. Tất cả quyền được bảo lưu.</p>
            <p style="font-size: 14px; color: #888;">Liên hệ: 0945199743 | Email: tyfcompany@gmail.com</p>
          </div>
        </div>
        `
      );
    }
    
  
    if (searchParams.status === "CANCELLED") {
      console.log("Gửi email vì trạng thái là CANCELLED");
    
      // Gửi email khi phát hiện trạng thái `CANCELLED`
      sendEmail(
        "tinhuynh211@gmail.com", // Thay bằng email của bạn hoặc người dùng
        "Thông báo hủy đơn hàng",
        `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #fff3f3;">
          <h2 style="color: #ff4d4f; text-align: center;">Đơn Hàng Đã Bị Hủy!</h2>
          <p style="font-size: 16px; color: #333;">Đơn hàng của bạn đã được hủy thành công.</p>
          <p style="font-size: 16px; color: #333;">Nếu bạn không yêu cầu hủy đơn hàng, vui lòng liên hệ với chúng tôi để biết thêm thông tin chi tiết.</p>
    
          <div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; background-color: #fff; margin: 20px 0;">
            <h3 style="color: #ff4d4f; margin-top: 0;">Thông tin đơn hàng:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">Trạng thái đơn hàng:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; color: #ff4d4f;"><strong>${searchParams.status}</strong></td>
              </tr>
            </table>
          </div>
    
          <p style="font-size: 14px; color: #555;">Nếu bạn có bất kỳ thắc mắc nào, vui lòng liên hệ với chúng tôi qua email hoặc số điện thoại dưới đây.</p>
    
          <div style="text-align: center; font-size: 14px; color: #888; margin-top: 20px;">
            &copy; 2024 Công ty TYF . Tất cả quyền được bảo lưu.
            <br />
            Liên hệ: 0945199743 | Email: tyfcompany@gmail.com
          </div>
        </div>
        `
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

     

      <AccordionComponent />
      <Pricing />

      {/* Thêm nút Contact Us vào cuối trang */}
      <ContactButton />
    </section>
  );
}

// Hàm trả về màu sắc dựa vào trạng thái


export default HomePage;