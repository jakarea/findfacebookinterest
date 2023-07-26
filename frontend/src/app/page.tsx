import Faq from "@/components/Faq";
import HomeDiscover from "@/components/Home/Discover";
import HomeExplorer from "@/components/Home/Explorer";
import HomeGetStart from "@/components/Home/GetStart";
import HomeHero from "@/components/Home/HomeHero";
import HomePoster from "@/components/Home/Poster";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <main className="">
      <HomeHero />
      <HomePoster />

      <HomeDiscover />
      <HomeExplorer />

      <Faq />
      <HomeGetStart />
    </main>
  );
}
