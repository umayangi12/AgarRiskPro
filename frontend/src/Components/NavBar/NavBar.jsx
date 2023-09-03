import React, {useState} from "react";
import { ImLeaf } from "react-icons/im";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import "./navBar.scss";


const NavBar = () => {
const [activate, setActivate] = useState('navBar')

const showNav = () => {
    setActivate("navBar activeNavBar");
}
const removeNav = () => {
    setActivate("navBar");
}

const [transparent, setTransparent] = useState('header')
 const addBg = () => {
   if (window.scrollY >= 10) {
     setTransparent("header activeHeader");
   } else {
     setTransparent("header");
   }
 };

 window.addEventListener("scroll", addBg);


  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className="logoDiv">
          <a href="#" className="logo"></a>
          <h1 className="flex" style={{ color: "white" }}>
            <ImLeaf className="icon" style={{ color: "white" }} />
            AgarRiskPro®
          </h1>
        </div>
        <div className={activate}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Disease Detection
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Spreading Time Detection
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Severity Detection
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Remedy Detection
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                IOT
              </a>
            </li>

            <div className="headerBtns flex">
              <button className="btn loginBtn">
                <a href="">Login</a>
              </button>
              <button className="btn ">
                <a href="">Sign Up</a>
              </button>
            </div>
          </ul>
          <div onClick={removeNav} className="closeNavBar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavBar">
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
  );
};

export default NavBar;
