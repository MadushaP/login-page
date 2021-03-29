import '../styles/App.css';
import { useHistory } from "react-router-dom";

const Login = (props) => {
    const history = useHistory();

    const signIn = (setAuth) => {
        setAuth(true)
        history.push("/Dashboard");
        //Api
    }

    return (
        <div id="container">
            <div id="header-text">Login</div>
            <input type="text"
                name="username"
                className="login-input"
                placeholder="Username" />
            <input type="password"
                name="Password"
                className="login-input"
                placeholder="Password" />
            <button id="login-button" onClick={() => signIn(props.setAuth)}>Sign In</button>
        </div>
    );
}

export default Login;
