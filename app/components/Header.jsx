"use client";

import { useEffect } from "react";
import { bitPrices } from "../utils/bitPrices";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.png";

const Header = ({ coinData }) => {
  const handlePercentage = (percent) => {
    if (percent < 0) {
      return true;
    } else {
      return false;
    }
  };
  const handleSlider = () => {
    const copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
  };
  useEffect(() => {
    if (coinData) handleSlider();
  }, []);

  return (
    <>
      <div>
        {coinData && (
          <div className="bg-[rgba(48,48,48,0.3)] font-urbanist w-full p-2.5 cursor-pointer border-t border-[rgb(44,44,44)] overflow-hidden logos flex gap-x-14">
            <div className="flex gap-x-14 logos-slide">
              {[
                0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 14, 15, 16, 20, 21, 22, 24, 26,
                29,
              ].map((item, index) => {
                const {
                  name,
                  symbol,
                  image,
                  current_price,
                  price_change_percentage_24h,
                } = coinData[item];
                const color = handlePercentage(price_change_percentage_24h);
                return (
                  <div
                    key={index}
                    className="flex justify-start items-center gap-x-2"
                  >
                    <Image
                      width={30}
                      height={30}
                      src={image}
                      alt="logo"
                      className="w-[25px] h-[25px]"
                    />
                    <div className="flex gap-x-2 items-center">
                      <h5 className="font-semibold text-[#0A58CA]">{name}</h5>
                      <span className="text-[#868686] uppercase">
                        ({symbol})
                      </span>
                    </div>
                    <div
                      className={`flex gap-x-2 items-center ${
                        color ? "text-[#FF4921]" : "text-[#30FF21]"
                      }`}
                    >
                      <h5 className="font-semibold">
                        ${current_price.toLocaleString("en-US")}
                      </h5>
                      <span className="text-xs">
                        {price_change_percentage_24h.toFixed(2)}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div className="mt-8 text-white flex items-center justify-between w-[90%] md:max-w-xl lg:max-w-5xl xl:max-w-7xl mx-auto">
          <Link href="/" className="w-11 md:w-14 lg:w-16">
            <Image
              src={Logo}
              width={300}
              height={300}
              alt=""
              className="scale-150"
            />
          </Link>
          <div className="font-semibold">
            <Link href="/wallet">
              <button className="px-3 g:px-5 py-3 text-[#A76BF1] lg:text-lg hover:bg-[#A76BF1] hover:text-white rounded-full">
                Connect Wallet
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
