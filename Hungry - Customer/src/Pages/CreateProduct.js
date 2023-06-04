import { Box, Typography } from "@mui/material";
import React, { useReducer } from "react";
import Appbar from "../Components/AppBar/Appbar";
import IconCta from "../Elements/Cta/IconButton";
import AppIcons from "../Configs/Icons";
import { useNavigate, useParams } from "react-router-dom";
import TextInput from "../Elements/Inputs/TextInput/TextInput";
import SelectC from "../Elements/Select/SelectC";
import CheckC from "../Elements/Checks/ChecksC";
import RatingC from "../Elements/Rating/RatingC";
import BasicCta from "../Elements/Cta/BasicCta";
import axios from "axios";

// STEPS TO USEREDUCER
// 1. Create InitialState
// 2. Create Reducer
// 3. Create Instance of useReducer inside component
const initialState = {
  name: "",
  picture: [
    "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQPir0f1BHnKzF0oJ40_GjHM6Z0xD5ZfMcrB96lulVvf2dwYa8w3-Scmt3AZMVg5bXT",
  ],
  description: "",
  restaurantId: null,
  generalDetails: {
    cuisine: "",
    foodType: "",
    trending: false,
    averageRating: 0,
  },
  pricingDetails: {
    actualPrice: "",
    actualOfferPrice: "",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "generalDetails":
      return {
        ...state,
        generalDetails: {
          ...state.generalDetails,
          [action.id]: action.value,
        },
      };
    case "pricingDetails":
      return {
        ...state,
        pricingDetails: {
          ...state.pricingDetails,
          [action.id]: action.value,
        },
      };
    default:
      return {
        ...state,
        [action.id]: action.value,
      };
  }
};

export default function CreateProduct() {
  const [formState, dispatch] = useReducer(reducer, initialState);
  const params = useParams();
  const navigator = useNavigate();

  const handleInput = (e) => {
    if (e) {
      e.target.type && e.target.type === "checkbox"
        ? dispatch({
            type: e.target.name,
            id: e.target.id,
            value: !formState.generalDetails.trending,
          })
        : dispatch({
            type: e.target.name,
            id: e.target.id,
            value: e.target.value,
          });
    }
  };

  const handleSubmit = async (e) => {
    const response = await axios.post("http://localhost:5000/api/food/create", {
      ...formState,
      restaurantId: params["id"],
    });
    console.log(response);
  };

  return (
    <Box className="restaurant-page App-container">
      <Appbar
        prefix={<IconCta onClick={() => navigator(-1)} Icon={AppIcons.back} />}
        content={
          <Typography variant="h6" fontWeight={"700"}>
            Create Food
          </Typography>
        }
      />
      <Box
        className="create-product-form-container"
        sx={{
          padding: "2rem",
        }}
      >
        <TextInput
          type="text"
          id={"name"}
          name={"name"}
          placeholder="Enter food name"
          label="Food Name"
          overrides={{
            width: "100%",
            marginBottom: "15px",
          }}
          value={formState && formState["name"]}
          onChange={handleInput}
        />
        <TextInput
          type="text"
          id={"description"}
          name={"description"}
          placeholder="Enter food description"
          label="Food Description"
          overrides={{
            width: "100%",
            marginBottom: "15px",
          }}
          value={formState && formState["description"]}
          onChange={handleInput}
        />
        <Box
          sx={{
            textAlign: "start",
            marginBottom: 2,
          }}
        >
          <Typography variant="h5">General Details</Typography>
        </Box>
        <SelectC
          handleChange={handleInput}
          label="Cuisine"
          id="cuisine"
          name="generalDetails"
          options={[
            { label: "American", value: "american" },
            { label: "Mexican", value: "mexican" },
            { label: "Italian", value: "italian" },
            { label: "South Indian", value: "south indian" },
          ]}
          overrides={{
            marginBottom: 2,
          }}
          value={formState && formState["generalDetails"]["cuisine"]}
        />
        <SelectC
          handleChange={handleInput}
          label="Food Type"
          id="foodType"
          name="generalDetails"
          options={[
            { label: "Veg", value: "veg" },
            { label: "Non-Veg", value: "nonveg" },
          ]}
          overrides={{
            marginBottom: 2,
          }}
          value={formState && formState["generalDetails"]["foodType"]}
        />
        <SelectC
          handleChange={handleInput}
          label="Cooking Time"
          id="cookingTime"
          name="generalDetails"
          options={[
            { label: "5 Minutes", value: "5" },
            { label: "10 Minutes", value: "10" },
            { label: "15 Minutes", value: "15" },
            { label: "20 Minutes", value: "20" },
          ]}
          overrides={{
            marginBottom: 5,
          }}
          value={formState && formState["generalDetails"]["cookingTime"]}
        />
        <Box
          sx={{
            marginBottom: 1,
          }}
        >
          <Typography variant="h5" component={"p"} textAlign={"start"}>
            Trending Today?
          </Typography>
        </Box>
        <CheckC
          id="trending"
          name="generalDetails"
          checked={formState && formState["generalDetails"]["trending"]}
          label="Trending"
          onChange={handleInput}
        />
        <Box
          sx={{
            marginTop: 2,
            marginBottom: 1,
          }}
        >
          <Typography variant="h5" component={"p"} textAlign={"start"}>
            Restaurant Rating
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginBottom: 5,
          }}
        >
          <RatingC
            id="averageRating"
            name="generalDetails"
            size="large"
            value={formState && formState["generalDetails"]["averageRating"]}
            onChange={handleInput}
          />
        </Box>
        <Box
          sx={{
            textAlign: "start",
            marginBottom: 2,
          }}
        >
          <Typography variant="h5">Pricing Details</Typography>
        </Box>
        <TextInput
          type="number"
          id={"actualPrice"}
          name={"pricingDetails"}
          placeholder="Enter Actual Price"
          label="Actual Price"
          overrides={{
            width: "100%",
            marginBottom: "15px",
          }}
          value={formState && formState["pricingDetails"]["actualPrice"]}
          onChange={handleInput}
        />
        <TextInput
          type="number"
          id={"actualOfferPrice"}
          name={"pricingDetails"}
          placeholder="Enter Actual Offer Price"
          label="Actual Offer Price"
          overrides={{
            width: "100%",
            marginBottom: "15px",
          }}
          value={formState && formState["pricingDetails"]["actualOfferPrice"]}
          onChange={handleInput}
        />
        <BasicCta
          label="Create Product"
          fullWidth
          overrides={{
            height: "50px",
            background: "orange",
          }}
          handleClick={handleSubmit}
        />
      </Box>
    </Box>
  );
}
