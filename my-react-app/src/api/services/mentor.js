import { axiosInstance } from "../coreApi";

const getMentor = async () => {
  const token = window.localStorage.getItem("token");
  try {
    const response = await axiosInstance.get("/get_mentors", {
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

export { getMentor };
