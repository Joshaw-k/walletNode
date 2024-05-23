"use client";

import { useEffect } from "react";
import { bitPrices } from "../utils/bitPrices";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
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
    handleSlider();
  });

  return (
    <>
      <div className="bg-[rgba(48,48,48,0.3)] font-urbanist w-full p-2.5 cursor-pointer mt-5 border-t border-[rgb(44,44,44)] overflow-hidden logos flex gap-x-14">
        <div className="flex gap-x-14 logos-slide">
          {bitPrices.map((item, index) => {
            const { logo, fullName, shortName, price, percent } = item;
            const color = handlePercentage(percent);
            return (
              <div
                key={index}
                className="flex justify-start items-center gap-x-2"
              >
                <Image
                  width={30}
                  height={30}
                  src={logo}
                  alt="logo"
                  className="w-[25px] h-[25px]"
                />
                <div className="flex gap-x-2">
                  <h5 className="font-semibold text-[#0A58CA]">{fullName}</h5>
                  <span className="text-xs text-[#868686]">{shortName}</span>
                </div>
                <div className="flex gap-x-2">
                  <h5 className="font-semibold text-white">{price}</h5>
                  {color ? (
                    <span className={`text-xs text-[#FF4921]`}>{percent}%</span>
                  ) : (
                    <span className={`text-xs text-[#30FF21]`}>
                      +{percent}%
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-8 text-white flex items-center justify-between w-[90%] mx-auto">
        <Link href="/" className="font-bold text-4xl text-[#BC3FEA]">
          LOGO
        </Link>
        <div className="font-semibold">
          <Link href="/wallet">
            <button className="px-3 py-3 text-[#BC3FEA] hover:bg-[#BC3FEA] hover:text-white rounded-full">
              Connect Wallet
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
