import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state";

import LoginForm from "./LoginComponents/LoginForm";
import Home from "./HomeComponents/Home";
import Background from "./backgroundComponents/Background";
import Loader from "./LoaderComponents/Loader";
import "./styles/index.css";

const App = () => {
  const state = useSelector((state) => state).user;
  const dispatch = useDispatch();
  const { login, logout, localStorageLogin, startLoading } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center">
      {state.user ? (
        <Home user={state.user} logout={logout} startLoading={startLoading} />
      ) : (
        <LoginForm
          login={login}
          localStorageLogin={localStorageLogin}
          isUnauthorized={state.isUnauthorized}
          startLoading={startLoading}
        />
      )}
      {state.isLoading ? <Loader /> : ""}
      <Background />
    </div>
  );
};
export default App;
