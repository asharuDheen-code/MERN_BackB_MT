import React from "react";
import { Redirect } from "react-router";
import AuthSignUp from "../../components/AuthSignUp/AuthSignUp";
import { isAuth } from "../../helper/authHelper";

const SignUp = () => (isAuth() ? <Redirect to="/" /> : <AuthSignUp />);

export default SignUp;
