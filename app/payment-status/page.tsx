"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


const PaymentSuccess = () => {
  const router = useRouter();

  useEffect(() => {
    // Chuyển hướng sau 2 giây
    const timer = setTimeout(() => {
      router.push("https://exe-201-71jh.vercel.app");
    }, 2000);

    // Xóa timer khi component unmount
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
        <div className="mb-6">
          <Image src="/images/success-icon.png" alt="Thanh toán thành công" width={100} height={100} />
        </div>
        <h1 className="text-2xl font-bold text-blue-600 mb-4">THANH TOÁN THÀNH CÔNG</h1>
        <p className="text-gray-600 text-center mb-4">
          Hệ thống sẽ quay về trang <span className="font-bold text-blue-600">TYF</span> sau 2 giây
        </p>
        <p className="text-gray-600 text-center mb-4">
          Chúng tôi sẽ gửi hóa đơn thanh toán qua email của bạn
        </p>
        <a href="https://exe-201-71jh.vercel.app/" className="text-blue-500 underline">
          Về ngay
        </a>
      </div>
    </div>
  );
};

export default PaymentSuccess;
