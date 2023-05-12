import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { AppImages } from "../Configs/Images";
import BasicCta from "../Elements/Cta/BasicCta";
import { AppColors } from "../Configs/Colors";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveLoggedInUser } from "../Redux/Reducers/Authentication.reducer";
import BottomSheet from "../Components/BottomSheet/BottomSheet";
import TextInput from "../Elements/Inputs/TextInput/TextInput";

export default function Login() {
  const navigator = useNavigate();
  const dispatcher = useDispatch();
  const [loginFormData, setLoginFormData] = useState({});
  const [loginDrawer, setLoginDrawer] = useState(false);
  const [signupDrawer, setSignupDrawer] = useState(false);
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

  const handleDrawer = (type = "", state = false) => {
    if (state) {
      type === "login" ? setLoginDrawer(state) : setSignupDrawer(state);
    } else {
      type === "login" ? setLoginDrawer(state) : setSignupDrawer(state);
    }
  };

  const handleLoginForm = (e) => {
    if (e) {
      let loginFormCopy = {
        ...loginFormData,
        [e.target.id]: e.target.value,
      };
      setLoginFormData(loginFormCopy);
    }
  };

  const handleLogin = (e) => {
    if (e) {
      fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        body: JSON.stringify(loginFormData),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result.success) {
            dispatcher(saveLoggedInUser(result.data));
            handleDrawer("login", false);
          }
        })
        .catch((error) => console.log(error));
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
          handleClick={() => handleDrawer("login", true)}
        />
        <BottomSheet
          anchor="bottom"
          isOpen={loginDrawer}
          toggleDrawer={handleDrawer}
          id="login"
        >
          <Typography variant="h4" component="p">
            Login
          </Typography>
          <Typography
            variant="body"
            component="p"
            sx={{
              marginBottom: "20px",
            }}
          >
            And enjoy food from your favourite restaurant
          </Typography>
          <TextInput
            type="email"
            id={"email"}
            name={"email"}
            placeholder="Enter your email"
            label="Email"
            overrides={{
              marginBottom: "15px",
            }}
            value={loginFormData && loginFormData["email"]}
            onChange={handleLoginForm}
          />
          <TextInput
            type="password"
            id={"password"}
            name={"password"}
            placeholder="Enter your Password"
            label="Password"
            overrides={{
              marginBottom: "30px",
            }}
            value={loginFormData && loginFormData["password"]}
            onChange={handleLoginForm}
          />
          <BasicCta
            label="Signin"
            id=""
            overrides={{
              height: "50px",
            }}
            fullWidth
            handleClick={handleLogin}
          />
        </BottomSheet>
      </Box>
    </Box>
  );
}
