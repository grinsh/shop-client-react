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

        if(!checkPassword(formData.password))
        alert("סיסמא לא תקינה")
        //supposed to send formData to server
        alert(`User ${formData.username} has registered.`)
        console.log(formData);

        if(true){
            navigate("/user-page");
        }
    }

    const checkPassword = (password) => {
        return password.length > 6;
    }
    return (
        <>
            <h1>Register</h1>
            {/* <form>
                <input type="text" placeholder="הכנס שם משתמש" onChange={(e) => { onChange(e,"username")}} />
                <input type="email" placeholder="הכנס כתובת מייל" onChange={(e) => { onChange(e,"email")}} />
                <input type="password" placeholder="הכנס סיסמא" onChange={(e) => { onChange(e,"password")}} />
                <button onClick={(event) => { register(event) }}>צור חשבון</button>
            </form> */}
            <form onSubmit={(event) => { register(event) }}>
                <input type="text" name="username" placeholder="הכנס שם משתמש"  />
                <input type="email" name="email" placeholder="הכנס כתובת מייל" />
                <input type="password" name="password" placeholder="הכנס סיסמא" />
                <button type="submit">צור חשבון</button>
            </form>
        </>
    )
}