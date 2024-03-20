import { axiosInstance } from "../coreApi";

const handleMentor = async (body) => {
  try {
    const response = await axiosInstance.get("/mentor", {
      question_id: body.question_id,
      answer: body.answer,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { handleMentor };
