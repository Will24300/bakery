import bg from "../assets/bg.png";

function Hero() {
  return (
    <nav
      className="relative w-full h-screen text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(273deg,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0.65)_100%)] bg-blend-multiply pointer-events-none" />
      <div className="relative z-10 flex justify-center items-center">
        <h1 className="font-paytone text-4xl font-500 mt-5">bakery</h1>
      </div>
      <div className="relative z-10 w-[38.12%] h-[49.71%] ml-[8.40%] mt-[8.79%]">
        <h1 className="font-playfair font-bold text-[64px] leading-tight">
          HANDMADE BAKED GOODS AND COOKIES
        </h1>
        <button className="bg-[#F3A446] py-2 px-6 rounded mt-5 font-bold cursor-pointer">
          See more
        </button>
      </div>
    </nav>
  );
}

export default Hero;
