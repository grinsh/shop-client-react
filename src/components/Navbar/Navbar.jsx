import { Link } from "react-router-dom";

export default function Navbar() {
    return (<>
        <nav>
            <Link to="register">הרשמה</Link>
            <Link to="orders-list">לרשימת ההזמנות</Link>
            <Link to="order-details">פרטי ההזמנה</Link>

        </nav>

    </>)
}

