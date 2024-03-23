import React from "react";
import {GrClose} from "react-icons/gr"
import BagToCart from "../assets/Logo/BagToCart.png"

const modalCart = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 h-full w-[400px] bg-[#FF8400] shadow-md p-2 opacity-95  text-[#4F200D] z-20">
      <div className="bg-[#F6F1E9]  h-full opacity-80 rounded-lg p-2 ">
        <div className="flex flex-1 items-center justify-between rounded-lg p-4 bg-slate-200  ">
        <img src={BagToCart} alt="" className="h-8 mr-3 " />
        <h1 className=" text-[28px] mr-24">Shopping Cart</h1> 
        <GrClose className="" onClick={onClose}/>
        </div>
        
      </div>
    </div>
  );
};

export default modalCart;
