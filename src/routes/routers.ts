import RegisterPage from "../containers/RegisterPage/Loadable";
import LoginPage from "../containers/LoginPage/Loadable";
import AppPage from "../containers/AppPage/Loadable";

export const routers = [
  {
    name: "Login",
    path: "/Login",
    // exact: true,
    component: LoginPage,
  },
  {
    name: "Register",
    path: "/Register",
    // exact: true,
    component: RegisterPage,
  },
  {
    name: "App Page",
    path: "/",
    exact: true,
    component: AppPage,
  },
];
