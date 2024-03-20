import { axiosInstance } from "../coreApi";

const handleLogin = async (body) => {
  try {
    const response = await axiosInstance.post("/login", {
      email: body.email,
      password: body.password,
    });
    window.localStorage.setItem("token", response.data.token);
  } catch (error) {
    throw error;
  }
};

const handleRegister = async (body) => {
  try {
    const response = await axiosInstance.post("/register", {
      name: body.name,
      email: body.email,
      password: body.password,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};


export { handleLogin, handleRegister };
