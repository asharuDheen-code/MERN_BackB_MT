import React from "react";
import { Redirect } from "react-router";
import Body from "../../components/Body/Body";
import { isAuth } from "../../helper/authHelper";

const LandigPage = () => isAuth() ? <Body /> : <Redirect to="/signin" />

export default LandigPage;
