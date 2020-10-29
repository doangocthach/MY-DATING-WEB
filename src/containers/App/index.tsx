import React from "react";
import { Link, Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import {
  MuiPickersUtilsProvider,
  // LocalizationProvider,
} from "@material-ui/pickers";
import MomentUtils from "../../utils/MomentUtils";
// import MomentUtils from "@date-io/moment";
import moment from "moment";
import AppPage from "../AppPage";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
interface Iprops {
  name?: string;
}
const App: React.FC<Iprops> = (props: Iprops) => {
  return (
    // <LocalizationProvider dateAdapter={MomentUtils}>
    <MuiPickersUtilsProvider
      locale="vi"
      libInstance={moment}
      utils={MomentUtils}
    >
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginPage}></Route>
          <Route exact path="/register" component={RegisterPage}></Route>
          <Route path="/" component={AppPage}></Route>
        </Switch>
      </Router>
    </MuiPickersUtilsProvider>
    // </LocalizationProvider>
  );
};

export default App;
