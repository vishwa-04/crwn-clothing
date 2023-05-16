import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./routes/home/home-component";
import React from "react";
import Navigation from "./routes/navigation/navigation-component";
import SignIn from "./routes/Sign-in/sign-in.component";

function Shop(props) {
  return (
    <div>
      <h1>I am shop</h1>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
