import React from "react";
import Image from "next/image";

function AboutUs() {
  return (
    <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
      {/* Existing sections */}
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto mb-12 text-center">
        <Image
          src="/images/CHECKPOINT 4.png" // Đảm bảo đường dẫn chính xác
          alt="Company Logo"
          width={800}
          height={800}
          className="mx-auto"
        />
        <p className="text-gray-600 text-lg font-normal mt-4 italic">
          At our child care center, we believe in building strong partnerships
          with parents to support the overall well-being and development of
          their children. Together, we create a positive foundation that
          prepares children for future success in school and in life.
        </p>
      </div>

      {/* First About Us Section */}
      <div className="relative py-24 bg-white">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="flex flex-col justify-start gap-6">
              <h6
                className="text-sm uppercase tracking-wide mb-2"
                style={{ color: "#00ADEE" }}
              >
                About Us
              </h6>
              <h1 className="text-gray-800 text-4xl font-bold leading-snug">
                We provide babysitting services to all customers and partners of{" "}
                <span style={{ color: "#00ADEE" }}>
                  Take care of your Future (TYF)
                </span>{" "}
                to achieve the philosophy of{" "}
                <span className="font-bold" style={{ color: "#00ADEE" }}>
                  together as “ONE”.
                </span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mt-4 italic">
                At TYF, we understand that entrusting your child s care is a
                significant decision. Thats why we are committed to providing a
                safe, nurturing, and stimulating environment where your child
                can thrive.
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

      {/* Second About Us Section */}
      <div className="relative py-0 bg-white">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="flex items-center justify-center lg:justify-start">
              <Image
                src="/images/CHECKPOINT 4.png"
                alt="ONE Logo"
                width={350}
                height={350}
                className="opacity-10 max-w-full lg:max-w-none"
              />
            </div>
            <div className="flex flex-col justify-center text-right">
              <p className="text-gray-700 text-lg leading-relaxed italic">
                At TYF, every day is a new adventure! We are not simply a
                babysitting place but also a second home, where children are
                free to explore, create, and nurture their dreams. With a team
                of experienced and dedicated teachers, we create a safe,
                friendly learning environment where children are loved and cared
                for as their own, helping them develop comprehensively
                physically, intellectually, and spiritually.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Image Section */}
      <div className="w-full my-16">
        <Image
          src="/images/bh.avif"
          alt="Full Width Image"
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Founding Team Section */}
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto mt-16">
        <h3
          className="text-3xl font-bold text-center mb-8"
          style={{ color: "#00ADEE" }}
        >
          Meet Our Founding Team
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
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
            <p className="text-gray-600">Designer</p>
          </div>

          {/* Team Member 2 */}
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
            <p className="text-gray-600">Marketing</p>
          </div>

          {/* Team Member 3 */}
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
            <p className="text-gray-600">Developer</p>
          </div>

          {/* Team Member 4 */}
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
            <p className="text-gray-600">Developer</p>
          </div>

          {/* Team Member 5 */}
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
            <p className="text-gray-600">Marketing</p>
          </div>

          {/* Team Member 6 */}
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
            <p className="text-gray-600">Marketing</p>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto mt-16">
        <h3
          className="text-3xl font-bold text-center mb-8"
          style={{ color: "#00ADEE" }}
        >
          Achievements
        </h3>

        <div className="relative w-full mt-16">
          {/* Hình ảnh tràn viền */}
          <Image
            src="/images/pithching.jpg" // Đảm bảo thay thế bằng đúng đường dẫn
            alt="Achievements Banner"
            width={2040}
            height={1365}
            className="w-full h-auto object-cover"
          />

          {/* Dòng chữ nổi bật */}

          {/* Dòng mô tả phía dưới hình ảnh */}
          <div className="text-center mt-4">
            <p className="text-lg text-gray-700 italic">
              Participated in FPT University Pitching Challenge and won a
              consolation prize
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
