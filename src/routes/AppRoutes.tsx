import React from "react";
import Main from "../pages/Main.tsx";
import {Route, Routes} from "react-router-dom";
import Directions from "../pages/Directions.tsx";
import Services from "../pages/Services.tsx";
import Reservation from "../pages/Reservation.tsx";
import RoomInfo from "../pages/RoomInfo.tsx";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/directions" element={<Directions />}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/reservation" element={<Reservation/>}/>
            <Route path="/rooms" element={<RoomInfo/>}/>
        </Routes>
    );
}

export default AppRoutes;