import Image from "next/image";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Partners from "./components/Partners";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Partners />
      <Services />
    </main>
  );
}
