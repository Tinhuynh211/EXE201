import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold">ĐIỀU KHOẢN VÀ ĐIỀU KIỆN</h1>
          <p className="mt-4 text-xl">
            Vui lòng đọc kỹ các điều khoản và điều kiện bên dưới trước khi truy cập website
          </p>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 mt-8">
        <nav className="text-gray-600 text-sm mb-6">
          <span>Trang chủ</span> / <span>Điều khoản</span> / <span>Điều khoản và Điều kiện</span>
        </nav>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Điều khoản và Điều kiện</h2>
          <p className="mb-4">
            Các điều khoản và điều kiện truy cập website này ("Điều khoản") là các điều khoản mà trang web này ("Trang
            web") cung cấp cho bạn (“bạn” / “của bạn”). Bằng cách truy cập Trang web này, bạn đồng ý bị ràng buộc bởi
            các Điều khoản này. Nếu bạn không đồng ý với các Điều khoản này, vui lòng không sử dụng Trang web.
          </p>

          <h3 className="text-xl font-semibold mb-2">Mục lục</h3>
          <p className="mb-6">Nhấp vào tiêu đề bên dưới để tìm hiểu thêm thông tin về từng mục:</p>

          {/* List of Terms */}
          <ol className="list-decimal ml-8 space-y-2 text-gray-800">
            <li>Thông tin về chúng tôi</li>
            <li>Câu hỏi hoặc Khiếu nại</li>
            <li>Bản quyền và các Quyền sở hữu trí tuệ khác</li>
            <li>Các thương hiệu và trang web khác của Reckitt Benckiser</li>
            <li>Mua hàng</li>
            <li>Liên kết từ các trang web của chúng tôi</li>
            <li>Lưu ý khi bạn sử dụng Trang web</li>
            <li>Người dùng do người dùng đã liên kết</li>
            <li>Nghĩa vụ pháp lý của bạn</li>
            <li>Thay đổi các Điều khoản này</li>
          </ol>

          {/* Detailed Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Điều khoản và Điều kiện truy cập website</h3>
            <p className="mb-4">
              Các điều khoản và điều kiện này ("Điều khoản") là các điều khoản mà trang web này ("Trang web") cung cấp
              cho bạn (“bạn” / “của bạn”). Bằng cách truy cập Trang web này, bạn đồng ý bị ràng buộc bởi các Điều khoản
              này. Nếu bạn không đồng ý với các Điều khoản này, vui lòng không sử dụng Trang web.
            </p>
            <p className="mb-4">
              Nhấp vào tiêu đề bên dưới để tìm hiểu thêm thông tin về từng mục:
            </p>

            {/* Sub-Section */}
            <div className="mb-8">
              <h4 className="text-lg font-medium">1. Thông tin về chúng tôi</h4>
              <p className="mb-2">
                Trang web này được vận hành bởi [Tên công ty] với mục đích cung cấp các thông tin về dịch vụ và sản phẩm
                của chúng tôi. Mọi thông tin trên trang web này đều mang tính chất tham khảo và không nhằm mục đích tư
                vấn pháp lý.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-medium">2. Câu hỏi hoặc Khiếu nại</h4>
              <p className="mb-2">
                Nếu bạn có bất kỳ câu hỏi hoặc khiếu nại nào về các điều khoản hoặc dịch vụ của chúng tôi, vui lòng liên
                hệ với chúng tôi qua email hoặc số điện thoại được cung cấp trên trang "Liên hệ".
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-medium">3. Bản quyền và các Quyền sở hữu trí tuệ khác</h4>
              <p className="mb-2">
                Tất cả nội dung trên Trang web này, bao gồm nhưng không giới hạn các văn bản, hình ảnh, video và đồ họa
                đều thuộc quyền sở hữu của [Tên công ty] và được bảo vệ bởi luật bản quyền.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
