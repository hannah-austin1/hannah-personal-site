import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const NavBar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex flex-wrap items-center bg-prussian-blue p-1 font-Silkscreen ">
        <Link href="/">
          <a className="mr-4 inline-flex items-center p-1 ">
            <Image
              priority
              src="/images/pixel.png"
              height={64}
              width={64}
              alt="Hannah Austin"
            />
            Hannah Austin
          </a>
        </Link>
        <button
          className=" ml-auto inline-flex rounded p-3 outline-none hover:bg-blue-sapphire hover:text-rich-black lg:hidden"
          onClick={handleClick}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:w-auto lg:flex-grow`}
        >
          <div className="flex w-full flex-col items-start lg:ml-auto lg:inline-flex lg:h-auto  lg:w-auto lg:flex-row lg:items-center">
            <Link href="/">
              <a className="w-full items-center justify-center rounded px-3 py-2 font-Silkscreen font-bold hover:bg-blue-sapphire hover:text-rich-black lg:inline-flex lg:w-auto ">
                Home
              </a>
            </Link>
            <Link href="/">
              <a className="w-full items-center justify-center rounded px-3 py-2 font-Silkscreen font-bold hover:bg-blue-sapphire hover:text-rich-black lg:inline-flex lg:w-auto">
                About Me
              </a>
            </Link>
            <Link href="/">
              <a className="w-full items-center justify-center rounded px-3 py-2 font-Silkscreen font-bold hover:bg-blue-sapphire hover:text-rich-black lg:inline-flex lg:w-auto">
                Projects
              </a>
            </Link>
            <Link href="/">
              <a className="w-full items-center justify-center rounded px-3 py-2 font-Silkscreen font-bold hover:bg-blue-sapphire hover:text-rich-black lg:inline-flex lg:w-auto">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
