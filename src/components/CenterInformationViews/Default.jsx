import useZustand from "../../storage/zustandStorage";

function Default() {
    const prominentLayout = useZustand((state) => state.prominentLayout)
    const setProminentLayout = useZustand((state) => state.setProminentLayout)
    const setLateralMenuActive = useZustand((state) => state.setLateralMenuActive)
    return (
        <>
            <div className="l-elements">
                <button className="icon-options-center"
                    onClick={() => setLateralMenuActive()}
                >
                    <img src="/src/assets/bars-solid.svg" alt="" />
                </button>
                <div className="icon-route-center">
                    <img src="/src/assets/clock-rotate-left-solid.svg" alt="" />
                </div>
                <div className="route-center">
                    <h2>{'Recordatorios'}</h2>
                </div>
            </div>

            <div className="r-elements">
                <button
                    onClick={() => setProminentLayout()}
                    className={`icon-traslate-center`}>
                    <img
                        className={`icon-traslate-center-img${prominentLayout ? '' : '-rotate'}`}
                        src={`/src/assets/${'chevron-up-solid.svg'}`} alt="" />
                </button>
                <div className="icon-search-center">
                    <img className="icon-search-center" src="/src/assets/magnifying-glass-solid.svg" alt="" />
                </div>
            </div>
        </>
    )
}

export default Default;