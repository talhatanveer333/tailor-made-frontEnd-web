import { create } from "apisauce";
import { getToken } from "../auth/authStorage";

const apiObject = create({
  baseURL: "http://localhost:3000/api",
});

apiObject.addAsyncRequestTransform(async (request) => {
  const token = await getToken();
  //console.log(token);
  if (!token) return;
  request.headers["x-auth-token"] = token;
});

export default apiObject;
