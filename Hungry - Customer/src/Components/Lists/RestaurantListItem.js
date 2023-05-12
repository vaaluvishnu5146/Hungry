import React from "react";
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import AppIcons from "../../Configs/Icons";
import { AppImages } from "../../Configs/Images";
import RatingC from "../../Elements/Rating/RatingC";
import { useNavigate } from "react-router-dom";

export default function RestaurantListItem({ data = {} }) {
  const navigator = useNavigate();

  return (
    <ListItem
      disablePadding
      className="list-item"
      onClick={() => navigator(`/restaurant/${data._id}`)}
    >
      <ListItemButton className="list-item-button">
        <Box
          className="list-body"
          sx={{
            display: "flex",
            height: "100px",
            alignItems: "center",
          }}
        >
          <img src={AppImages.mockRestaurant} alt="restaurant" />
          <Box className="list-body-content">
            <Typography variant="body" fontWeight={600}>
              {data.restaurantName}
            </Typography>
            <Typography variant="subtitle2">
              {data.addressDetails.city}
            </Typography>
            <RatingC readOnly value={data.generalDetails.averageRating} />
          </Box>
          <ListItemIcon>
            <AppIcons.RightArrow fontSize="large" />
          </ListItemIcon>
        </Box>
      </ListItemButton>
    </ListItem>
  );
}
