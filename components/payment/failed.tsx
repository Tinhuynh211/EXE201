import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentFailurePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-4">Thanh toán thất bại!</h2>
        <p className="text-lg text-gray-700 mb-6">
          Đã xảy ra lỗi trong quá trình xử lý thanh toán. Vui lòng kiểm tra thông tin và thử lại.
        </p>
        <button
          onClick={() => navigate('/checkout')}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md mr-4"
        >
          Thử lại
        </button>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          Trở về trang chủ
        </button>
      </div>
    </div>
  );
};

export default PaymentFailurePage;
