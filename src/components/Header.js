import { useState } from "react";
import styled from "styled-components";
import Logo from "../Assets/svgs/cardtonicLogo.svg";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);

  const menuClick = () => {
    setIsOpen(!isOpen);
  };

  const customerHandler = () => {
    setOpenOne(!openOne);
    setOpenTwo(false);
    setOpenThree(false);
  };

  const businessHandler = () => {
    setOpenOne(false);
    setOpenTwo(!openTwo);
    setOpenThree(false);
  };

  const getStartedHandler = () => {
    setOpenOne(false);
    setOpenTwo(false);
    setOpenThree(!openThree);
  };

  return (
    <MainHeader>
      <Nav>
        <div className="navlogo">
          <img src={Logo} alt="logo" />
        </div>
        <NavList>
          <li>Upskill</li>
          <li
            className={openOne ? "dropdown show" : "dropdown"}
            onClick={customerHandler}
          >
            <div>
              <p>Customers</p>
              <FaAngleDown />
            </div>
            <ul>
              <li>Users Rewards</li>
              <li>Gift Card Rates</li>
              <li>Contact Us</li>
            </ul>
          </li>
          <li
            className={openTwo ? "dropdown show" : "dropdown"}
            onClick={businessHandler}
          >
            <div>
              <p>Business</p>
              <FaAngleDown />
            </div>
            <ul>
              <li>Become A Partner</li>
              <li>#CTGivesBack</li>
              <li>Work With Us</li>
            </ul>
          </li>
          <li
            className={openThree ? "dropdown show" : "dropdown"}
            onClick={getStartedHandler}
          >
            <div className="get-started">
              <p>Get Started</p>
              <FaAngleDown />
            </div>
            <ul>
              <li>On the Web</li>
              <li>On Andriod</li>
              <li>On iOS</li>
            </ul>
          </li>
        </NavList>
        <button onClick={menuClick}>{isOpen ? <FaTimes /> : <FaBars />}</button>
        <AnimatePresence>{isOpen && <MobileNav />}</AnimatePresence>
      </Nav>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  background-color: #fff;
  width: 100vw;
`;

const Nav = styled.nav`
  width: 85%;
  margin: 0 auto;
  height: 15vh;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  position: relative;
  button {
    display: none;
    height: 3.3rem;
    width: 3.3rem;
    border: none;
    border-radius: 50%;
    background-color: #cffcff;
    color: #002444;
    font-size: 1.3rem;
    cursor: pointer;
    position: absolute;
    right: 0;
    z-index: 50;
  }

  @media screen and (max-width: 900px) {
    button {
      display: block;
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  li {
    font-weight: 600;
    font-size: 0.9rem;
    margin-left: 3rem;
    cursor: pointer;
  }
  .get-started {
    background-color: #ffeaca;
    padding: 1rem 2rem;
    border-radius: 10px;
    p {
      font-size: 1rem;
    }
  }

  .dropdown {
    position: relative;
    div {
      display: flex;
      align-items: center;
      p {
        margin-right: 0.5rem;
      }
      svg {
        transform: rotate(0);
        transition: transform 0.3s linear;
      }
    }
    ul {
      border-radius: 20px;
      min-width: 10rem;
      height: 10rem;
      display: none;
      position: absolute;
      top: 3rem;
      right: -3rem;
      background-color: #fff;
      padding: 1.5rem;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 20px 0px;
      li {
        color: #335069;
        font-size: 0.9rem;
        font-weight: 600;
        margin: 0;
      }
    }
    &.show {
      div {
        svg {
          transform: rotate(180deg);
        }
      }
      ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export default Header;
