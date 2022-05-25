import { useNavigate } from "react-router-dom";
import "./Register.css"

export default function Register() {

    const navigate = useNavigate();

    const formData = {
        username: "",
        email: "",
        password: ""
    }
    // const onChange = (e, key) => {
    //     formData[key] = e.target.value;
    //     console.log("key", key);
    //     console.log("value", e.target.value);
    // }

    const register = (event) => {


        event.preventDefault();

        //שליפת המידע הקיים בטופס
        const form = event.target;
        formData.username = form.username.value;
        formData.email = form.email.value;
        formData.password = form.password.value;

        if (!checkPassword(formData.password))
            alert("סיסמא לא תקינה")
        //supposed to send formData to server
        alert(`User ${formData.username} has registered.`)
        console.log(formData);

        if (true) {
            navigate("/user-page");
        }
    }

    const checkPassword = (password) => {
        return password.length > 6;
    }
    return (
        <>      
            <form className="col-4 m-auto card p-4 mt-4" onSubmit={(event) => { register(event) }}>
                <h1>התחברות</h1>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">שם משתמש</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" name="username" placeholder="הכנס שם משתמש" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">כתובת אימייל</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="הכנס כתובת מייל" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">סיסמא</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" placeholder="הכנס סיסמא" />
                </div>

                <button type="submit" className="btn btn-primary">צור חשבון</button>
            </form>
        </>
    )
}