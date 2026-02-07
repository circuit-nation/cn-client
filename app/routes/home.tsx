import type { Route } from "./+types/home";
import { useEffect } from "react";
import Lenis from "lenis";
import HeroSection from "~/components/home/hero";
import HomeHeader from "~/components/home/header";
import RaceCountdown from "~/components/home/race-countdown";
import Leaderboards from "~/components/home/leaderboard";
import SocialWall from "~/components/home/social-wall";
import Footer from "~/components/home/footer";
import About from "~/components/home/about";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Circuit Nation | Your home to motorsports" },
    { name: "description", content: "Discover the latest in motorsports, news, events, and community at Circuit Nation." },
  ];
}

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-background max-w-7xl mx-auto px-4 border border-red-500">
      <HomeHeader />
      <HeroSection />
      <RaceCountdown f1Image="/assets/f1-car.jpg" motoGpImage="/assets/motogp-bike.jpg" />
      <Leaderboards />
      <SocialWall />
      <About />
      <Footer />
    </main>
  );
};

export default Home;
