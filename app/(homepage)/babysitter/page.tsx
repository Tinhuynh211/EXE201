import React from 'react';
import Image from 'next/image';


// Dữ liệu thành viên nhóm
const teamMembers = [
  {
    name: 'Tín Huỳnh',
    role: 'Tutor',
    image: '/images/tinhuynh.jpg',
    id: '6',
    social: {
      facebook: '#',
      email: '#',
    },
  },
  
];

const Team: React.FC = () => {
  return (
    <div className="py-10 px-4 text-center">
      <h2 className="text-2xl font-semibold mb-8">Đội Ngũ Trông Trẻ</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-between border border-gray-200"
          >
            {/* Ảnh đại diện của thành viên */}
            <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full border border-gray-300">
              <Image
                src={member.image}
                alt={`${member.name}'s avatar`}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>

            {/* Tên và vai trò của thành viên */}
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-medium">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>

            {/* Nút Thông tin chi tiết */}
            <a
             href='/favorites'
              className="mt-4 text-gray-500 py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300"
            >
              Thông tin chi tiết
            </a>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Team;
