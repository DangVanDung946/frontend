import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";

const Main = () => (
    <main>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/login" element={<Login/>} /> */}
        </Routes>
    </main>
);
export default Main;
