import "./Register.css"

export default function Register(){
    return(
        <>
            <h1>Register</h1>
            <form>
                <input type="text" placeholder="הכנס שם משתמש"/>
                <input type="email" placeholder="הכנס כתובת מייל"/>
                <input type="password" placeholder="הכנס סיסמא"/>
                <button>צור חשבון</button>
            </form>
        </>
    )
}