import { bakeryCategories } from "../context/imagesApi";
import { Info, Pointer } from "lucide-react";
function Sweet() {
  const types = [
    "All",
    "Cakes",
    "Cookies",
    "Bread",
    "Doughnuts",
    "Croissants",
    "Muffins",
    "Cupcakes",
  ];

  return (
    <section className="bg-[#814A22] h-screen my-20 text-white">
      <div className="flex justify-between items-center p-15">
        <div className="w-1/3">
          <h2 className="font-playfair font-bold text-4xl">
            The Sweet We Make
          </h2>
          <p className="text-md mt-3 font-thin">
            Experience the artistry of our chef's hands, crafting divine sweet
            cakes from simple ingredients.
          </p>
        </div>
        <div className="flex justify-center items-center gap-3 bg-white text-black rounded-2xl ">
          {types.map((t, i) => (
            <p
              key={i}
              className={`py-1.5 px-4 rounded-2xl cursor-pointer ${i === 0 ? "bg-[#F3A446] text-white" : "bg-white"}`}
            >
              {t}
            </p>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-5 gap-5 px-10 ">
        {bakeryCategories[0].products.map((item) => (
          <div key={item.id} className="bg-[#FFE1BC] text-black rounded">
            <div className="relative flex justify-center items-center h-48">
              <div className="bg-[#E3B071] rounded-full h-4/5 w-4/5 absolute opacity-10 z-0"></div>
              <img src={item.img} alt={item.name} className="w-3/4 z-10" />
            </div>
            <div className="flex justify-between items-center px-5 py-3">
              <div className="w-3/4">
                <p className="text-[#5B5856]">${item.price}.00</p>
                <h2 className="font-playfair text-[20px] font-semibold leading-7 mt-3">
                  {item.name}
                </h2>
              </div>
              <div className="flex flex-col gap-3 justify-center items-center">
                <Info size={14} className="cursor-pointer" />
                <button className="text-white bg-[#F3A446] text-[14px] px-3 cursor-pointer rounded">
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sweet;
