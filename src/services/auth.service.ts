import { ILoginResult } from "../pages/Login/types";

export const isAuthenticated = () => localStorage.getItem('token') !== null ? true : false;

export const getToken = () => { 
  var jsonJwt = localStorage.getItem('token');
  if(jsonJwt){
    return JSON.parse(jsonJwt).accessToken;
  }

  return false;
};

export const getLocalRefreshToken = () => {
  var jsonJwt = localStorage.getItem('token');
  if(jsonJwt){
    return JSON.parse(jsonJwt).refreshToken;
  }
  return false;
}

export const updateLocalAccessToken = (newToken: string) => {
  var jsonJwt = localStorage.getItem('token');
  if(jsonJwt){
    var newJsonJwt = JSON.parse(jsonJwt)
    newJsonJwt.accessToken = newToken;
    localStorage.setItem("token", JSON.stringify(newJsonJwt));
  }
}

export const saveToken = (token: ILoginResult) => {
  localStorage.setItem('token', JSON.stringify(token));
};

export const logout = () => {
  localStorage.removeItem('token');

  window.location.reload();
};
