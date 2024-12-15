"use client";

import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="block">
            <Image src="./own.svg" alt="OwnLogo" width={96} height={96} />
          </Link>
          <div className="flex items-center ml-8 sm:gap-4">
            <Link
              href="/secret-master-plan"
              className="px-4 py-2 rounded-full transition-colors hover:underline"
            >
              Secret Master Plan
            </Link>
            <button className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              Launch App →
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
