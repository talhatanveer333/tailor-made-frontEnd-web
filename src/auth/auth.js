import apiObject from "../services/apiObject";

const endpoint = "/auth";

const login = (email, password) =>
  apiObject.post(endpoint, { email, password });

export { login };
