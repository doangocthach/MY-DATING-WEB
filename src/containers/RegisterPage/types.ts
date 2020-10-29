interface action {
  type: string;
  query?: any;
  error?: any;
  data?: any;
  body?: object;
}
export default action;
