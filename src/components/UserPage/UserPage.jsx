import { Link, Outlet } from "react-router-dom";

export default function UserPage() {

    return (
        <>


            <div>
                <h1>דף המשתמש שלי:</h1>

            </div>
            <div>
                <nav>
                    <Link to="orders">הזמנות</Link>
                    <Link to="statistics">סטטיסטיקות</Link>
                    <Link to="profile">פרופיל</Link>
                    <Outlet />
                </nav>
            </div>

        </>
    )
}