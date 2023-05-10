import { Box, Typography } from "@mui/material";
import React from "react";
import CardSlider from "../Components/CardSlider/CardSlider";
import Appbar from "../Components/AppBar/Appbar";
import IconButton from "../Elements/Cta/IconButton";
import { CardTravel } from "@mui/icons-material";
import IconCta from "../Elements/Cta/IconButton";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Menu } from "@mui/icons-material";

export default function Home() {
  const navigator = useNavigate();

  return (
    <Box className="home-page">
      <Appbar
        prefix={<IconCta onClick={() => {}} Icon={Menu} />}
        content={<Typography variant="h6">Home Page</Typography>}
        suffix={
          <IconCta
            onClick={() => navigator("/cart/8382463g")}
            Icon={ShoppingCart}
          />
        }
      />
      <Box className="home-page-content">
        <CardSlider data={[{}, {}, {}, {}]} />
      </Box>
    </Box>
  );
}
