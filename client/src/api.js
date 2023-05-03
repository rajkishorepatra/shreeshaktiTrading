import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const getHello = async () => {
  const response = await axios.get(`${API_BASE_URL}/hello`);
  console.log(response);
  return response.data;
};
