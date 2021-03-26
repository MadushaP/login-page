import './App.css';

function Login() {
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
              <button id="login-button">Sign in</button>
        </div>
    );
}

export default Login;
