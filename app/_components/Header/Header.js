// app/_components/Header.js
"use client";
import Navigation from "@/app/_components/Header/Navigation";
import Logo from "@/app/_components/Header/Logo";
import Tools from "@/app/_components/Header/Tools";

function Header() {
  return (
    <header className="flex justify-center items-center px-2 lg:px-16 py-3 max-md:px-5 z-10 absolute top-0 left-0 w-full">
      <div className="flex gap-1 justify-between items-center w-full max-w-[1440px]">
        <Logo />
        <div className="flex gap-10">
          <Navigation />
          <Tools />
        </div>
      </div>
    </header>
  );
}

export default Header;
