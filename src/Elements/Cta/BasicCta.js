import { Button } from "@mui/material";
import React from "react";

export default function BasicCta({
  label = "",
  id = "",
  overrides = {},
  fullWidth = false,
  handleClick = () => {},
}) {
  return (
    <Button
      variant="contained"
      disableElevation
      sx={overrides}
      id={id}
      fullWidth={fullWidth}
      onClick={handleClick}
    >
      {label}
    </Button>
  );
}
