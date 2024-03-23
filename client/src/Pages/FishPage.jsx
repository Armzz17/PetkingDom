import React from "react";
import New from "../assets/Logo/new.png";
import { petFish } from "../Data/petFish.js";

const FishPage = () => {
  const filteredObject = petFish.filter((p) => p.filter === "Fish");
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 px-6 sm:px-12 md:px-20 lg:px-28">
        {filteredObject.map((obj, i) => {
          return (
            <div key={i} className="relative">
              <div className="mb-2 relative">
                <img
                  src={obj.img}
                  className="rounded-3xl w-full h-64 object-cover hover:scale-105"
                  style={{ maxWidth: "100%" }}
                />

                {i < 1 && (
                  <img
                    src={New}
                    alt="New"
                    className="absolute top-2 right-2 w-12 hover:animate-ping"
                  />
                )}

                <button className="absolute bottom-2 right-2 bg-[#F6F1E9] text-[#4F200D] rounded-2xl p-2 font-black text-sm font-barlow hover:scale-105">
                  Pet to Cart
                </button>
              </div>

              <div className="text-[#4F200D]">
                <h1 className="text-xl font-bold">{obj.name}</h1>
                <div className="mt-4">
                  {obj.details.map((detail, index) => (
                    <h5 key={index}>{detail}</h5>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FishPage;
