import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { getQuestion, postAnswer } from "../../../api/services/question";

const Question = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answer, setAnswer] = useState({
    question_id: "",
    answer: "",
  });

  const handleQuestion = async () => {
    try {
      const response = await getQuestion();
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
      if (error.response.data.error === "data not found") {
        setData([]);
      }
    }
  };

  useEffect(() => {
    handleQuestion();
  }, []);

  const handleAnswer = async (e) => {
    e.preventDefault();
    try {
      const response = await postAnswer(answer);
      window.localStorage.setItem("token", response.data.token);
      setTimeout(() => {
        navigate("/question2");
      }, 1000);
    } catch (error) {
      alert("Jawaban anda salah!");
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Button
            type={"button"}
            className="mt-6"
            variation={"back"}
            onClick={() => navigate("/acc_success")}
          >
            <img src=".\src\assets\arrow_back.svg" alt="" width="25px" />
          </Button>
          {/* data[currentIdx].question */}

          {data.map((item, index) => (
            <div key={index}>
              <h2 className="mt-5 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                {item.question}
              </h2>

              <br></br>
              <Button
                type={"text"}
                className="mt-6 text"
                variation={"secondary"}
                onChange={(e) =>
                  setAnswer({ ...answer, question_id: e.target.value })
                }
                onClick={handleAnswer}
              >
                {/* {console.log(item.options[1].description)} */}
                {item.options[0].description}
              </Button>
              <Button
                type={"text"}
                className="mt-6"
                variation={"secondary"}
                onChange={(e) =>
                  setAnswer({ ...answer, answer: e.target.value })
                }
                onClick={handleAnswer}
              >
                {item.options[1].description}
              </Button>
              <Button
                type={"text"}
                className="mt-6"
                variation={"secondary"}
                onChange={(e) =>
                  setAnswer({ ...answer, answer: e.target.value })
                }
                onClick={handleAnswer}
              >
                {item.options[2].description}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Question;
