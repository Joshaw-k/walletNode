"use client";
import Image from "next/image";
import React from "react";
import TrustHero from "../assets/trustHero.jpg";
import PhantomHero from "../assets/phantomHero.jpg";
import MetamaskHero from "../assets/metamaskHero.png";
import Globe from "../assets/globe.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl  mx-auto mt-16 mb-24 px-4">
      {/* <div className="w-full carousel rounded-box">
        <div className="carousel-item w-full items-center gap-x-3 flex-col lg:flex-row ml-8">
          <div className="text-white text-center mb-5">
            <h1 className="font-bold text-3xl leading-snug mb-3">
              A Dapps entry point to wallets.
            </h1>
            <p>
              WalletNode is an open protocol Meticulously crafted tool that
              provides a seamless, simple and secure connection between you and
              any decentralized application (DApp) on various networks.
            </p>
          </div>
          <Image
            src={TrustHero}
            className="w-[100%]"
            alt="Tailwind CSS Carousel component"
            width={600}
            height={600}
          />
        </div>
        <div className="carousel-item w-full items-center gap-x-3 flex-col lg:flex-row ml-8">
          <div className="text-white text-center mb-5">
            <h1 className="font-bold text-3xl leading-snug mb-3">
              A Dapps entry point to wallets.
            </h1>
            <p>
              WalletNode is an open protocol Meticulously crafted tool that
              provides a seamless, simple and secure connection between you and
              any decentralized application (DApp) on various networks.
            </p>
          </div>
          <Image
            src={PhantomHero}
            className="w-[100%]"
            alt="Tailwind CSS Carousel component"
            width={600}
            height={600}
          />
        </div>
        <div className="carousel-item w-full items-center gap-x-3 flex-col lg:flex-row ml-8">
          <div className="text-white text-center mb-5">
            <h1 className="font-bold text-3xl leading-snug mb-3">
              A Dapps entry point to wallets.
            </h1>
            <p>
              WalletNode is an open protocol Meticulously crafted tool that
              provides a seamless, simple and secure connection between you and
              any decentralized application (DApp) on various networks.
            </p>
          </div>
          <Image
            src={MetamaskHero}
            className="w-[100%]"
            alt="Tailwind CSS Carousel component"
            width={600}
            height={600}
          />
        </div>
        <div className="carousel-item w-full items-center gap-x-3 flex-col lg:flex-row ml-8">
          <div className="text-white text-center mb-5">
            <h1 className="font-bold text-3xl leading-snug mb-3">
              A Dapps entry point to wallets.
            </h1>
            <p>
              WalletNode is an open protocol Meticulously crafted tool that
              provides a seamless, simple and secure connection between you and
              any decentralized application (DApp) on various networks.
            </p>
          </div>
          <Image
            src={Globe}
            className="w-[100%]"
            alt="Tailwind CSS Carousel component"
            width={600}
            height={600}
          />
        </div>
      </div> */}
      <div className="mb-14">
        <Carousel
          opts={{
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full max-w-sm md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto"
        >
          <CarouselContent>
            <CarouselItem className="">
              <div className="w-full gap-x-4 grid md:grid-cols-2">
                <div className="text-center mb-14 md:mb-0">
                  <h1 className="font-bold text-3xl leading-snug mb-3 text-white ">
                    A Dapps entry point to wallets.
                  </h1>
                  <p className="text-[#4B4F58]">
                    WalletNode is an open protocol Meticulously crafted tool
                    that provides a seamless, simple and secure connection
                    between you and any decentralized application (DApp) on
                    various networks.
                  </p>
                </div>
                <Image
                  src={TrustHero}
                  className="h-60 object-cover mx-auto"
                  alt="Tailwind CSS Carousel component"
                  width={450}
                  height={300}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="">
              <div className="w-full gap-x-4 grid md:grid-cols-2">
                <div className="text-center mb-14">
                  <h1 className="font-bold text-3xl leading-snug mb-3 text-white ">
                    A Dapps entry point to wallets.
                  </h1>
                  <p className="text-[#4B4F58]">
                    WalletNode is an open protocol Meticulously crafted tool
                    that provides a seamless, simple and secure connection
                    between you and any decentralized application (DApp) on
                    various networks.
                  </p>
                </div>
                <Image
                  src={MetamaskHero}
                  className="h-60 object-cover mx-auto"
                  alt="Tailwind CSS Carousel component"
                  width={450}
                  height={300}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="">
              <div className="w-full gap-x-4 grid md:grid-cols-2">
                <div className="text-center mb-14">
                  <h1 className="font-bold text-3xl leading-snug mb-3 text-white ">
                    A Dapps entry point to wallets.
                  </h1>
                  <p className="text-[#4B4F58]">
                    WalletNode is an open protocol Meticulously crafted tool
                    that provides a seamless, simple and secure connection
                    between you and any decentralized application (DApp) on
                    various networks.
                  </p>
                </div>
                <Image
                  src={PhantomHero}
                  className="h-60 object-cover mx-auto"
                  alt="Tailwind CSS Carousel component"
                  width={450}
                  height={300}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="">
              <div className="w-full gap-x-4 grid md:grid-cols-2">
                <div className="text-center mb-14">
                  <h1 className="font-bold text-3xl leading-snug mb-3 text-white ">
                    A Dapps entry point to wallets.
                  </h1>
                  <p className="text-[#4B4F58]">
                    WalletNode is an open protocol Meticulously crafted tool
                    that provides a seamless, simple and secure connection
                    between you and any decentralized application (DApp) on
                    various networks.
                  </p>
                </div>
                <Image
                  src={Globe}
                  className="h-60 object-cover mx-auto"
                  alt="Tailwind CSS Carousel component"
                  width={450}
                  height={300}
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <Link
        href="/wallet"
        className="text-center px-4 py-2 text-white bg-[#A76BF1] w-60 block rounded-md font-semibold mx-auto"
      >
        Connect Wallet
      </Link>
    </div>
  );
};

export default Hero;
