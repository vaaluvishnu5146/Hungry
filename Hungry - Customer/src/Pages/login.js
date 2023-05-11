import { Box, Typography } from "@mui/material";
import React from "react";
import { AppImages } from "../Configs/Images";
import BasicCta from "../Elements/Cta/BasicCta";
import { AppColors } from "../Configs/Colors";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveLoggedInUser } from "../Redux/Reducers/Authentication.reducer";

export default function Login() {
  const navigator = useNavigate();
  const dispatcher = useDispatch();
  const state = useSelector((state) => state.authentication);

  const handleAuthentication = (type = "") => {
    if (type === "signin") {
      dispatcher(
        saveLoggedInUser({
          userName: "Vishnu",
          role: ["customer"],
        })
      );
      navigator("/");
    }
  };

  return (
    <Box className="login-page App-container">
      <Box
        className="login-header"
        sx={{
          backgroundImage: `url(${AppImages.deliveryBoy})`,
        }}
      ></Box>
      <Box className="login-body">
        <Typography
          variant="h4"
          color={"white"}
          sx={{
            lineHeight: "3.5rem",
          }}
        >
          The experience of delivering food quickly
        </Typography>
        <Typography
          variant="subtitle1"
          color={"white"}
          sx={{
            marginBottom: "50px",
          }}
        >
          For the all time hungry person
        </Typography>
        <BasicCta
          label="Signup"
          id="signup"
          fullWidth
          overrides={{
            height: "50px",
            marginBottom: "20px",
            background: AppColors.secondary,
          }}
          handleClick={() => handleAuthentication("signup")}
        />
        <BasicCta
          label="Signin"
          id="signin"
          fullWidth
          overrides={{
            height: "50px",
            background: AppColors.light,
            color: AppColors.dark,
          }}
          handleClick={() => handleAuthentication("signin")}
        />
      </Box>
    </Box>
  );
}
