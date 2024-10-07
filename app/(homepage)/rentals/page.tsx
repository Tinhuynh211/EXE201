import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Tiêu đề */}
      <header className="bg-white text-center py-6 border-b border-gray-300">
        <h1 className="text-3xl font-bold text-blue-700">LIÊN HỆ TRUNG TÂM DỊCH VỤ KHÁCH HÀNG TYF</h1>
        <p className="mt-2 text-gray-700 max-w-4xl mx-auto">
          TYF cung cấp các cách liên hệ khách hàng cá nhân và doanh nghiệp, khách hàng ưu tiên, bao gồm qua hotline,nhắn tin trực tiếp 
          
        </p>
      </header>

      {/* Nội dung chính */}
      <div className="container mx-auto px-6 py-10">
        {/* Thông tin liên hệ */}
        <div className="flex justify-around text-left mb-8">
          {/* Khách hàng cá nhân */}
          <div className="w-1/3 p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-lg font-semibold text-red-600 mb-4">Khách hàng cá nhân</h2>
            <p className="text-xl font-bold">1900 545426</p>
            <p className="text-gray-600 mb-2">(84-24) 37674050 (Quốc tế gọi về)</p>
            <p className="text-gray-600">Email: <a href="mailto:tyfcompany@gmail.com" className="text-blue-600">tyfcompany@gmail.com</a></p>
          </div>

          {/* Khách hàng doanh nghiệp */}
          <div className="w-1/3 p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-lg font-semibold text-red-600 mb-4">Khách hàng doanh nghiệp</h2>
            <p className="text-xl font-bold">1900 9045</p>
            <p className="text-gray-600 mb-2">024 6297 6688</p>
            <p className="text-gray-600">Email: <a href="mailto:tyfcompany@gmail.com" className="text-blue-600">tyfcompany@gmail.com</a></p>
          </div>

          {/* Khách hàng ưu tiên */}
          <div className="w-1/3 p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-lg font-semibold text-red-600 mb-4">Khách hàng ưu tiên</h2>
            <p className="text-xl font-bold">024 2204 8899</p>
            <p className="text-gray-600">Email: <a href="mailto:tyfcompany@gmail.com" className="text-blue-600">tyfcompany@gmail.com</a></p>
          </div>
        </div>

        {/* Form thông tin liên hệ */}
        <div className="bg-white p-8 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">Thông tin và nội dung liên hệ</h2>

          {/* Thông báo lưu ý */}
          <p className="text-red-600 mb-4">
            Lưu ý: Yêu cầu của quý khách sẽ được xử lý tối đa trong ngày làm việc tiếp theo. Với các yêu cầu cấp bách như không liên lạc được với nhân viên,xử lý thanh toán, hoàn tiền, ... Quý khách vui lòng liên hệ với nhân viên công ty theo số <strong>0945199743</strong> để được phục vụ sớm nhất.
          </p>

          {/* Form nhập liệu */}
          <form>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700 font-medium">
                  Họ và Tên (*)
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                  placeholder="Nhập họ và tên"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">
                  Email (*)
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                  placeholder="Nhập email của bạn"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-gray-700 font-medium">
                  Số điện thoại (*)
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                  placeholder="Nhập số điện thoại"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 text-gray-700 font-medium">
                Nội dung (*)
              </label>
              <textarea
                id="message"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                rows={5}
                placeholder="Nhập nội dung liên hệ"
                required
              ></textarea>
            </div>

        

            {/* Nút gửi */}
            <div className="mt-6">
              <button
                type="submit"
                className="bg-blue-700 text-white font-semibold py-2 px-6 rounded hover:bg-blue-800 transition duration-300"
              >
                Gửi
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
