import RootLayout from "../components/RootLayout";
import Recordatorios from "../pages/Recordatorios";
import Rutinas from "../pages/Rutinas";
import Notas from "../pages/Notas";

import { BrowserRouter, Routes, Route } from "react-router-dom"

function RouteMain() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RootLayout />}>
                        <Route index element={<Recordatorios />} />
                        <Route path="/rutinas" element={<Rutinas />} />
                        <Route path="/notas" element={<Notas />} />
                        <Route path="*" element={<div>Pagina no encontrada</div>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouteMain;