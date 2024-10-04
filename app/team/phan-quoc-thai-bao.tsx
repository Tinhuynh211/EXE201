import React from 'react';
import Image from 'next/image';

const PhanQuocThaiBao = () => {
  return (
    <div className="py-10 px-4 text-center">
      <h1 className="text-3xl font-semibold mb-6">Phan Quốc Thái Bảo</h1>
      <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Ảnh đại diện của thành viên */}
        <div className="relative w-40 h-40 mb-4 mx-auto overflow-hidden rounded-full">
          <Image
            src="/images/maitran.jpg" // Cập nhật đúng đường dẫn đến ảnh của Thái Bảo
            alt="Phan Quốc Thái Bảo"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <h3 className="text-lg font-medium">Tutor</h3>
        <p className="text-sm text-gray-500 mb-4">
          Thái Bảo là một người đam mê với việc dạy học và giúp các bạn nhỏ phát triển toàn diện.
        </p>

        {/* Thông tin chi tiết */}
        <div className="text-left">
          <p className="text-sm mb-2">
            <strong>Email:</strong> thai.bao@example.com
          </p>
          <p className="text-sm mb-2">
            <strong>Phone:</strong> 123-456-789
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhanQuocThaiBao;
