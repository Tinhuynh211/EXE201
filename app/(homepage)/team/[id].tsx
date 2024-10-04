import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';

// Danh sách thành viên với các thông tin cơ bản
const teamMembers = [
  {
    id: '1',
    name: 'Phan Quốc Thái Bảo',
    role: 'Tutor',
    bio: 'Thái Bảo là một người đam mê với việc dạy học và giúp các bạn nhỏ phát triển toàn diện.',
    image: '/images/maitran.jpg',
    email: 'thai.bao@example.com',
    phone: '123-456-789',
  },
  {
    id: '2',
    name: 'Huyền Hà',
    role: 'Tutor',
    bio: 'Huyền Hà là một giáo viên tận tâm, luôn đem lại niềm vui và kiến thức cho các bé.',
    image: '/images/huyenha.jpg',
    email: 'huyen.ha@example.com',
    phone: '123-456-789',
  },
  // Thêm các thành viên khác...
];

const TeamMemberDetail: React.FC = () => {
  // Sử dụng hook useRouter để lấy `id` từ URL
  const router = useRouter();
  const { id } = router.query;

  // Tìm thông tin của thành viên dựa trên `id`
  const member = teamMembers.find((member) => member.id === id);

  if (!member) {
    return <div>Không tìm thấy thông tin của thành viên!</div>;
  }

  return (
    <div className="py-10 px-4 text-center">
      <h1 className="text-3xl font-semibold mb-6">{member.name}</h1>
      <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Ảnh đại diện của thành viên */}
        <div className="relative w-40 h-40 mb-4 mx-auto overflow-hidden rounded-full">
          <Image
            src={member.image}
            alt={member.name}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <h3 className="text-lg font-medium">{member.role}</h3>
        <p className="text-sm text-gray-500 mb-4">{member.bio}</p>

        {/* Thông tin chi tiết */}
        <div className="text-left">
          <p className="text-sm mb-2">
            <strong>Email:</strong> {member.email}
          </p>
          <p className="text-sm mb-2">
            <strong>Phone:</strong> {member.phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberDetail;
