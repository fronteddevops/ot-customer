import Axios from "axios";
import constant from "../../constant";
import api from "../api";
/* eslint-disable */
export default {
  REGISTER_USER: (data) => {
    return new Promise(async (resolve, reject) => {
      try {const response = await Axios.post(
          constant.BASE_URL + api.Auth.REGISTER(),data);
        if (response.data) {
          localStorage.setItem(
            "access_token",
            response.data.tokens.access.token
          );
          localStorage.setItem(
            "access_expires",
            response.data.tokens.access.expires
          );
          localStorage.setItem(
            "user_Details",
            response.data.user
          );
          console.log(response.data, '>>>>>>>>>>>>>>>>>')
          Axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${localStorage.getItem("access_token")}`;
        }
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  },
  CHANGE_PASSWORD: (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.post(
          constant.BASE_URL + api.Auth.CHANGE_PASSWORD(),
          data
        );
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  },
  GET_IMAGE: (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.post(constant.BASE_URL + '/getObjectAccess', {
          url: `${constant.CLOUDFRONT_DESTINATION}${data}`,
          expireTime: 84400,
        })
        // console.log('=====+++>>', response)
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  },
  SEND_EMAIL: (data) => {
    return new Promise((resolve, reject) => {
      try {
        const response = Axios.post(
          constant.BASE_URL + api.Auth.SEND_EMAIL(),
          "",
          {headers: {Authorization: `Bearer ${data}`,},
          }
        );
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  },
  VERIFY_EMAIL: (token) => {
    return new Promise((resolve, reject) => {
      try {
        const response = Axios.post(
          constant.BASE_URL + api.Auth.VERIFY_EMAIL(token),
          ""
        );
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  },
  LOGIN_USER: (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.post(
          constant.BASE_URL + api.Auth.LOGIN(),data,{headers: {
              "Content-Type": "application/json",
            },
          }
        );
        localStorage.setItem("access_token", response.data.tokens.access.token);
        localStorage.setItem("email", response.data.user.email);
        localStorage.setItem("user_Details",JSON.stringify(response.data.user));
        console.log(response.data.user, '>>>>>>>>>>>>>>>>>')
        Axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("access_token")}`;
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  },
  LOGIN_GOOGLE: (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Axios.post(
          constant.BASE_URL + api.Auth.LOGIN_GOOGLE(),
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        localStorage.setItem(
          "access_token",
          response.data.tokens.access.token
        );
        localStorage.setItem("email", response.data.user.email);
        localStorage.setItem(
          "user_Details",
          JSON.stringify(response.data.user)
        );
        console.log(response.data.user, ">>>>>>>>>>>>>>>>>");
        Axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${localStorage.getItem("access_token")}`;
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  },
  VERIFY_OTP: (data) => {
    return new Promise((resolve, reject) => {
      try {
        const response = Axios.post(constant.BASE_URL + api.Auth.OTP(), data);
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  },
  RESEND_OTP: (data) => {
    return new Promise((resolve, reject) => {
      try {
        const response = Axios.post(
          constant.BASE_URL + api.Auth.RESENDOTP(),
          data
        );
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  },
  FORGOT_PASSWORD: (data) => {
    return new Promise((resolve, reject) => {
      try {
        const response = Axios.post(
          constant.BASE_URL + api.Auth.FORGOT_PASSWORD(),
          data
        );
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  },
  RESET_PASSWORD: (token, data) => {
    return new Promise((resolve, reject) => {
      try {
        const response = Axios.post(
          constant.BASE_URL + api.Auth.RESET_PASSWORD(token),
          data
        );
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  },
};
