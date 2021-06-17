import { makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute";
import SignIn from "./pages/signIn";
<<<<<<< HEAD
import Admin from './pages/admin';
=======
import Admin from './admin';
import ShowPage from './showpage';
>>>>>>> 4380db10ce28faeeea9797fa8ec51ac3dd6a1e56
import "./index.css";
import "./App.css";
import Appearance from "./appearance";


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
