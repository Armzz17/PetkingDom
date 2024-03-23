import React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import Logo from "../assets/Logo/LOGO.png";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FbIcon from "../assets/Icon/fbIcon.png";
import AppleIcon from "../assets/Icon/appleIcon.png";
import GmailIcon from "../assets/Icon/gmailIcon.png";
import { GrClose } from "react-icons/gr";

const ModalLogin = ({ isOpenLogin, onCloseLogin }) => {
  if (!isOpenLogin) return null;

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

  return (
    <div className="">
      <Dialog
        open={isOpenLogin}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <div className=" flex justify-end bg-[#F6F1E9] p-2 ">
          <GrClose onClick={onCloseLogin} className="text-[20px]" />
        </div>
        <div className="bg-[#F6F1E9]  items-center p-10 ">
          <div className="flex justify-center">
            <img className="w-96" src={Logo} alt="" />
          </div>
          <div className="grid grid-rows-1 justify-center items-center  mt-10 p-3  text-[#4F200D] ">
            <input
              className="rounded-full p-3 w-[340px] "
              type="text"
              placeholder="Email"
            />
            <input
              className="mt-4 rounded-full p-3  text-[#4F200D]"
              type="text"
              placeholder="Password"
            />
            <div className=" p-2 ">
              <FormGroup>
                {" "}
                <div className="text-right relative mt-2 items-center text-[15px] ">
                  <a href="">Forgot password?</a>
                </div>
                <FormControlLabel
                  className="absolute"
                  control={<Checkbox />}
                  label="Remember me"
                />
              </FormGroup>
            </div>

            <div className="flex flex-col items-center justify-center p-2">
              <Stack spacing={1} direction="row">
                  <Button className="w-40" variant="contained">
                    LOGIN
                  </Button>
              </Stack>
            </div>
            <div className="flex justify-center items-center">
            <Stack spacing={1} direction="row">
                <Button className="w-40" variant="contained">
                  Signup
                </Button>
            </Stack>
            </div>
           
            <div className="flex flex-1 items-center p-2 mt-5 space-x-2">
              <h1>Or Login with: </h1>

              <a href="https://gmail.com">
                <img className="h-9" src={GmailIcon} alt="" />{" "}
              </a>
              <a href="https://facebook.com">
                <img className="h-8" src={FbIcon} alt="" />
              </a>
              <a href="https://appleid.apple.com/">
                <img className="h-7" src={AppleIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ModalLogin;
