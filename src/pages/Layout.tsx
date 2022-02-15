import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <div className='Header'>
                <h2 className='Titel'>Co2Ampel</h2>
                <Link to="/">Home</Link>
                <Link to="/Evaluation">Auswertung</Link>
                <Link to="/Options">Einstellungen</Link>
            </div>
            <Outlet />
        </>
    )
}
export default Layout;
