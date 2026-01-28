import { welcomeApi } from "../context/imagesApi";

function Welcome() {
  return (
    <section className="my-10 mx-10 lg:mx-25">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-20 ">
        <h2 className="font-bold w-5/5 text-[40px] ">
          Welcoming You At Our bakery
        </h2>
        <p className="text-[18px] text-justify">
          Indulge your senses as you explore our delectable selection of cakes,
          pastries, bread, and more. Whether you're craving a sweet delight to
          brighten your day or planning a special celebration, we're here to
          make every moment sweeter.Join us on a journey of taste and tradition,
          where every bite is a moment to savor.
        </p>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-15">
        {welcomeApi.map((i) => (
          <div key={i.id}>
            <img
              src={i.image}
              alt="welcome img"
              className="rounded mt-5 lg:mt-0"
            />
            <p className="pt-7 text-[#5B5856]">{i.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Welcome;
