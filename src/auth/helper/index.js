export const isAuthenticated = () => {
  if (localStorage.getItem("jwt"))
    return JSON.parse(localStorage.getItem("jwt"));
  else return false;
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();
  }
};

export const updateUserTasks = (tasks) => {};
