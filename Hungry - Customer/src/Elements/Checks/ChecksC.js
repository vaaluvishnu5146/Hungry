import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";

export default function CheckC({
  label = "",
  checked = false,
  id = "",
  name = "",
  onChange = (e) => {},
}) {
  return (
    <FormGroup id={id}>
      <FormControlLabel
        control={<Checkbox checked={checked} />}
        label={label}
        onChange={(e) =>
          onChange({
            ...e,
            target: {
              ...e.target,
              id: id,
              name: name,
              type: "checkbox",
            },
          })
        }
      />
    </FormGroup>
  );
}
