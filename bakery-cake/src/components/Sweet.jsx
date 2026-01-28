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
    </section>
  );
}

export default Sweet;
