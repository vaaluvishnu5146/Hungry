import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import CardSlider from "../Components/CardSlider/CardSlider";
import Appbar from "../Components/AppBar/Appbar";
import IconCta from "../Elements/Cta/IconButton";
import { useNavigate } from "react-router-dom";
import BasicList from "../Components/Lists/List";
import { saveRestaurants } from "../Redux/Reducers/Restaurant.reducer";
import { useSelector, useDispatch } from "react-redux";
import AppIcons from "../Configs/Icons";
import RestaurantListItem from "../Components/Lists/RestaurantListItem";

export default function Home() {
  const navigator = useNavigate();
  const dispatcher = useDispatch();
  const { trendingRestaurants, servingToday } = useSelector(
    (state) => state.restaurant
  );

  useEffect(() => {
    fetch("http://localhost:5000/api/restaurants/getAllRestaurants")
      .then((response) => response.json())
      .then((response) => {
        if (response && response.result && response.result.data.length > 0) {
          dispatcher(saveRestaurants(response.result.data));
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box className="home-page">
      <Appbar
        prefix={<IconCta onClick={() => {}} Icon={AppIcons.Menu} />}
        content={
          <Typography variant="h6" fontWeight={"700"}>
            Home Page
          </Typography>
        }
        suffix={
          <IconCta
            onClick={() => navigator("/cart/8382463g")}
            Icon={AppIcons.Cart}
          />
        }
      />
      <Box className="home-page-content">
        <Box marginBottom={5}>
          <CardSlider data={trendingRestaurants} />
        </Box>
        <Box className="listing-container">
          <Typography variant="h6" className="heading">
            Other Restaurants
          </Typography>
          <BasicList data={servingToday} ListItem={RestaurantListItem} />
        </Box>
      </Box>
    </Box>
  );
}
