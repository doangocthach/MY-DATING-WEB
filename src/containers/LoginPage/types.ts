// export interface StartAction {
//   type: string;
//   query: any;
// }
// export interface SuccessAction {
//   type: string;
//   data: any;
// }
// export interface FailureAction {
//   type: string;
//   error: any;
// }

// type actionTypes = StartAction | FailureAction | SuccessAction;
interface action {
  type: string;
  query?: any;
  error?: any;
  data?: any;
}
export default action;
