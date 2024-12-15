export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-400">© 2024 Own</div>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Docs
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Twitter
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
