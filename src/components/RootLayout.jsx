import { Outlet } from "react-router-dom";

import UpperVisualizer from "./UpperVisualizer";
import NavState from "./NavState";

function RootLayout() {
    return (
        <>
            <UpperVisualizer/>
            <NavState/>
            <Outlet/>
        </>
    );
}

export default RootLayout;