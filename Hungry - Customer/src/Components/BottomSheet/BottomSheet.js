import { Box, Button, Drawer } from "@mui/material";
import React from "react";

export default function BottomSheet({
  children,
  anchor = "bottom",
  id = "",
  toggleDrawer = (type = "", state = false) => {},
  isOpen = false,
}) {
  return (
    <React.Fragment key={anchor}>
      <Drawer
        anchor={anchor}
        open={isOpen}
        onClose={() => toggleDrawer(id, false)}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "20px 15px",
          }}
        >
          {children}
        </Box>
      </Drawer>
    </React.Fragment>
  );
}
