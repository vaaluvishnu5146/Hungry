import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { openRoutes, closedRoutes } from "./Configs/Routes";
import { useSelector } from "react-redux";

function App() {
  const { isLoggedIn } = useSelector((state) => state.authentication);
  return (
    <div className="App">
      <Routes>
        {isLoggedIn
          ? closedRoutes.map((route) => (
              <Route path={route.path} element={route.Component} />
            ))
          : openRoutes.map((route) => (
              <Route path={route.path} element={route.Component} />
            ))}
      </Routes>
    </div>
  );
}

export default App;
