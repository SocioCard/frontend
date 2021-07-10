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
import Homepage from "./pages/homepage";
import About from "./pages/about";
import HowItWorks from "./pages/howItWorks";
//import Loader from "./pages/loader";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          {/* <Route exact path="/loading" component={Loader}/> */}
          <Route exact path="/about" component={About}/>
          <Route exact path="/howitworks" component={HowItWorks}/>
          <Route exact path="/social" component={SocialLink}/>
          <Route exact path="/:id" component={ShowPage}/>
          <Redirect exact from="/:id/admin" to="/:id/admin/links"/>
          {/* <ProtectedRoute exact path="/:id/admin/:page" component={Admin}/> */}
          <Route exact path="/:id/admin/:page" component={Admin}/>
        </Switch>
      </Router>
    </div>
  );
}
