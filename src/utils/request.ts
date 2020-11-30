import { LOCAL_STORAGE } from "./constants";

function parseJSON(response: Response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}
async function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const responseJson = await response.json().then((res) => {
    const error = new Error(res.errorDescription || "System Error!");
    error.name = res.errorCode;
    throw error;
  });
  return responseJson;
}
export default function request(url: string, options: any) {
  const accessToken = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN);
  // if (!accessToken) {
  //  localStorage.setItem(
  //    LOCAL_STORAGE.ACCESS_TOKEN,

  //  )
  const newHeaders = Object.assign(
    {
      // Authorization: localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN),
      "Content-Type": "application/json;charset=UTF-8",
      "x-access-token": accessToken,
    },
    options.headers
  );
  options.headers = newHeaders;
  // options.credentials = "include";
  return fetch(url, options).then(checkStatus).then(parseJSON);
}
