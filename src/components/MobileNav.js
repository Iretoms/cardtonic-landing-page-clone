import React from 'react';
import styled from "styled-components"
import { FaAngleDown } from "react-icons/fa";

const MobileNav = () => {
    return (
      <nav>
        <div>
          <ul>
            <li>Upskill</li>
            <li className="dropdown">
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
            <li className="dropdown">
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
            <li className="dropdown">
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
          </ul>
        </div>
      </nav>
    );
};

export default MobileNav;