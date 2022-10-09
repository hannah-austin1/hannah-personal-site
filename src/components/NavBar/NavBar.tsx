import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

interface ILinks {
  title: string;
  href: string;
}

const links: ILinks[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Me",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const NavBar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <header></header>
      <nav
        className={clsx(
          "flex",
          "flex-wrap",
          "items-center",
          "bg-prussian-blue",
          "p-1",
          "font-Silkscreen"
        )}
      >
        <Link href="/">
          <a className={clsx("mr-4", "inline-flex", "items-center", "p-1")}>
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
          className={clsx(
            "ml-auto",
            "inline-flex",
            "rounded",
            "p-3",
            "outline-none",
            "hover:bg-blue-sapphire",
            "hover:text-rich-black",
            "lg:hidden"
          )}
          onClick={handleClick}
        >
          <svg
            className={clsx("h-6", "w-6")}
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
          className={clsx(
            { ["hidden"]: !active },
            "w-full",
            "lg:inline-flex",
            "lg:w-auto",
            "lg:flex-grow"
          )}
        >
          <div
            className={clsx(
              "flex w-full",
              "flex-col",
              "items-start",
              "lg:ml-auto",
              "lg:inline-flex",
              "lg:h-auto",
              "lg:w-auto",
              "lg:flex-row",
              "lg:items-center"
            )}
          >
            {links.map(({ title, href }) => (
              <Link href={href} key={`${href}-${title}`}>
                <a
                  className={clsx(
                    "w-full items-center",
                    "justify-center",
                    "rounded",
                    "px-3",
                    "py-2",
                    "font-Silkscreen",
                    "font-bold",
                    "hover:bg-blue-sapphire",
                    "hover:text-rich-black",
                    "lg:inline-flex",
                    "lg:w-auto"
                  )}
                >
                  {title}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
