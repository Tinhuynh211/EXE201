import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaEnvelope } from 'react-icons/fa';

const TutorProfile: React.FC = () => {
  const tutor = {
    name: 'Huỳnh Văn Tín',
    role: 'Người đồng hành',
    image: '/images/tinhuynh.jpg',
    backgroundImage: '/images/background.jpg',
    bio: `
      [Số năm kinh nghiệm] năm kinh nghiệm giảng dạy cho học sinh ở mọi lứa tuổi và trình độ.
      Chuyên môn về các môn học. Kinh nghiệm giảng dạy tại các trường học uy tín.
      Kinh nghiệm gia sư cho học sinh đạt điểm cao trong các kỳ thi.
    `,
    teachingMethod: `
      Phương pháp giảng dạy hiện đại, bám sát chương trình học, phù hợp với từng học sinh.
      Rèn luyện kỹ năng tư duy, rèn luyện trí tuệ và khả năng ghi nhớ hiệu quả.
      Tạo môi trường học tập vui vẻ, thoải mái để học sinh tiếp thu kiến thức tốt nhất.
      Sử dụng các tài liệu giảng dạy phong phú, đa dạng.
      Luôn quan tâm, đồng viên và khích lệ học sinh.
    `,
    skills: `
     Guitar, Cờ tướng, Cờ vua, Đá bóng, Cầu lông, ...
     
    `,
  };

  const certifications = [
    { title: 'Bằng tốt nghiệp', description: 'Description for Title 1', image: '/images/fpt.jpg' },
    { title: 'IELTS', description: 'Description for Title 2', image: '/images/ielts.png' },
    { title: 'Chứng chỉ tiếng Anh', description: 'Description for Title 3', image: '/images/coursera.png' },
  ];

  const similarCandidates = [
    { name: 'Thái Bảo', points: 95, image: '/images/Quan.jpg' },
    { name: 'Nhật Anh', points: 73, image: '/images/NA.jpg' },
    { name: 'Sa Lem', points: 81, image: '/images/salem1.jpg' },
    { name: 'Phương Anh', points: 88, image: '/images/Leo.jpg' },
  ];

  return (
    <div className="container mx-auto py-10">
      {/* Ảnh nền */}
      <div className="relative h-60 w-full">
        <Image
          src={tutor.backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Thông tin chính của gia sư */}
      <div className="relative bg-white shadow-md rounded-lg px-8 py-6 -mt-16 z-10">
        <div className="absolute top-[-60px] left-1/2 transform -translate-x-1/2">
          <div className="w-32 h-32 relative rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image src={tutor.image} alt="Tutor Avatar" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="text-center mt-16">
          <h1 className="text-4xl font-bold">{tutor.name}</h1>
          <p className="text-xl text-gray-500">{tutor.role}</p>
          {/* Thêm icon Facebook và Gmail */}
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://www.facebook.com/dead.brain211/" target="_blank" rel="noopener noreferrer" className="text-blue-600">
              <FaFacebook size={24} />
            </a>
            <a href="mailto:tinhuynh211@gmail.com" className="text-red-600">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Giới thiệu và biểu đồ */}
      <div className="mt-8 grid grid-cols-3 gap-6">
        {/* Phần Giới thiệu */}
        <div className="col-span-2 bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Giới thiệu bản thân</h2>
          <div className="text-gray-600">
            <h3 className="font-medium text-lg">Kinh nghiệm giảng dạy:</h3>
            <p>{tutor.bio}</p>
            <h3 className="font-medium text-lg mt-4">Phương pháp giảng dạy:</h3>
            <p>{tutor.teachingMethod}</p>
            <h3 className="font-medium text-lg mt-4">Kỹ năng ngoài:</h3>
            <p>{tutor.skills}</p>
          </div>
        </div>

        {/* Biểu đồ phù hợp */}
        <div className="bg-white p-6 shadow-md rounded-lg">
  <h2 className="text-2xl font-semibold mb-4">Các kỹ năng khác</h2>
  <div className="space-y-4">
    {/* Danh sách các kỹ năng */}
    <div className="flex items-center justify-between">
      <span className="font-medium text-gray-700">Kỹ năng giao tiếp</span>
      <span className="text-gray-500">80%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
    </div>

    <div className="flex items-center justify-between">
      <span className="font-medium text-gray-700">Kỹ năng lãnh đạo</span>
      <span className="text-gray-500">60%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
    </div>

    <div className="flex items-center justify-between">
      <span className="font-medium text-gray-700">Kỹ năng giải quyết vấn đề</span>
      <span className="text-gray-500">90%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
    </div>

    <div className="flex items-center justify-between">
      <span className="font-medium text-gray-700">Kỹ năng thuyết trình</span>
      <span className="text-gray-500">75%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
    </div>

    <div className="flex items-center justify-between">
      <span className="font-medium text-gray-700">Kỹ năng làm việc nhóm</span>
      <span className="text-gray-500">85%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
    </div>
  </div>
</div>

      </div>

      {/* Chứng chỉ */}
      <div className="mt-8 bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Chứng chỉ</h2>
        <div>
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center border-b py-4">
              <div className="w-12 h-12 mr-4">
                <Image src={cert.image} alt={cert.title} width={48} height={48} className="rounded-full" />
              </div>
              <div>
                <h3 className="font-medium text-lg">{cert.title}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ứng viên tương tự */}
      <div className="mt-8 bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Ứng viên tương tự</h2>
        <div>
          {similarCandidates.map((candidate, index) => (
            <div key={index} className="flex items-center border-b py-4">
              <div className="w-12 h-12 mr-4">
                <Image src={candidate.image} alt={candidate.name} width={48} height={48} className="rounded-full" />
              </div>
              <div className="flex justify-between w-full items-center">
                <div>
                  <h3 className="font-medium text-lg">{candidate.name}</h3>
                  <p className="text-gray-600">{candidate.points} points</p>
                </div>
                <button className="bg-blue-600 text-white py-1 px-4 rounded-full">Thông Tin</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorProfile;
