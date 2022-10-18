import axios from "axios";
const baseUrl = "http://localhost:3001/api/login";

const jwtLogin = async ({ username, password }) => {
  const response = await axios.post(baseUrl, {
    username: username,
    password: password,
  });
  return response.data;
};

const exports = { jwtLogin };
export default exports;
