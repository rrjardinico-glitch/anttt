
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2, Leaf, Heart } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Education", href: "/education" },
  { name: "Hobbies", href: "/hobbies" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#f4dce5] bg-[#fffbfd]/95 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">

        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-[#456344]"
        >
          <div className="rounded-xl bg-[#e3efdf] p-2">
            <Code2 size={23} />
          </div>
          <span>MyPortfolio</span>
          <Heart size={15} className="fill-[#f4b8cc] text-[#e99bb7]" />
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-xs sm:px-4 sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#91ad83] text-white shadow-md shadow-[#91ad83]/20"
                    : "text-[#66805f] hover:bg-[#fce7ef] hover:text-[#bd7894]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

      </div>
    </header>
  );
}
