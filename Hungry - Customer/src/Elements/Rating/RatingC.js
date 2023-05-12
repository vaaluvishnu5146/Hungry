import { Rating } from "@mui/material";
import React from "react";

export default function RatingC({
  value = 1,
  onChange = (e) => {},
  readOnly = false,
  disabled = false,
  id = "",
  name = "",
  size = "small", // small, medium, large
}) {
  return (
    <Rating
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      disabled={disabled}
      size={size}
    />
  );
}
