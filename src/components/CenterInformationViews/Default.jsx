function Default() {
    return (
        <>
            <div className="l-elements">
                <div className="icon-options-center">
                    <img src="/src/assets/bars-solid.svg" alt="" />
                </div>
                <div className="icon-route-center">
                    <img src="/src/assets/clock-rotate-left-solid.svg" alt="" />
                </div>
                <div className="route-center">
                    <h2>{'Recordatorios'}</h2>
                </div>
            </div>

            <div className="r-elements">
                <div className="icon-traslate-center">
                    <img src={`/src/assets/${'chevron-up-solid.svg'}`} alt="" />
                </div>
                <div className="icon-search-center">
                    <img src="/src/assets/magnifying-glass-solid.svg" alt="" />
                </div>
            </div>
        </>
    )
}

export default Default;