import React from "react";
import { Redirect } from "react-router";
import AuthSignIn from "../../components/AuthSignIn/AuthSignIn";
import { isAuth } from "../../helper/authHelper";

const SignIn = () => isAuth() ? <Redirect to="/" /> : <AuthSignIn />;

export default SignIn;
