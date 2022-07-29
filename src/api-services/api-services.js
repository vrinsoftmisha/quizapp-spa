import { API_ROUTES } from "../constant/api-routes";
import { environment } from "../environment/environment";
import authAxios from "./authAxios";
const axios = require("axios").default;

export default class ApiServices {
  async login(email, password) {
    const data = {
      email: email,
      password: password,
    };

    const apiUrl = `${environment.serverUrl}${API_ROUTES.userLogin}`;

    const resposne = await axios.post(apiUrl, data);
    console.log(resposne.data);
  }
}
