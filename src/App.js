import { makeStyles } from "@material-ui/core";
import SignIn from "./pages/signIn";
import "./index.css";
import "./App.css";


const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arvo"
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SignIn />
    </div>
  );
}
