import React from "react";
import FooterItem from "./FooterItem.jsx";
import { PRODUCTS,GETHELP,COMPANY, SOCIAL } from "./FooterMenu.js";
import Logo from "../assets/Logo/LOGO.png"


const Footer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">{/* Your page content goes here */}</main>
      <div>
      <div  className="flex flex-col sm:flex-row justify-between py-5 px-4 sm:px-28 bg-[#F6F1E9] h-max mb-3">
        
      <FooterItem  links= {PRODUCTS} title= "PRODUCTS"  />
      <FooterItem links= {GETHELP} title= "GET HELP"/>
      <FooterItem links= {COMPANY} title= "COMPANY"/>
      <FooterItem links= {SOCIAL} title= "SOCIAL"/>
      
      </div>
      <div className="flex flex-col sm:flex-row justify-between py-7 px-4 sm:px-28 bg-[#F6F1E9] ">
      <img src={Logo} alt="Pet Kingdom" className="h-11" />
      <div className="space-x-4 cursor-pointer pt-3  ">
     
      </div>
      <div className="pt-3"> @ 2023 Pet Kingdom, inc </div>
     
     </div>
    </div>
    </div>
  );
};

export default Footer;
