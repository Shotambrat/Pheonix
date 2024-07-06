"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [active, setActive] = useState("/");
  const navArr = [
    {
      title: "Главная",
      src: "/",
    },
    {
      title: "О нас",
      src: "/about",
    },
    {
      title: "Продукты",
      src: "/products",
    },
    {
      title: "Контакты",
      src: "/contacts",
    },
    {
      title: "Новости",
      src: "/news",
    },
  ];

  const handleActive = (src) => {
    setActive(src);
  };

  return (
    <nav className="z-10 text-xl hidden lg:flex">
      <ul className="flex gap-16 justify-between self-stretch my-auto text-lg text-neutral-900 max-md:flex-wrap max-md:max-w-full">
        {navArr.map((option) => (
          <Link
            href="/"
            className="flex items-center gap-4 z-10 text-white font-semibold"
            key={option.src}
            onClick={() => handleActive(option.src)}
          >
            <li className={`cursor-pointer transition-all duration-300 ${option.src == active ? 'border-b-2 border-white':''}`}>{option.title}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
