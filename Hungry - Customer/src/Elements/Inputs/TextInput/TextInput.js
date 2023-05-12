import { TextField } from "@mui/material";
import React from "react";

export default function TextInput({
  type = "text",
  placeholder = "",
  value = "",
  onChange = (e) => {},
  id = "",
  name = "",
  label = "",
  variant = "outlined",
  overrides = {},
}) {
  return (
    <TextField
      type={type}
      placeholder={placeholder}
      label={label}
      variant={variant}
      value={value}
      onChange={onChange}
      id={id}
      name={name}
      sx={overrides}
    />
  );
}
