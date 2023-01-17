import Default from "./UpperVisualiserViews/default"

function UpperVisualizer({ state }) {

    if (state == 'default') {
        return <Default/>
    }



    if (state != 'default') {
        return (
            <div className="upper-visualizer">Error en El UpperVisualizer</div>
        )
    }
}

export default UpperVisualizer