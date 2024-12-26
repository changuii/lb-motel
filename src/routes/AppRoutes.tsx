import React from "react";
import Main from "../pages/Main.tsx";
import {Route, Routes} from "react-router-dom";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
        </Routes>
    );
}

export default AppRoutes;