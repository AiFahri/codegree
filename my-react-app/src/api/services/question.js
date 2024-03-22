import { axiosInstance } from "../coreApi";

const getQuestion = async () => {
  const token = window.localStorage.getItem("token");
  try {
    const response = await axiosInstance.get("/onboarding_questions", {
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

const postAnswer = async (body) => {
  try {
    const response = await axiosInstance.post("/answer_onboarding_question", {
      question_id: body.question_id,
      answer: body.answer,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { getQuestion, postAnswer };
