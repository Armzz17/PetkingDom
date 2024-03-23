import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";


const PageScroll = () => {
  return (
    <div
      className=" flex flex-1 justify-center items-center p-2 mt-7"
    >
      <Stack spacing={2}>
        <Pagination count={10} />
      </Stack>
    </div>
  );
};

export default PageScroll;
