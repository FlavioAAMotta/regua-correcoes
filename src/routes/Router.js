import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from "../pages/Login/Login";
import { SignUp } from "../pages/SignUp";
import { Main } from "../pages/Main/Main";
import { CreateRule } from "../pages/CreateRule/CreateRule";
import { BrowserRouter } from "react-router-dom";
import { GetRule } from "../pages/GetRule";

//import ErrorPage from '../pages/ErrorPage/ErrorPage';

const Router = ({ setLoginButton, currentPage, changeCurrentPage, questions, getQuestions, isLoading, error }) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />

                <Route path="/signup" element={<SignUp />} />

                <Route path="/main" element={<Main />} />

                <Route path="/createRule" element={<CreateRule />} />

                <Route path="/rule" element={<GetRule />} />

                {/* <Route path="*" element={<ErrorPage />} /> */}

            </Routes>
        </BrowserRouter>
    )
};

export default Router;