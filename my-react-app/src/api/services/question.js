import { axiosInstance } from "../coreApi";

const handleQuestion = async (body) => {
  try {
    const response = await axiosInstance.get("/onboarding_question", {
      question_id: body.question_id,
      answer: body.answer,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const handleAnswer = async (body) => {
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

export { handleQuestion, handleAnswer };
