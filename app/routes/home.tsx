import type { Route } from "./+types/home";
import { Hero } from "../components/hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Circuit Nation | Your home to motorsports" },
    { name: "description", content: "Discover the latest in motorsports, news, events, and community at Circuit Nation." },
  ];
}

export default function Home() {
  return <Hero />;
}
