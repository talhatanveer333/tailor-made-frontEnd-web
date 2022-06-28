import apiObject from "../services/apiObject";

const endpoint = "/auth";

async function login(email, password) {
  try {
    const result = await apiObject.post(endpoint + "/webPortal", {
      email,
      password,
    });
    return result;
  } catch (e) {
    console.error(e);
  }
}

export { login };
