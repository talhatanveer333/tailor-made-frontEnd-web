import apiObject from "./apiObject";

const endpoint = "/users/tailor";

const signUp = (name, address, email, password, intro) =>
  apiObject.post(endpoint, { name, address, email, password, intro });

export { signUp };
