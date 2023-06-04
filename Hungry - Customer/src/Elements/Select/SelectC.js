import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export default function SelectC({
  handleChange = (e) => {},
  label = "",
  id = "",
  options = [],
  overrides = {},
  value = "",
  name = "",
}) {
  return (
    <FormControl fullWidth sx={overrides}>
      <InputLabel id={label}>{label}</InputLabel>
      <Select
        labelId={label}
        id={id}
        name={name}
        value={value}
        label={label}
        onChange={(e) =>
          handleChange({
            ...e,
            target: {
              ...e.target,
              id: id,
            },
          })
        }
      >
        {options.length > 0 &&
          options.map((o, i) => (
            <MenuItem key={`${label}-option-${i}`} value={o.value}>
              {o.label}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}
