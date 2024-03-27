import { createBrowserRouter } from "react-router-dom";

// Route
import ProtectedRoute from "../components/routes/Protected_route";
import AuthRoute from "../components/routes/Auth_route";

// Pages
import LoginPage from "../components/pages/Login_page";
import RegisterPage from "../components/pages/Register_page";
import Question from "../components/pages/question/Question";
import Question2 from "../components/pages/question/Question2";
import Acc_Success from "../components/pages/question/Acc_Success";
import Landing_Page from "../components/pages/Landing_Page";
import Subscribtion from "../components/pages/Subscription";
import Payment from "../components/ui/Payment";
import Dashboard from "../components/home/Dashboard";
import Question3 from "../components/pages/question/Question3";
import ResultCourse from "../components/pages/question/Result_course";
import Mentoring from "../components/pages/Mentoring";
import Course from "../components/pages/Course";
import Quizz from "../components/pages/quiz/Quizz";
import Quiz2 from "../components/pages/quiz/Quiz2";
import Congrats from "../components/pages/quiz/Congrats";
import Sertif from "../components/pages/Sertif";
import Quiz3 from "../components/pages/quiz/Quiz3";

const router = createBrowserRouter([
  {
    path: "/landingpage",
    element: <Landing_Page />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <RegisterPage />,
  },
  {
    path: "/course",
    element: <Course />,
  },
  {
    path: "/mentoring",
    element: <Mentoring />,
  },

  //authroute
  {
    element: <AuthRoute />,
    children: [
      {
        path: "/",
        element: <Landing_Page />,
      },
      {
        path: "/landingpage",
        element: <Landing_Page />,
      },

      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <RegisterPage />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/subscription",
        element: <Subscribtion />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/quiz",
        element: <Quizz />,
      },
      {
        path: "/quiz2",
        element: <Quiz2 />,
      },
      {
        path: "/quiz3",
        element: <Quiz3 />,
      },
      {
        path: "/done",
        element: <Congrats />,
      },
      {
        path: "/sertif",
        element: <Sertif />,
      },
      {
        path: "/acc_success",
        element: <Acc_Success />,
      },
      {
        path: "/question",
        element: <Question />,
      },
      {
        path: "/question2",
        element: <Question2 />,
      },
      {
        path: "/question3",
        element: <Question3 />,
      },
      {
        path: "/result",
        element: <ResultCourse />,
      },
    ],
  },
]);

export default router;
