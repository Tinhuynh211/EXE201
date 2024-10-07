import Link from "next/link";
import Image from "next/image";
import { LuTent } from "react-icons/lu";
import { Button } from "../ui/button";

function Logo() {
  return (
    <div className="flex justify-center items-center">
      <Image
        src="/images/Logo.png"
        alt="logo"
        width={50} // Đặt giá trị tối đa cho chiều rộng
        height={50} // Tỷ lệ chiều cao để đảm bảo hình không bị kéo giãn
        className="h-auto w-auto max-w-full" // Đảm bảo logo giữ tỷ lệ và tự điều chỉnh kích thước
      />
    </div>
  );
}

export default Logo;
