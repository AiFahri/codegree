import { axiosInstance } from "../coreApi";

const getPayment = async () => {
  const token = window.localStorage.getItem("token");
  try {
    const response = await axiosInstance.get("/create-payment", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export { getPayment };
