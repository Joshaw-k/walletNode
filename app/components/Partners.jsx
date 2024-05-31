"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import BloxStaking from "../assets/bloxStaking.png";
import Nimbus from "../assets/nimbus.png";
import Citrus from "../assets/citrus.png";
import Bitcoin from "../assets/Bitcoin.png";
import XRP from "../assets/XRP.png";
import Tether from "../assets/Tether.png";
import Litecoin from "../assets/Litecoin.png";
import Trust from "../assets/trustblue.jpg";
import Argent from "../assets/Argent.png";
import Coinbase from "../assets/coinbaseP.png";
import metamask from "../assets/MetaMask_Fox.svg.png";
import Binance from "../assets/Binance_Logo.svg.png";
import phantom from "../assets/phantom.webp";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const Partners = () => {
  return (
    <div className="px-4 my-24">
      <div className="text-center md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto">
        <p className="text-white text-sm mb-2">
          PARTNERS WHO BELIEVE IN OUR PROJECT
        </p>
        <h1 className="text-2xl text-[#4B4F58]">
          No server deployments, no new library to learn. WalletNode is
          open-source and uses minimal dependencies for maximum security and no
          code bloat.
        </h1>
      </div>
      <div className="mt-8">
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
            <CarouselItem className="pl-1 ml-5 basis-1/2 md:basis-1/5">
              <div className="p-1 w-50 h-50">
                <Image
                  src={phantom}
                  className="w-[60%]"
                  alt="Tailwind CSS Carousel component"
                  width={600}
                  height={600}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 ml-5 basis-1/2 md:basis-1/5">
              <div className="p-1 w-30">
                <Image
                  src={Trust}
                  className="w-[60%]"
                  alt="Tailwind CSS Carousel component"
                  width={600}
                  height={600}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 ml-5 basis-1/2 md:basis-1/5">
              <div className="p-1 w-30">
                <Image
                  src={Argent}
                  className="w-[60%]"
                  alt="Tailwind CSS Carousel component"
                  width={600}
                  height={600}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 ml-5 basis-1/2 md:basis-1/5">
              <div className="p-1 w-30">
                <Image
                  src={metamask}
                  className="w-[60%]"
                  alt="Tailwind CSS Carousel component"
                  width={600}
                  height={600}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 basis-1/2 md:basis-1/5">
              <div className="p-1 w-30">
                <Image
                  src={Binance}
                  className="w-[60%]"
                  alt="Tailwind CSS Carousel component"
                  width={600}
                  height={600}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 basis-1/2 md:basis-1/5">
              <div className="p-1 w-30">
                <Image
                  src={Tether}
                  className="w-[60%]"
                  alt="Tailwind CSS Carousel component"
                  width={600}
                  height={600}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 ml-5 basis-1/2 md:basis-1/5">
              <div className="p-1 w-50 h-50">
                <Image
                  src={phantom}
                  className="w-[60%]"
                  alt="Tailwind CSS Carousel component"
                  width={600}
                  height={600}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 ml-5 basis-1/2 md:basis-1/5">
              <div className="p-1 w-30">
                <Image
                  src={Trust}
                  className="w-[60%]"
                  alt="Tailwind CSS Carousel component"
                  width={600}
                  height={600}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 ml-5 basis-1/2 md:basis-1/5">
              <div className="p-1 w-30">
                <Image
                  src={Argent}
                  className="w-[60%]"
                  alt="Tailwind CSS Carousel component"
                  width={600}
                  height={600}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 ml-5 basis-1/2 md:basis-1/5">
              <div className="p-1 w-30">
                <Image
                  src={metamask}
                  className="w-[60%]"
                  alt="Tailwind CSS Carousel component"
                  width={600}
                  height={600}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 basis-1/2 md:basis-1/5">
              <div className="p-1 w-30">
                <Image
                  src={Binance}
                  className="w-[60%]"
                  alt="Tailwind CSS Carousel component"
                  width={600}
                  height={600}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="pl-1 basis-1/2 md:basis-1/5">
              <div className="p-1 w-30">
                <Image
                  src={Tether}
                  className="w-[60%]"
                  alt="Tailwind CSS Carousel component"
                  width={600}
                  height={600}
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Partners;
