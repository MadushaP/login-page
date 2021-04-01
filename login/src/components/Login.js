import '../styles/App.css';
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';

const Login = (props) => {
    const history = useHistory()
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [buttonDisable, setButtonDisable] = useState(true)
    const [errorText, setErrorText] = useState('')

    const signIn = (setAuth) => {
        fetch('api/authenticate/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, password: password })
        })
            .then(res => res.json())
            .then(data => {
                if (data.response) {
                    setAuth(data.response)
                    history.push("/Dashboard");
                } else {
                    setErrorText('Incorrect username or password')
                    setPassword('')
                    setUsername('')
                   console.log('error')
                }
            })
    }

    useEffect(() => {
        if (username.length > 0 && password.length > 0)
            setButtonDisable(false)

        if (username.length === 0 || password.length === 0)
            setButtonDisable(true)
    }, [username, password])


    return (
        <div id="container">
            <div id="header-text">Login</div>
            <input type="text"
                name="username"
                className="login-input"
                value={username}
                placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password"
                name="Password"
                className="login-input"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)} />
            <button id="login-button" disabled={buttonDisable} onClick={() => signIn(props.setAuth)}>Sign In</button>
            <div id="error-text">{errorText}</div>
        </div>
    );
}

export default Login;
