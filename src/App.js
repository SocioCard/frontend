import { makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute";
import SignIn from "./pages/signIn";
import Admin from './pages/admin';
import ShowPage from './pages/showpage';
import "./index.css";
import "./App.css";
import Appearance from "./pages/appearance";


export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn}/>
          <Route exact path="/:id" component={ShowPage}/>
          <Redirect exact from="/:id/admin" to="/:id/admin/profile"/>
          <ProtectedRoute exact path="/:id/admin/links" component={Admin}/>
          <ProtectedRoute exact path="/:id/admin/profile" component={Appearance}/>
        </Switch>
      </Router>
    </div>
  );
}
