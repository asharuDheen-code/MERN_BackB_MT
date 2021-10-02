// import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandigPage from "./page/LandingPage/LandigPage";
import SignUp from "./page/SignUp/SignUp";
import SignIn from "./page/SingIn/SignIn";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={LandigPage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
