import {useContext, useEffect, useState} from "react";
import {AdminContext} from "../AdminContext";
import axios from "axios";
import {useHistory} from "react-router-dom";

function Login() {
    const {admin, authenticated, setAdmin, setLoggedIn} = useContext(AdminContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    useEffect(() => {
        if (authenticated) {
            history.push("/admin")
        }
    })

    const submitHandler = (e) => {
        console.log(admin);
        e.preventDefault();

        axios.post(
            `${process.env.REACT_APP_LOCALHOST_API}/authentication/login`,
            {
                username: username,
                password: password
            },
            {
                withCredentials: true
            }
        )
            .then(
                result => success(result),
                result => failure(result))

        function success(result) {
            console.log("Got in success at login.")
            if (result.data && result.data.succeeded) {
                setAdmin(result.data.data.item1);
                setLoggedIn(true);
                history.push("/admin");
            }
        }

        function failure(result) {
            console.log(result);
        }
    }


    return (
        <div className="anime">
            <div className="login">
                <div className="login-screen">
                    <div className="login-title">
                        <h1>Вход</h1>
                    </div>
                    <div className="login-form">
                        <div className="control-group">
                            <form onSubmit={e => {
                                submitHandler(e)
                            }}>
                                <input type="email"
                                       className="login-field"
                                       placeholder="Email"
                                       id="login-email"
                                       onChange={e => {
                                           setUsername(e.target.value)
                                       }}
                                       value={username}
                                />
                                <input type="password"
                                       className="login-field"
                                       placeholder="Password"
                                       id="login-pass"
                                       onChange={e => {
                                           setPassword(e.target.value)
                                       }}
                                       value={password}
                                />
                                <button type="submit" className="btn-login">Войти</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
