import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function ArticlesNav() {
  //   return <Outlet context={Nav} />;
  return (
    <ul>
      <li>
        <Link to="/article/one">One</Link>
      </li>
      <li>
        <Link to="/article/two">Two</Link>
      </li>
      <li>
        <Link to="/article/three">Three</Link>
      </li>
    </ul>
  );
}

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/article/one">One</Link>
      </li>
      <li>
        <Link to="/article/two">Two</Link>
      </li>
      <li>
        <Link to="/article/three">Three</Link>
      </li>
    </ul>
  );
};
