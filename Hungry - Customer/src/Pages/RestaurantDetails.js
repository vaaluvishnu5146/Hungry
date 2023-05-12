import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Appbar from "../Components/AppBar/Appbar";
import IconCta from "../Elements/Cta/IconButton";
import AppIcons from "../Configs/Icons";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppImages } from "../Configs/Images";
import BasicList from "../Components/Lists/List";
import FoodListItem from "../Components/Lists/FoodListItem";

export default function RestaurantDetails() {
  const navigator = useNavigate();
  const params = useParams();
  const [food, setFood] = useState();
  const { isAdmin } = useSelector((state) => state.authentication);
  console.log(params);
  useEffect(() => {
    // GETTING RESTAURANT ID FROM URL PARAMS
    if (params["id"]) {
      fetch(`http://localhost:5000/api/food/getAllFood/${params["id"]}`)
        .then((response) => response.json())
        .then((data) => {
          const { success, result, message } = data;
          if (success && result.count > 0) {
            setFood(result.data);
          }
        })
        .catch((error) => console.log(error));
    } else {
      alert("Restaurant id missing");
    }
  }, []);
  return (
    <Box className="restaurant-page App-container">
      <Appbar
        prefix={<IconCta onClick={() => navigator(-1)} Icon={AppIcons.back} />}
        content={
          <Typography variant="h6" fontWeight={"700"}>
            Restaurant
          </Typography>
        }
        suffix={isAdmin && <IconCta onClick={() => {}} Icon={AppIcons.edit} />}
      />
      <Box className="restaurant-body">
        <img
          class="restaurant-images"
          src={AppImages.mockRestaurant}
          alt="restaurant"
        />
        <Box>
          <BasicList data={food} ListItem={FoodListItem} />
        </Box>
      </Box>
    </Box>
  );
}
