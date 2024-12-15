import { type NextPage } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import Link from "next/link";

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
            <Link
              href="https://own-6.gitbook.io/own-docs/"
              target="_blank"
              className="px-8 py-4 bg-white/10 rounded-xl hover:scale-105 transition-transform text-center inline-block"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
