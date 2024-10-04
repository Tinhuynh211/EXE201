import React from "react";

// Component ContactButton với biểu tượng Messenger
const ContactButton: React.FC = () => {
  return (
    <a
      href="https://www.facebook.com/messages/t/406386295898124" // Thay đổi thành URL m.me của bạn
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out flex items-center"
      title="Contact Us"
    >
      {/* Thay đổi biểu tượng SVG thành biểu tượng Messenger */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-6 h-6 mr-2"
      >
        <path d="M16.004 2.006c-7.733 0-13.995 5.925-13.995 13.226 0 4.156 2.1 7.877 5.398 10.215v4.508c0 .278.318.434.552.276l5.538-3.634c.83.116 1.68.175 2.507.175 7.734 0 13.996-5.925 13.996-13.226s-6.263-13.226-13.996-13.226zm6.48 7.846l-4.2 6.97c-.404.671-1.29.874-1.914.438l-3.368-2.376-4.37 4.056c-.46.427-1.197-.23-.832-.74l4.2-6.97c.404-.67 1.29-.873 1.914-.438l3.368 2.376 4.37-4.056c.46-.427 1.197.23.832.74z" />
      </svg>
      <span>Contact Us</span>
    </a>
  );
};

export default ContactButton;
