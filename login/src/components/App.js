import '../styles/App.css';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';
import { useState } from 'react';


const App = () => {
  const [authenticated, setAuth] = useState(false);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Login authenticated={authenticated} setAuth={setAuth}/>}/>
        <PrivateRoute authed={authenticated}  path="/Dashboard" component={Dashboard}/>
      </Switch>
    </Router>
  );
}

export default App;
