import { createSelector } from "reselect";
import { initialState } from "./reducer";

// Direct selector to the loginPageDomain

const selecRegisterPage = (state: any) => state.registerPage || initialState;

// Other specific selectors

// Default selector used by loginPage

const makeSelectedRegisterPage = () =>
  createSelector(selecRegisterPage, (substate) => substate);
export default makeSelectedRegisterPage;
export { selecRegisterPage };
