"use client";

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 backdrop-blur-xl bg-black/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold">Own</p>
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
