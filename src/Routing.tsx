import * as React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useRoutes,
} from "react-router-dom"; import "./App.css";
import Booking from "./pages/Booking";
import Home from "./pages/Home";

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="booking" element={<Booking />} />
        </Routes>
    );
}

export default Routing;