import bg from "../assets/bg.png";
import { ShoppingCart } from "lucide-react";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <nav
      className="relative w-full h-[80vh] md:h-[50vh] lg:h-screen text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(273deg,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0.65)_100%)] bg-blend-multiply pointer-events-none" />
      <div className="relative z-10 flex justify-between items-center px-10 py-5">
        <h1 className="font-paytone text-2xl md:text-4xl lg:text-4xl font-500 cursor-pointer">
          bakery
        </h1>
        <div className="flex justify-center items-center">
          <ShoppingCart size={25} className="cursor-pointer" />
          <button className="bg-[#814A22]  cursor-pointer px-3 lg:px-7 py-1.5 rounded ml-5">
            Login
          </button>
        </div>
      </div>
      <div className="relative z-10 w-[38.12%] h-[49.71%] ml-[8.40%] mt-[8.79%]">
        <h1 className="font-playfair font-bold text-5xl lg:text-[64px] leading-tight">
          HANDMADE BAKED GOODS AND COOKIES
        </h1>
        <button className="bg-[#F3A446] py-2 px-6 rounded mt-5 font-bold cursor-pointer flex justify-center items-center">
          See more <ArrowRight size={20} className="ml-2" />
        </button>
      </div>
    </nav>
  );
}

export default Hero;
