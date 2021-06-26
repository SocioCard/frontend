import { makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute";
import SignIn from "./pages/signIn"; 
import Admin from './pages/admin';
import "./index.css";
import "./App.css";
import ShowPage from './pages/showpage'
import Appearance from "./pages/appearance";
import ThemeShowcase from './components/themeShowcase';
import SocialLink from "./pages/socialLinks";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn}/>
          <Route exact path="/social" component={SocialLink}/>
          <Route exact path="/:id" component={ShowPage}/>
          <Redirect exact from="/:id/admin" to="/:id/admin/links"/>
          <ProtectedRoute exact path="/:id/admin/:page" component={Admin}/>
        </Switch>
      </Router>
    </div>
  );
}
