import React from "react";

const Home = (props) => {
  console.log(props.user);
  setTimeout(() => {
    window.alert("Greetings!");
  }, 500);
  return (
    <button
      onClick={() => {
        props.startLoading();
        props.logout();
      }}
      className="w-[22.5rem] h-[6rem] xlg:w-[45rem] xlg:h-[12rem] rounded-md bg-red-600 text-white font-[800] text-2xl xlg:text-4xl custom-shadow"
    >
      LOGOUT USER {props.user}
    </button>
  );
};
export default Home;
