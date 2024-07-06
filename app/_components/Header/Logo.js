import Image from "next/image";
import Link from "next/link";
import logo from "@/public/Logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4">
      <div className="flex">
        <Image
          priority
          src={logo}
          width={150}
          height={100}
          alt="The Wild Oasis logo"
          quality={100}
        />
      </div>
    </Link>
  );
}

export default Logo;
