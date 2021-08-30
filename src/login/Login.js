import {useState} from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="anime">
            <div className="login">
                <div className="login-screen">
                    <div className="login-title">
                        <h1>Вход</h1>
                    </div>
                    <div className="login-form">
                        <div className="control-group">
                            <form>
                                <input type="email" className="login-field" placeholder="Email" id="login-email"/>
                                <input type="password" className="login-field" placeholder="Password" id="login-pass"/>
                            </form>
                        </div>
                        <input type="submit" className="btn-login" value="Войти"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
