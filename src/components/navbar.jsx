import {  useNavigate, NavLink } from "react-router";
import { ColorContext } from "../provider/colorProvider";
import { useContext } from "react";

export const Navbar = () => {
  const navigate = useNavigate();
  const { state } = useContext(ColorContext);
  return (
    <div className="sticky top-0 left-0 right-0 z-50 border-b navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><NavLink to="/getapi" className={({isActive}) => (isActive && state) ? "bg-primary text-white" : isActive && "bg-black text-white"}>Get Api</NavLink></li>
            <li><NavLink to="/kalkulator" className={({isActive}) => (isActive && state) ? "bg-primary text-white" : isActive && "bg-black text-white"}>kalkulator</NavLink></li>
            <li><NavLink to="/" className={({isActive}) => (isActive && state) ? "bg-primary text-white" : isActive && "bg-black text-white"}>LinkTree</NavLink></li>
            {/* <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li> */}
          </ul>
        </div>
        <a className="text-xl btn btn-ghost">daisyUI</a>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">
          <li><NavLink to="/getapi" className={({isActive}) => (isActive && state) ? "bg-primary text-white" : isActive && "bg-black text-white"}>Get Api</NavLink></li>
          <li><NavLink to="/kalkulator" className={({isActive}) => (isActive && state) ? "bg-primary text-white" : isActive && "bg-black text-white"}>kalkulator</NavLink></li>
          <li><NavLink to="/" className={({isActive}) => (isActive && state) ? "bg-primary text-white" : isActive && "bg-black text-white"}>LinkTree</NavLink></li>
          {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li> */}
        </ul>
      </div>
      <div className="navbar-end">
        <button className={`btn`} onClick={() => navigate("/")}>Home</button>
      </div>
    </div>
  )
}