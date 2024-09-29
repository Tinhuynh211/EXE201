import Image from 'next/image';

const teamMembers = [
  {
    name: 'Mai Trần',
    role: 'Babysister',
    image: '/path/to/maitran.jpg', // Update paths with actual image URLs
    social: {
      facebook: '#',
      email: '#',
      phone: '#',
      youtube: '#',
    },
  },
  {
    name: 'Huyền Hà',
    role: 'Babysister',
    image: '/path/to/huyenha.jpg',
    social: {
      facebook: '#',
      email: '#',
    },
  },
  {
    name: 'Tuyết Nhung',
    role: 'Babysister',
    image: '/path/to/tuyetnhung.jpg',
    social: {
      facebook: '#',
      email: '#',
    },
  },
  {
    name: 'Hoàng Lệ',
    role: 'Babysister',
    image: '/path/to/hoangle.jpg',
    social: {
      facebook: '#',
      email: '#',
    },
  },
  {
    name: 'Uyên Sa',
    role: 'Babysister',
    image: '/path/to/uyensa.jpg',
    social: {
      facebook: '#',
      email: '#',
    },
  },
  {
    name: 'Huyền Thương',
    role: 'Babysister',
    image: '/path/to/huyenthuong.jpg',
    social: {
      facebook: '#',
      email: '#',
    },
  },
  {
    name: 'Jay',
    role: 'Babysister',
    image: '/path/to/jay.jpg',
    social: {
      facebook: '#',
      email: '#',
    },
  },
];

const Team = () => {
  return (
    <div className="py-10 text-center">
      <h2 className="text-2xl font-semibold mb-8">Babysister Member</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transform transition duration-300 hover:scale-105"
          >
            <div className="w-32 h-32 mb-4 overflow-hidden rounded-full">
              <Image
                src={member.image}
                alt={member.name}
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-medium">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
            <div className="flex space-x-4 mt-4">
              {member.social.facebook && (
                <a
                  href={member.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              )}
              {member.social.email && (
                <a
                  href={`mailto:${member.social.email}`}
                  className="text-gray-400 hover:text-blue-500"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              )}
              {member.social.phone && (
                <a
                  href={`tel:${member.social.phone}`}
                  className="text-gray-400 hover:text-blue-500"
                >
                  <i className="fas fa-phone"></i>
                </a>
              )}
              {member.social.youtube && (
                <a
                  href={member.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;