import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import CardSlider from "../Components/CardSlider/CardSlider";
import Appbar from "../Components/AppBar/Appbar";
import IconButton from "../Elements/Cta/IconButton";
import { CardTravel } from "@mui/icons-material";
import IconCta from "../Elements/Cta/IconButton";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Menu } from "@mui/icons-material";

export default function Home() {
  const navigator = useNavigate();
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/restaurants/getAllRestaurants")
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          setRestaurants(response.result.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

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
        <CardSlider data={restaurants} />
      </Box>
    </Box>
  );
}
