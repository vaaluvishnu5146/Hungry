import { Box } from "@mui/material";
import React from "react";
import IconCta from "../../Elements/Cta/IconButton";

export default function Appbar({
  prefix = null,
  content = null,
  suffix = null,
}) {
  return (
    <Box className="app-header">
      <Box className="prefix">{prefix}</Box>
      <Box className="content">{content}</Box>
      <Box className="suffix">{suffix}</Box>
    </Box>
  );
}
