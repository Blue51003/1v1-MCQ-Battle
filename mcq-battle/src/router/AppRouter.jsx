import React from "react";
import { Route, Routes } from "react-router-dom";
import { Urls } from "../constant/Urls";
import HomePage from "../pages/home.page";
import LoginPage from "../pages/login.page";
import SignupPage from "../pages/signup.page";
import EditMcqPage from "../pages/mcq/EditMcqPage";
import McqPage from "../pages/mcq/McqPage";
import McqsPage from "../pages/mcq/mcqs.page";
import NewMcqPage from "../pages/mcq/newMcq.page";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={Urls.Home()} element={<HomePage/>}/>
            <Route path={Urls.Signup()} element={<SignupPage/>}/>
            <Route path={Urls.Login()} element={<LoginPage/>}/>

            <Route
            path={Urls.Mcqs.Mcqs()}
            element={
                <ProtectedRoute>
                    <McqsPage />
                </ProtectedRoute>
            }
            ></Route>
            <Route
            path={Urls.Mcqs.Mcq(":id")}
            element={
                <ProtectedRoute>
                    <McqPage/>
                </ProtectedRoute>
            }></Route>
            <Route
            path={Urls.Mcqs.EditMcq(":id")}
            element={
                <ProtectedRoute>
                    <EditMcqPage/>
                </ProtectedRoute>
            }></Route>
        </Routes>
    );
};

export default AppRouter;
