import { Outlet } from "react-router-dom"
import { useRef, useState } from "react"

import UpperVisualizer from "./UpperVisualizer"
import CenterInformation from "./CenterInformation"
import Footer from "./Footer"
import useZustand from "../storage/zustandStorage"

function RootLayout() {
    const prominentLayout = useZustand((state) => state.prominentLayout)
    const setProminentLayout = useZustand((state) => state.setProminentLayout)
    const increasePopulation = useZustand((state) => state.increasePopulation)

    const [classUpper, setClassUpper] = useState('min')
    const [classOutlet, setClassOutlet] = useState('max')
    const outletRef = useRef(null)
    return (
        <div className="root-layout">
            <div className={`layout-upper-${prominentLayout ? 'max' : 'min'}`}>
                <UpperVisualizer state={'default'} />
            </div>
            <div className="layout-center">
                <CenterInformation />
            </div>
            <div ref={outletRef} className={`layout-outlet-${prominentLayout ? 'min' : 'max'}`}>
                <Outlet />
            </div>
            <div className="layout-footer">
                {/* <Footer /> */}
                <button type="button" onClick={() => {
                    setClassUpper( classUpper == 'max' ? 'min' : 'max' )
                    setClassOutlet( classOutlet == 'max' ? 'min' : 'max' )
                    increasePopulation()
                    setProminentLayout()
                }}>
                    Click to Enter
                </button>
            </div>
        </div>
    );
}

export default RootLayout;