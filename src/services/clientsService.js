import axios from "axios";
const baseUrl = "http://localhost:3001/api/clients";

const getAll = async (token) => {
  const clients = await axios.get(baseUrl, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return clients.data;
};

const exports = {
  getAll,
};
export default exports;
