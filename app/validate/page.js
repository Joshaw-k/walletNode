import Image from "next/image";
import ValidateImg from "../assets/validateError.png";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center h-[70vh]">
        <div>
          <div>
            <Image src={ValidateImg} width={300} height={300} alt="" />
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
