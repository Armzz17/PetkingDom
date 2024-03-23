"use client";

import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { words } from "../Data/searchdata.js";

const Searchbar = () => {
  const [activeSearch, setActiveSearch] = useState([]);

  const handleSearch = (e) => {
    if (e.target.value == "") {
      setActiveSearch([]);
      return false;
    }
    setActiveSearch(
      words.filter((w) => w.includes(e.target.value)).slice(0, 8)
    );
  };

  return (
    <form className="w-[500px] relative z-20">
      <div className="relative text-[#4F200D]">
        <input
          type="search"
          placeholder="Find your pet here...  "
          className="w-full p-4 rounded-full bg-[#F6F1E9] focus:outline-none placeholder-[#FF8400]"
          onChange={(e) => handleSearch(e)}
        />
        <button className="absolute right-1 top-1 -translate-y p-4 bg-[#FF8400] rounded-full text-[#4F200D] hover:scale-105">
          <BiSearchAlt />
        </button>
      </div>
      {activeSearch.length > 0 && (
        <div className="absolute top-16 left-1/2 p-4 bg-[#F6F1E9] rounded-md w-full -translate-x-1/2 flex flex-col gap-2 outline-none ">
          {activeSearch.map((s) => (
            <span className="text-[#4F200D]">{s}</span>
          ))}
        </div>
      )}
    </form>
  );
};

export default Searchbar;
