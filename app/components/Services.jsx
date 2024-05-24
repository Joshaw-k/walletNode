import Image from "next/image";
import React from "react";
import { FaTools } from "react-icons/fa";

const Services = () => {
  const data = [
    {
      title: "RECTIFICATION",
      desc: "Rectification support warranties completely decentralized",
    },
    {
      title: "VALIDATION",
      desc: "Validation completely decentralized supports wallet",
    },
    {
      title: "RECOVERY",
      desc: "Recovery wallet Dapps with Blockchain and DeFi",
    },
    {
      title: "HARVEST MY STAKINGS",
      desc: "When you choose to redeem, we’ll return your assets to your Spot Wallet the following day.",
    },
    {
      title: "WITHDRAWAL",
      desc: "A crypto withdrawal is a transaction that allows you to move your cryptocurrency balance off the platform to an external crypto wallet that you control such as a Ledger or a Trezor.",
    },
    {
      title: "STAKING POOL",
      desc: "A staking pool allows multiple stakeholders (or bagholders) to combine their computational resources as a way to increase their chances of being rewarded.",
    },
    {
      title: "MIGRATION",
      desc: "Migrate tokens to a new contract",
    },
    {
      title: "ADD TOKENS",
      desc: "Crypto tokens are a type of cryptocurrency that represents an asset or specific use and reside on their own blockchain.",
    },
    {
      title: "CONNECT TO DAPPS",
      desc: "Connect to Dapps",
    },
    {
      title: "PURCHASE TOKEN",
      desc: "Also, buy bitcoin, ether, and many common cryptocurrencies.",
    },
    {
      title: "MY NFTS",
      desc: "view your collection of digital works",
    },
    {
      title: "STAKING REVIEW",
      desc: "Interaction between mobile apps and mobile browsers are supported via mobile deep linking Having complete control of your staking",
    },
  ];
  return (
    <div className="my-8">
      <div className="text-center px-4 mb-8">
        <h1 className="text-white text-2xl font-bold mb-4">Services</h1>
        <p className="text-[#4B4F58]">
          EvmNode is a decentralized protocol. dConnect create an innovative
          open-source software ecosystem that is both secure and resilient. And
          it allows developers to create new online tools, many of which have
          the interest of global business markets. Validation of wallet will be
          completed below as follows
        </p>
      </div>
      <div className="grid px-3 gap-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="border-2 border-[#3E495C] text-center py-10 rounded-lg"
          >
            <div className="w-fit mx-auto mb-4">
              <FaTools className="text-6xl text-[#4B4F58]" />
            </div>
            <div className="mb-8">
              <h1 className="text-xl font-semibold mb-8 text-white">
                {item.title}
              </h1>
              <p className="text-[#4B4F58]">{item.desc}</p>
            </div>
            <button className="px-4 py-2 bg-[#BC3FEA] text-white rounded-md">
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
