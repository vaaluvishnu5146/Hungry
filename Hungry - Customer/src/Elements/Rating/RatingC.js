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
      onChange={(e) => {
        e.target.id = id;
        e.target.name = name;
        onChange(e);
      }}
      readOnly={readOnly}
      disabled={disabled}
      size={size}
    />
  );
}
