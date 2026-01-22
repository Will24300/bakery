import bg from "../assets/bg.png";

function Hero() {
  return (
    <nav
      className="bg-cover bg-center bg-no-repeat w-full h-screen text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex justify-center items-center">
        <h1 className="font-paytone text-4xl font-500 mt-5">bakery</h1>
      </div>
      <div className="w-[38.12%] h-[49.71%] ml-[8.40%] mt-[8.79%]">
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
