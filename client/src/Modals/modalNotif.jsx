import React from "react";
import {BsThreeDots} from "react-icons/bs"

const modalNotif = ({ isNotifOpen, closeNotif }) => {
  return isNotifOpen ? (
    <div className="w-max h-[400px] fixed transform -translate-x-[250px] my-0 bg-[#FF8400] p-1  shadow-lg overflow-y-auto rounded-lg your-container-class bg-opacity-70">
      <div className="flex flex-1 bg-[#F6F1E9] p-4 rounded-lg bg-opacity-80">
        <div className="grid grid-cols-1 text-[#4F200D] text-[12px] space-y-2 rounded-lg w-[250px] bg-opacity-90 ">
          <h3 className=" text-[18px] flex flex-1 items-center justify-between font-bold">Notification <BsThreeDots/></h3>
          <div className="p-2 bg-[#F6F1E9] rounded-lg  ">
          <h3  className="">
            There are no notifications at the moment. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia! Reiciendis accusamus quod odit error quas cumque, dolorem tempora, velit repellendus ut numquam consequatur? Et officia nostrum molestias exercitationem quos.
            
          </h3>
          </div>
          <div className="p-2 bg-[#F6F1E9] rounded-lg">
          <h3 >
            There are no notifications at the moment. 
            
          </h3>
          </div>
        
          <div className="p-2 bg-[#F6F1E9] rounded-lg">
          <h3 >
            There are no notifications at the moment. 
            
          </h3>
          </div>
        
          <div className="p-2 bg-[#F6F1E9] rounded-lg">
          <h3 >
            There are no notifications at the moment. 
            
          </h3>
          </div>
          <div className="p-2 bg-[#F6F1E9] rounded-lg">
          <h3 >
            There are no notifications at the moment. 
            
          </h3>
          </div>
          <div className="p-2 bg-[#F6F1E9] rounded-lg">
          <h3 >
            There are no notifications at the moment. 
            
          </h3>
          </div>
          <div className="p-2 bg-[#F6F1E9] rounded-lg">
          <h3 >
            There are no notifications at the moment. 
            
          </h3>
          </div>
          <div className="p-2 bg-[#F6F1E9] rounded-lg">
          <h3 >
            There are no notifications at the moment. 
            
          </h3>
          </div>
          <div className="p-2 bg-[#F6F1E9] rounded-lg">
          <h3 >
            There are no notifications at the moment. 
            
          </h3>
          </div>
          <div className="p-2 bg-[#F6F1E9] rounded-lg">
          <h3 >
            There are no notifications at the moment. 
            
          </h3>
          </div>
          <div className="p-2 bg-[#F6F1E9] rounded-lg">
          <h3 >
            There are no notifications at the moment. 
            
          </h3>
          </div>

          <div className="p-2 bg-[#F6F1E9] rounded-lg">
          <h3 >
            There are no notifications at the moment. 
            
          </h3>
          </div>
        
        
        </div>
      </div>
    </div>
  ) : null;
};

export default modalNotif;
