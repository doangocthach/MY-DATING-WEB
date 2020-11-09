import React, { ComponentType } from "react";
import { Link, Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import {
  MuiPickersUtilsProvider,
  // LocalizationProvider,
} from "@material-ui/pickers";
import MomentUtils from "../../utils/MomentUtils";
// import MomentUtils from "@date-io/moment";
import moment from "moment";
import GlobalStyled from "../../global-style";
import { routers } from "../../routes/routers";
interface Iprops {
  name?: string;
}
interface RouterProps {
  path: string;
  component: ComponentType;
}
const App: React.FC<Iprops> = (props: Iprops) => {
  return (
    <MuiPickersUtilsProvider
      locale="vi"
      libInstance={moment}
      utils={MomentUtils}
    >
      <GlobalStyled />
      <Router>
        <Switch>
          {routers.map((props: RouterProps, key: any) => {
            return <Route path={props.path} component={props.component} />;
          })}
        </Switch>
      </Router>
    </MuiPickersUtilsProvider>
  );
};

export default App;
