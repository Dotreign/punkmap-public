import axios from "axios";

const API_URL = "http://localhost:8079/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "login", {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "register", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  updateProfile(username, oldPassword, newPassword) {
    const currentUser = this.getCurrentUser();
    const { email } = currentUser;
    
    return axios.put(API_URL + "updateProfile", {
      username,
      email,
      oldPassword,
      newPassword
    });
  }
}

export default new AuthService();