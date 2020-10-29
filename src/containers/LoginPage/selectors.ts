import { createSelector } from "reselect";
import { initialState } from "./reducer";

// Direct selector to the loginPageDomain

const selectLoginPage = (state: any) => state.loginPage || initialState;

// Other specific selectors

// Default selector used by loginPage

const makeSelectedLoginPage = () =>
  createSelector(selectLoginPage, (substate) => substate);
export default makeSelectedLoginPage;
export { selectLoginPage };
