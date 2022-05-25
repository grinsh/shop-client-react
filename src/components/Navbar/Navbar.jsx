import { Link } from "react-router-dom";

export default function Navbar() {
    return (<>
        <nav className="navbar navbar-expand-lg"  style={{backgroundColor:"pink"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation" style={{position:"absolute", left:"0px"}}>
                    <span className="navbar-toggler-icon" ></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">דף הבית</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="register" className="nav-link">הרשמה</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="orders-list" className="nav-link">לרשימת ההזמנות</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="order-details" className="nav-link">פרטי ההזמנה</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>



    </>)
}

