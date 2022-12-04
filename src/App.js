import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/user-profile" element={<Profile></Profile>}></Route>
      </Routes>
    </>
  );
}

export default App;
