import React from "react";
import { CircularProgress } from "@mui/material";

function LoadingMask() {
  return (
    <>
      <CircularProgress />
      <div>Loading...</div>
    </>
  );
}

export default LoadingMask;
