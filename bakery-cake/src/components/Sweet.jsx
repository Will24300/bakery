import { useState } from "react";
import { bakeryCategories } from "../context/imagesApi";
import { Info } from "lucide-react";

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

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  // Function to get products based on selected category
  const getDisplayedProducts = () => {
    return bakeryCategories[selectedCategoryIndex]?.products || [];
  };

  const displayedProducts = getDisplayedProducts();

  return (
    <section className="bg-[#814A22] h-auto my-20 pb-20 text-white">
      <div className="flex flex-col lg:flex-row md:flex-col justify-between items-start md:items-center p-4 md:p-5 gap-4 max-w-full overflow-hidden">
        <div className="lg:w-1/3 md:mb-10 pt-10">
          <h2 className="font-playfair font-bold text-3xl md:text-5xl text-start md:text-center">
            The Sweet We Make
          </h2>
          <p className="text-sm md:text-md mt-3 font-thin ml-2">
            Experience the artistry of our chef's hands, crafting divine sweet
            cakes from simple ingredients.
          </p>
        </div>

        {/* Scrollable tabs with click handlers */}
        <div
          className="w-full md:w-auto flex gap-3 bg-white text-black rounded-2xl px-2 py-2
               overflow-x-auto overflow-y-hidden whitespace-nowrap
               md:overflow-visible md:whitespace-normal"
        >
          {types.map((t, i) => (
            <p
              key={i}
              onClick={() => setSelectedCategoryIndex(i)}
              className={`py-1.5 px-4 rounded-2xl cursor-pointer shrink-0 transition-colors duration-300
                ${
                  selectedCategoryIndex === i
                    ? "bg-[#F3A446] text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
            >
              {t}
            </p>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-10 px-10 py-10">
        {displayedProducts.map((item, index) => (
          <div
            key={item.id}
            className={`bg-[#FFE1BC] text-black rounded cursor-pointer 
              overflow-hidden
              hover:scale-105 transition-transform duration-500 ease-in-out
              ${index % 2 !== 0 ? "lg:translate-y-10" : ""}`}
          >
            {/* Image container */}
            <div className="relative flex justify-center items-center h-48 overflow-hidden my-4">
              <div className="bg-[#E3B071] rounded-full h-4/5 w-4/5 absolute opacity-10 z-0"></div>

              <img
                src={item.img}
                alt={item.name}
                className="w-3/4 max-h-full object-contain z-10"
              />
            </div>

            <div className="flex justify-between items-center px-5 py-2">
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

      {/* Optional: Show message if no products */}
      {displayedProducts.length === 0 && (
        <div className="text-center text-white py-10">
          No products found in this category.
        </div>
      )}
    </section>
  );
}

export default Sweet;
