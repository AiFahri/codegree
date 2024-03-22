import { axiosInstance } from "../coreApi";

const getRecomend = async () => {
  const token = window.localStorage.getItem("token");
  try {
    const response = await axiosInstance.get("/recomend_language", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const postRecomend = async (body) => {
    try {
      const response = await axiosInstance.post("/recomend_language", {
        question_id: body.question_id,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export { getRecomend, postRecomend  };
