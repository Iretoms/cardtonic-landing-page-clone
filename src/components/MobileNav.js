import React, {useState} from 'react';
import styled from "styled-components"
import { FaAngleDown } from "react-icons/fa";
import { motion } from 'framer-motion'

const MobileNav = () => {
const menuVarient = {
  initial: {
    x: -200,
  },
  final: {
    x: -200,
    X: 50,
    x: 0,
  },
  exit: {
    x: 0,
    x: 50,
    x: -200,
  },
};


  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);

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
      <Nav
        variants={menuVarient}
        initial="initial"
        animate="final"
        exit={{ x: [0, -130, 1000] }}
      >
        <div>
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
        </div>
      </Nav>
    );
};

const Nav = styled(motion.nav)`
height: 100vh;
width: 100vw;
background-color: #002444;
color: white;
display: flex;
align-items: center;
padding-left: 4rem;
position: fixed;
top: 0;
left: 0;
`

const NavList = styled.ul`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  li {
    font-size: 1.2rem;
  }

  .dropdown {
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
      display: none;
    }
    &.show {
      div {
        svg {
          transform: rotate(180deg);
        }
      }
      ul {
        margin-top: 1rem;
        padding-left: 0.7rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 15vh;
        li {
          font-size: 1rem;
        }
      }
    }
  }
`;

export default MobileNav;