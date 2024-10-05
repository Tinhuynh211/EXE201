import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccessPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-green-500 mb-4">Thanh toán thành công!</h2>
        <p className="text-lg text-gray-700 mb-6">
          Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi. Thanh toán của bạn đã được xử lý thành công.
        </p>
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

export default PaymentSuccessPage;
