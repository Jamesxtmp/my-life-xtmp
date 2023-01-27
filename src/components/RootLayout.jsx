import { Outlet } from "react-router-dom"
import { useRef, useEffect } from "react"

import UpperVisualizer from "./UpperVisualizer"
import CenterInformation from "./CenterInformation"
import useZustand from "../storage/zustandStorage"

function RootLayout() {
    const prominentLayout = useZustand((state) => state.prominentLayout)

    const outletRef = useRef(null)
    useEffect(() => {
        outletRef.current.style.overflow = "hidden";
        setTimeout(() => {
            outletRef.current.style.overflow = "auto";
        }, 0);
    }, []);
    return (
        <div style={{ height: `${window.innerHeight}px` }}
            className="root-layout">
            <div className={`layout-upper-${prominentLayout ? 'max' : 'min'}`}>
                <UpperVisualizer state={'default'} />
            </div>
            <div className="layout-center">
                <CenterInformation />
            </div>
            <div ref={outletRef}
                className={`layout-outlet-${prominentLayout ? 'min' : 'max'}`}
            >
                <Outlet />
            </div>
        </div>
    );
}

export default RootLayout;