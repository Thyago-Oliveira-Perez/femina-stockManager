export const isAuthenticated = () => localStorage.getItem('token') !== null ? true : false;
export const getToken = () => localStorage.getItem('token');

export const saveToken = (token: string) => {
  localStorage.setItem('token', token);
};
export const logout = () => {
  localStorage.removeItem('token');
};