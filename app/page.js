import Image from "next/image";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Partners from "./components/Partners";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Partners />
      <Services />
    </main>
  );
}
