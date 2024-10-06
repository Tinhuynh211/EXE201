import React from "react";
import Image from "next/image";

function AboutUs() {
  return (
    <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
      {/* Phần giới thiệu tổng quát */}
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto mb-12 text-center">
        <Image
          src="/images/CHECKPOINT 4.png"
          alt="Logo Công Ty"
          width={800}
          height={800}
          className="mx-auto"
        />
        <p className="text-gray-600 text-lg font-normal mt-4 italic">
          Tại trung tâm chăm sóc trẻ em của chúng tôi, chúng tôi tin vào việc xây dựng mối quan hệ đối tác vững chắc với phụ huynh để hỗ trợ sự phát triển và hạnh phúc toàn diện của trẻ em. Cùng nhau, chúng tôi tạo ra một nền tảng tích cực, giúp trẻ chuẩn bị cho thành công trong học tập và cuộc sống.
        </p>
      </div>

      {/* Phần giới thiệu đầu tiên */}
      <div className="relative py-24 bg-white">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="flex flex-col justify-start gap-6">
              <h6
                className="text-sm uppercase tracking-wide mb-2"
                style={{ color: "#00ADEE" }}
              >
                Giới thiệu
              </h6>
              <h1 className="text-gray-800 text-4xl font-bold leading-snug">
                Chúng tôi cung cấp dịch vụ giữ trẻ cho tất cả khách hàng và đối tác của{" "}
                <span style={{ color: "#00ADEE" }}>
                  Chăm sóc tương lai của bạn (TYF)
                </span>{" "}
                nhằm đạt được triết lý{" "}
                <span className="font-bold" style={{ color: "#00ADEE" }}>
                  cùng nhau như “MỘT”.
                </span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mt-4 italic">
                Tại TYF, chúng tôi hiểu rằng việc tin tưởng vào việc chăm sóc con bạn là một quyết định quan trọng. Đó là lý do tại sao chúng tôi cam kết cung cấp một môi trường an toàn, nuôi dưỡng và kích thích sự phát triển, nơi con bạn có thể phát triển toàn diện.
              </p>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute right-0 top-0 text-[200px] font-bold opacity-10 text-[#00ADEE]">
                1
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phần giới thiệu thứ hai */}
      <div className="relative py-0 bg-white">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="flex items-center justify-center lg:justify-start">
              <Image
                src="/images/CHECKPOINT 4.png"
                alt="Logo ONE"
                width={350}
                height={350}
                className="opacity-10 max-w-full lg:max-w-none"
              />
            </div>
            <div className="flex flex-col justify-center text-right">
              <p className="text-gray-700 text-lg leading-relaxed italic">
                Tại TYF, mỗi ngày là một cuộc phiêu lưu mới! Chúng tôi không chỉ là một nơi giữ trẻ mà còn là ngôi nhà thứ hai, nơi trẻ em được tự do khám phá, sáng tạo và nuôi dưỡng ước mơ. Với đội ngũ giáo viên giàu kinh nghiệm và tận tâm, chúng tôi tạo ra một môi trường học tập an toàn, thân thiện, nơi trẻ em được yêu thương và chăm sóc như chính con em mình, giúp các em phát triển toàn diện về thể chất, trí tuệ và tinh thần.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Phần hình ảnh toàn chiều rộng */}
      <div className="w-full my-16">
        <Image
          src="/images/bh.avif"
          alt="Hình ảnh toàn chiều rộng"
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Phần đội ngũ sáng lập */}
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto mt-16">
        <h3
          className="text-3xl font-bold text-center mb-8"
          style={{ color: "#00ADEE" }}
        >
          Gặp gỡ Đội Ngũ Sáng Lập
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Thành viên đội ngũ 1 */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/salem1.jpg"
              alt="Nguyễn Đoàn SaLem"
              width={150}
              height={150}
              className="rounded-full object-cover mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-900">
              Nguyễn Đoàn SaLem
            </h4>
            <p className="text-gray-600">Nhà Thiết Kế</p>
          </div>

          {/* Thành viên đội ngũ 2 */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/Leo.jpg"
              alt="Nguyễn Bùi Phương Anh"
              width={150}
              height={150}
              className="rounded-full object-cover mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-900">
              Nguyễn Bùi Phương Anh
            </h4>
            <p className="text-gray-600">Tiếp Thị</p>
          </div>

          {/* Thành viên đội ngũ 3 */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/NA.jpg"
              alt="Nguyễn Nhật Anh"
              width={150}
              height={150}
              className="rounded-full object-cover mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-900">
              Nguyễn Nhật Anh
            </h4>
            <p className="text-gray-600">Nhà Phát Triển</p>
          </div>

          {/* Thành viên đội ngũ 4 */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/tinhuynh.jpg"
              alt="Huỳnh Văn Tín"
              width={150}
              height={150}
              className="rounded-full object-cover mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-900">
              Huỳnh Văn Tín
            </h4>
            <p className="text-gray-600">Nhà Phát Triển</p>
          </div>

          {/* Thành viên đội ngũ 5 */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/Quan.jpg"
              alt="Nguyễn Anh Quân"
              width={150}
              height={150}
              className="rounded-full object-cover mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-900">
              Nguyễn Anh Quân
            </h4>
            <p className="text-gray-600">Tiếp Thị</p>
          </div>

          {/* Thành viên đội ngũ 6 */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/quyen2.jpg"
              alt="Phan Ngọc Dạ Quyên"
              width={150}
              height={150}
              className="rounded-full object-cover mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-900">
              Phan Ngọc Dạ Quyên
            </h4>
            <p className="text-gray-600">Tiếp Thị</p>
          </div>
        </div>
      </div>

      {/* Phần thành tích */}
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto mt-16">
        <h3
          className="text-3xl font-bold text-center mb-8"
          style={{ color: "#00ADEE" }}
        >
          Thành Tựu
        </h3>

        <div className="relative w-full mt-16">
          {/* Hình ảnh tràn viền */}
          <Image
            src="/images/pithching.jpg"
            alt="Hình ảnh thành tựu"
            width={2040}
            height={1365}
            className="w-full h-auto object-cover"
          />

          {/* Dòng mô tả phía dưới hình ảnh */}
          <div className="text-center mt-4">
            <p className="text-lg text-gray-700 italic">
              Tham gia cuộc thi Pitching của Đại học FPT và đạt giải khuyến khích
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
