import jwtDecode from "jwt-decode";

const key = "jwt";
const saveToken = (token) => {
  localStorage.setItem(key, token);
};
const getToken = () => {
  return localStorage.getItem(key);
};

const getUser = async () => {
  const token = getToken();
  if (!token) return null;
  const user = jwtDecode(token);
  return user;
};
const removeToken = () => {
  localStorage.removeItem(key);
};

export { saveToken, getUser, removeToken, getToken };
