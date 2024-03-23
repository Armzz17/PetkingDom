import React from "react";

const FooterItem = ({ links, title, icon }) => {
  return (
    <div>
      <ul>
        <h1 className="mb-1 font-semibold text-2xl ">{title} </h1>
        {links.map((links) => (
          <li key={links.name}>
            
            <a
              className="flex flex-1  items-center text-gray-400 hover:text-slate-800 duration-300 text-lg
              cursor-pointer leading-9  " href={links.link} ><img className="h-6 mr-2" src={links.icon} alt="" /> {links.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterItem;
