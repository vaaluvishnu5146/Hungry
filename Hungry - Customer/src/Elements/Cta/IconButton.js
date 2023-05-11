import { IconButton } from "@mui/material";
import React from "react";

export default function IconCta({
  color = "",
  label = "",
  onClick = () => {},
  Icon = null,
}) {
  return (
    <IconButton color={color} aria-label={label} onClick={onClick}>
      <Icon />
    </IconButton>
  );
}
