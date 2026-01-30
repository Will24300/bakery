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
    <section className="bg-[#9e7151] h-screen my-20 text-white">
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
      <div className="grid grid-cols-5 gap-5 px-5 mt-10">
        {bakeryCategories[0].products.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt={item.name} />
            <div>
              <p>${item.price}</p>
              <h2>{item.name}</h2>
            </div>
            <div>
              <Info size={12} />
              <button>Add</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sweet;
