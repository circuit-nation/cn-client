import type { Route } from "./+types/home";import HeroSection from "~/components/hero";
import RaceCountdown from "~/components/race-countdown";
import Leaderboards from "~/components/leaderboard";
import SocialWall from "~/components/social-wall";
import Footer from "~/components/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Circuit Nation | Your home to motorsports" },
    { name: "description", content: "Discover the latest in motorsports, news, events, and community at Circuit Nation." },
  ];
}

const Home = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection heroImage={"/assets/hero-motorsport.jpg"} />
      <RaceCountdown f1Image={"/assets/f1-car.jpg"} motoGpImage={"/assets/motogp-bike.jpg"} />
      <Leaderboards />
      <SocialWall />
      <Footer />
    </main>
  );
};

export default Home;
