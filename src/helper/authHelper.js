import cookie from "js-cookie";

const setCookie = (key, value) => {
  cookie.set(key, value, {
    expires: 1,
  });
};

const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const authenticate = (userData) => {
  const { user_name, email } = userData;
  setCookie("user name", user_name);
  setLocalStorage("user details", { user_name, email });
  //   next();
};

export const isAuth = () => {
  const checkLocalStorage = JSON.parse(localStorage.getItem("user details"));
  if (checkLocalStorage) {
    return checkLocalStorage;
  } else {
    return false;
  }
};

const removeCookie = (key) => {
  cookie.remove(key);
};

const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const signOut = () => {
  removeCookie("user name");
  removeLocalStorage("user details");
};
