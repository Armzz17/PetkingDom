import React, { useState } from "react";
import Logo from "../assets/Logo/LOGO.png";
import Notif from "../assets/Logo/notifLogo.png";
import Cart from "../assets/Logo/addtocartLogo.png";
import DogUser from "../assets/UserIcon/dogUser.png";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import NotifModal from "../Modals/modalNotif.jsx";
import AddToCartModal from "../Modals/modalCart.jsx";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import ModalLogin from "../Modals/modalLogin.jsx";

const Nav = () => {
  const [isNotifOpen, setNotifOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOpenLogin, setOpenLogin] = React.useState(false);

  // Notification Modal
  const openNotif = () => {
    setNotifOpen(true);
  };

  const closeNotif = () => {
    setNotifOpen(false);
  };

  // Add to Cart Modal
  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  // Login Modal

  const handleClickOpenLogin = () => {
    setOpenLogin(true);
  };

  const handleCloseLogin = () => {
    console.log("Closing modal");
    setOpenLogin(false);
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="flex flex-col sm:flex-row justify-between py-5 px-4 sm:px-28 bg-[#F6F1E9]">
        <div className="w-full sm:w-[300px]">
          <Link to="/">
            <img src={Logo} alt="Pet Kingdom" className="max-w-full h-auto" />
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-12 sm:w-11 hover:scale-105">
            <div
              className="w-11 sm:w-11 hover:scale-105 cursor-pointer"
              onMouseEnter={openNotif}
              onMouseLeave={closeNotif}
            >
              <Badge badgeContent={4} color="primary">
                <img
                  src={Notif}
                  alt="Notification"
                  className="max-w-full h-auto "
                />
              </Badge>
              <NotifModal isNotifOpen={isNotifOpen} closeNotif={closeNotif} />
            </div>
          </div>

          {/* Add to Cart */}

          <div className="w-10 cursor-pointer ">
            <div onClick={openCart}>
              <img
                src={Cart}
                alt="Pet to Cart"
                className="max-w-full h-auto hover:scale-105"
              />
            </div>
            <AddToCartModal isOpen={isCartOpen} onClose={closeCart} />
          </div>

          {/* Login */}

          <div
            variant="outlined"
            onClick={handleClickOpenLogin}
            className="h-11 clickable-dropdown flex items-center p-1  bg-[#FF8400] rounded-full hover:scale-105 cursor-pointer"
          >
            <div className="mr-2 pl-1 text-[#F6F1E9]">
              <AiOutlineMenu size={20} />
            </div>
            <div className>
              <div className="bg-[#F6F1E9] rounded-full ">
                <Stack direction="row" spacing={2}>
                  <Avatar
                    className="max-w-full h-auto rounded-full p-2"
                    alt="User"
                    src={DogUser}
                  />
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalLogin isOpenLogin={isOpenLogin} onCloseLogin={handleCloseLogin} />
    </div>
  );
};

export default Nav;
