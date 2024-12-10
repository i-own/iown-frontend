"use client";

import Image from "next/image";

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <Image src="./own.svg" alt="OwnLogo" width={96} height={96} />
          <button
            className="px-6 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            onClick={() => window.open("/app", "_blank")}
          >
            Launch App →
          </button>
        </div>
      </div>
    </nav>
  );
}
