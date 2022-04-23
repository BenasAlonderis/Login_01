import React, { useEffect } from "react";
import userSVG from "../assets/svg/user.svg";
import keySVG from "../assets/svg/key.svg";

const LoginForm = (props) => {
  useEffect(() => {
    props.startLoading();
    props.localStorageLogin();
  }, []);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const user = {
          id: e.target.email.value,
          password: e.target.password.value,
        };
        props.startLoading();
        props.login(user);
      }}
      className="absolute w-[22rem] h-[18.5rem] sm:w-[27rem] sm:h-[23.5rem] top-52 grid grid-flow-row grid-rows-auto items-center justify-center"
    >
      <div className="w-[22rem] sm:w-[27rem] h-full row-span-1 flex items-start justify-around">
        <div className="w-max h-max flex flex-col items-center justify-evenly">
          <h1 className="text-white font-[700] text-5xl leading-[64px] h-max mb-1">
            Login
          </h1>
          <p className="text-white font-[600] text-lg leading-6 h-max">
            Please enter your Login and your Password
          </p>
        </div>
      </div>

      <div className="w-[22rem] sm:w-[27rem] h-full row-span-1 flex flex-col items-center justify-around">
        <div
          className={
            (props.isUnauthorized ? "border-red-500" : "border-white") +
            " relative flex items-center w-full h-12 border-[1px] rounded-xl bg-transparent"
          }
        >
          <input
            className="w-full h-full pl-16 pr-16 text-white font-[600] text-lg leading-6 placeholder:text-white placeholder:font-[700] placeholder:text-lg focus:outline-0 focus:border-0 bg-transparent"
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
            autoComplete="off"
            placeholder="Username or E-mail"
            name="email"
          />
          <img className="absolute left-4 w-9 h-9" src={userSVG} alt="user" />
        </div>

        <div
          className={
            (props.isUnauthorized ? "border-red-500" : "border-white") +
            " relative flex items-center w-full h-12 border-[1px] rounded-xl bg-transparent"
          }
        >
          <input
            className="w-full h-full pl-16 pr-16 text-white font-[600] text-lg leading-6 placeholder:text-white placeholder:font-[700] placeholder:text-lg focus:outline-0 focus:border-0 bg-transparent"
            type="password"
            required
            autoComplete="off"
            placeholder="Password"
            name="password"
          />
          <img className="absolute left-4 w-9 h-9" src={keySVG} alt="key" />
        </div>
      </div>

      <div className="w-[22rem] sm:w-[27rem] h-full row-span-1 flex items-end justify-around">
        <button className="w-full h-12 border-2 border-[#00FF29] rounded-2xl leading-[3rem] xl:leading-6">
          <h1 className="text-[#00FF29] font-[600] text-lg">Login</h1>
        </button>
      </div>
    </form>
  );
};
export default LoginForm;
