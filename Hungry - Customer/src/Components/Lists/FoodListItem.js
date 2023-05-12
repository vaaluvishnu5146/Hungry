import React from "react";
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import AppIcons from "../../Configs/Icons";
import RatingC from "../../Elements/Rating/RatingC";

export default function FoodListItem({ data = {} }) {
  return (
    <ListItem disablePadding className="list-item" onClick={() => {}}>
      <ListItemButton className="list-item-button">
        <Box
          className="list-body"
          sx={{
            display: "flex",
            height: "auto",
            alignItems: "center",
          }}
        >
          <img src={data.picture[0]} alt="food" />
          <Box className="list-body-content">
            <Typography variant="body" fontWeight={600}>
              {data.name}
            </Typography>
            <Typography variant="subtitle2">{data.description}</Typography>
            <RatingC readOnly value={data.generalDetails.averageRating} />
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight={600}
                sx={{
                  textDecoration: "line-through",
                }}
              >
                {data.pricingDetails.actualPrice}
              </Typography>
              <Typography variant="h5" fontWeight={600}>
                {data.pricingDetails.actualOfferPrice}
              </Typography>
            </Box>
          </Box>
          <ListItemIcon>
            <AppIcons.RightArrow fontSize="large" />
          </ListItemIcon>
        </Box>
      </ListItemButton>
    </ListItem>
  );
}
