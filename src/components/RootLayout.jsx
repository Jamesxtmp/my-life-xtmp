import { Outlet } from "react-router-dom";

import UpperVisualizer from "./UpperVisualizer";
import CenterInformation from "./CenterInformation"
import Footer from "./Footer";

function RootLayout() {
    return (
        <div className="root-layout">
            <div className="layout-upper">
                <UpperVisualizer state={'default'}/>
            </div>
            <div className="layout-center">
                <CenterInformation />
            </div>
            <div className="layout-outlet">
                <Outlet />
            </div>
            <div className="layout-footer">
                <Footer />
            </div>
        </div>
    );
}

export default RootLayout;