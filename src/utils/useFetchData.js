import toast from "react-hot-toast";
import axios from "axios";

const logOnDev = (message) => {
  if (process.env.NODE_ENV === "development") {
    console.log(`?? ${message}`);
  }
};

axios.interceptors.request.use(
  async (config) => {
    config.baseURL = process.env.REACT_APP_BASE_URL;
    config.headers["Content-Type"] = "multipart/form-data";
    return config;
  },
  (error) => {
    logOnDev(`[API] Error`);
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  async (error) => {
    logOnDev(`[API] Error` + error?.message);
    if (!error.response) {
      toast.error("Try again");
    } else {
      const response = error?.response?.data;
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        toast.error(response?.detail);
      } else if (error?.response?.status === 500) {
        console.log(error);
      } else if (error?.response?.status === 400) {
        if (response?.errors?.length === 0 || response.message) {
        } else {
          let msg = "";
          response.errors.map((text) => (msg = msg + text + "***"));
          toast.error(msg);
        }
      }
    }
    return Promise.reject(error);
  }
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
