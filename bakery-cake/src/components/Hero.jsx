import bg from "../assets/bg.png";

function Hero() {
  return (
    <nav
      className="bg-cover bg-center bg-no-repeat w-full h-screen text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div>
        <h1>bakery</h1>
      </div>
    </nav>
  );
}

export default Hero;
