import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <ul>
        <Link to="/">Home</Link>
      </ul>
      <ul>
        <Link to="reactCounterApp">React Counter App</Link>
      </ul>
      <Outlet />
    </>
  );
};

export default Home;
