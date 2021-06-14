import { makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/signIn";
import Admin from './admin';
import "./index.css";
import "./App.css";


export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn}/>
          <Route exact path="/:id/admin" component={Admin}/>
        </Switch>
      </Router>
    </div>
  );
}
