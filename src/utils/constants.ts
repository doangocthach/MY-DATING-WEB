// App url
export const API_URL = "http://localhost:8080";
export const LOGIN_URL = `${API_URL}/login`;
export const REGISTER_URL = `${API_URL}/register`;

// config saga injection
export const RESTART_ON_REMOUNT = "@@saga-injector/restart-on-remount";
export const DAEMON = "@@saga-injector/daemon";
export const ONCE_TILL_UNMOUNT = "@@saga-injector/once-till-unmount";

//
export const METHOD_REQUEST = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
  PUT: "PUT",
};

export const LOCAL_STORAGE = {
  ACCESS_TOKEN: "accessToken",
};

export const STATUS_CODE = {
  SUCCESS: "1",
};
