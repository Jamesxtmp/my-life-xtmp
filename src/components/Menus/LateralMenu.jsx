import useZustand from "../../storage/zustandStorage"

function LateralMenu() {

    const lateralMenuActive = useZustand((state) => state.lateralMenuActive)
    const setLateralMenuActive = useZustand((state) => state.setLateralMenuActive)
    return (
        <>
            <div className={`curtain${lateralMenuActive ? '-hide' : ''}`}
                onClick={()=>setLateralMenuActive()}
            ></div>
            <div className={`lateral-menu${lateralMenuActive ? '-hide' : ''}`}
            >LateralMenu</div>
        </>
    )
}
export default LateralMenu