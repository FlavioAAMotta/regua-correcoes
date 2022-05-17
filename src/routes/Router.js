import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Login}  from "../pages/Login/Login";
import {SignUp}  from "../pages/SignUp";
import {Main}  from "../pages/Main/Main";
import {CreateRule}  from "../pages/CreateRule/CreateRule";
import {GetRule}  from "../pages/GetRule";

//import ErrorPage from '../pages/ErrorPage/ErrorPage';

const Router = ({ setLoginButton, currentPage, changeCurrentPage, questions, getQuestions, isLoading, error }) => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/signup" element={<SignUp/>} />

            <Route path="/main" element={<Main/>} />

            <Route path="/" element={<CreateRule/>} />

            <Route path="/getRule" element={<GetRule/>} />

            {/* <Route path="*" element={<ErrorPage />} /> */}

        </Routes>
    )
};

export default Router;