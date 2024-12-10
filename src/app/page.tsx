import { type NextPage } from "next";
import { Navbar } from "@/components/Navbar";
import { BackgroundEffects } from "@/components/BackgroundEffects";

const Home: NextPage = () => {
  return (
    <main>
      <BackgroundEffects />
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter mb-8 leading-none">
            Own Real Assets
            <br />
            On-Chain
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Fully decentralised protocol for tokenized real-world assets. Simple
            yield farming backed by stocks, commodities etc.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-500 rounded-xl hover-scale glow">
              Launch App
            </button>
            <button className="px-8 py-4 bg-white/10 rounded-xl hover-scale">
              Learn More →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </main>
  );
};

export default Home;
