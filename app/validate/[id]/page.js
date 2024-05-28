"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import ValidateImg from "../../assets/validateError.webp";
import WalletCon from "../../wallet/assets/wallcon.png";
import Trust from "../../wallet/assets/trust.jpg";
import Metamask from "../../wallet/assets/meta.png";
import Hashpack from "../../wallet/assets/hash.jpg";
import Keplr from "../../wallet/assets/keplr.png";
import Klever from "../../wallet/assets/klev.png";
import Cosmos from "../../wallet/assets/cosmos.png";
import Slope from "../../wallet/assets/slope.png";
import Binance from "../../wallet/assets/binance.png";
import Bitpay from "../../wallet/assets/bitpay.jpg";
import Phantom from "../../wallet/assets/phan.jpg";
import Argent from "../../wallet/assets/argent.jpg";
import Polkadot from "../../wallet/assets/polkadot.jpg";
import Iotex from "../../wallet/assets/iotex.jpg";
import Coinbase from "../../wallet/assets/cb.png";
import Crypto from "../../wallet/assets/crypto-com.png";
import Math from "../../wallet/assets/math.jpg";
import Ledger from "../../wallet/assets/ledge.png";
import Celo from "../../wallet/assets/celo_wallet.jpg";
import Valora from "../../wallet/assets/valora.jpg";
import Gnosis from "../../wallet/assets/ghin.jpg";
import Stargazer from "../../wallet/assets/starg.png";
import Onto from "../../wallet/assets/onto.png";
import Rainbow from "../../wallet/assets/rb.png";
import Solfare from "../../assets/solfare.png";
import CryptoCom from "../../wallet/assets/crypto-com.png";
import Exodus from "../../assets/exodus.png";
import Okx from "../../assets/okx.jpeg";
import Trezor from "../../assets/trezor-wallet.webp";

export default function Home() {
  const { id } = useParams();
  const data = [
    { img: WalletCon, title: "Wallet Connect" },
    { img: Trust, title: "Trust" },
    { img: Metamask, title: "Metamask" },
    { img: Hashpack, title: "Hashpack" },
    { img: Keplr, title: "Keplr" },
    { img: Solfare, title: "Solfare" },
    { img: CryptoCom, title: "Crypto.com" },
    { img: Exodus, title: "Exodus" },
    { img: Okx, title: "OKX" },
    { img: Trezor, title: "Trezor" },
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
    { img: Math, title: "Math" },
    { img: Ledger, title: "Ledger Live" },
    { img: Celo, title: "Celo" },
    { img: Valora, title: "Valora" },
    { img: Gnosis, title: "Gnosis" },
    { img: Stargazer, title: "Stargazer" },
    { img: Onto, title: "ONTO" },
    { img: Rainbow, title: "Rainbow" },
  ];
  return (
    <div className="">
      <div className="flex items-center justify-center h-[90vh]">
        <div>
          <div className="w-fit mx-auto">
            <Image
              src={ValidateImg}
              width={300}
              height={300}
              alt=""
              className="scale-75"
            />
          </div>
          <div className="text-center grid gap-y-3">
            <h1 className="text-white text-3xl">Wallet Connection Error!!!</h1>
            <p className="text-[#4B4F58]">Ensure you submit an active wallet</p>
            <Link
              href="/"
              className="text-center px-4 py-2 text-white bg-[#BC3FEA] w-60 block rounded-md font-semibold mx-auto"
            >
              Return
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
