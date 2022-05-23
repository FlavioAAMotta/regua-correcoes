import { GlobalStyle } from "./styled-app";
import theme from "./constants/theme";
import { useState } from "react";
import { ThemeProvider } from "@material-ui/core";
import useRequestData from "./hooks/useRequestData";
import { baseURL } from "./constants/url";
import Router from './routes/Router';

const App = () => {
  const token = localStorage.getItem("token");
  const [loginButton, setLoginButton] = useState(token ? "Logout " : "Login");
  const [currentPage, setCurrentPage] = useState(1);
  const [questions, getQuestions, isLoading, error] = useRequestData([], `${baseURL}/questions?page=${currentPage}&size=10`);

  const changeCurrentPage = (event, number) => {
    setCurrentPage(number);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router setLoginButton={setLoginButton}
        currentPage={currentPage}
        changeCurrentPage={changeCurrentPage}
        questions={questions}
        getQuestions={getQuestions}
        isLoading={isLoading}
        error={error}
      />
    </ThemeProvider>
  )
}

export default App;
