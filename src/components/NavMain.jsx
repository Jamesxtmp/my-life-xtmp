import { Link } from "react-router-dom";

function NavMain() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Recordatorios</Link>
                    </li>
                    <li>
                        <Link to="/notas">Notas</Link>
                    </li>
                    <li>
                        <Link to="/rutinas">Rutinas</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavMain;