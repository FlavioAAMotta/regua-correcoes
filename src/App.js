import { GlobalStyle } from "./styled-app";
import theme from "./constants/theme";
import { useState } from "react";
import { ThemeProvider } from "@material-ui/core";
import useRequestData from "./hooks/useRequestData";
import { baseURL } from "./constants/url";

const App = () => {
  const token = localStorage.getItem("token");
  const [loginButton, setLoginButton] = useState(token ? "Logout " : "Login");
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, getQuestions, isLoading, error] = useRequestData([], `${baseURL}/posts?page=${currentPage}&size=10`);

  const changeCurrentPage = (event, number) => {
    setCurrentPage(number);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <p>Olá</p>
    </ThemeProvider>
  )
}

export default App;
