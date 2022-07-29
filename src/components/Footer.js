import React from "react";
import styled from "styled-components";

import appleStore from "../Assets/svgs/appstore.svg";
import googlePlay from "../Assets/svgs/footerGoogleBtn.svg";
import cardtonic from "../Assets/svgs/whiteLogo.svg";

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <Content>
          <Info>
            <img src={cardtonic} alt="logo" className="logo" />
            <p className="text">
              Bridging the gap between individuals who need liquid cash and
              businesses who need discounted gift cards as a payment
              alternative. Cardtonic is available for Web, iPhone, and Android
              users.
            </p>
            <div className="contact">
              <p>+234 (0) 1 343 0626</p>
              <p>+234 (0) 706 050 2770</p>
            </div>
            <div className="social">
              <p>support@cardtonic.com</p>
              <p>IG | FB | TW</p>
            </div>
            <div className="buttons">
              <img src={googlePlay} alt="googleplay" />
              <img src={appleStore} alt="applestore" />
            </div>
          </Info>
          <div className="line"></div>
          <List>
            <ul>
              <li className="head">For The Customer</li>
              <li>Download on Andriod</li>
              <li>Down on iPhone</li>
              <li>Get Reward points</li>
              <li>Taste The Tonic</li>
              <li>Check Our Rates</li>
              <li>Talk To Us</li>
              <li>Visit Help Center</li>
            </ul>

            <ul>
              <li className="head">For The Business</li>
              <li>Up Your Skill</li>
              <li>Become A Partner</li>
              <li>#CTGivesBack</li>
              <li>Work with us</li>
              <li>Read The Blog</li>
              <li>Read Our Terms</li>
              <li>Our Privacy Policy</li>
            </ul>
          </List>
        </Content>
        <Line></Line>
        <CopyRight>
            <p>&copy; 2022 Cardtonic. All Rights Reserved.</p>
        </CopyRight>
      </Container>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  min-height: 85vh;
  background-color: #000;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  color: #fff;
  padding: 2rem 0;

  @media screen and (max-width: 1030px) {
      width: 85%;
  }
`;

const Content = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .line {
    width: 1px;
    height: 12.5rem;
    background-color: #333333;
  }

  @media screen and (max-width: 875px) {
    flex-direction: column;
    .line {
      display: none;
    }
  }
`;

const Info = styled.div`
  width: 24rem;
  .logo {
    width: 13rem;
  }
  .text {
    margin-top: 1.5rem;
    font-size: 0.9rem;
  }
  .contact {
    font-size: 0.9rem;
    margin: 1rem 0;
  }
  .social {
    color: #00cede;
    margin-bottom: 2rem;
  }
  .buttons {
    img {
      margin-right: 0.5rem;
    }
  }

  @media screen and (max-width: 875px) {
    width: 100%;
    .text {
      padding-bottom: 1.5rem;
      border-bottom: 2px solid #333333;
    }
    .social {
      display: flex;
      justify-content: space-between;
    }
    .buttons {
      border-bottom: 2px solid #333333;
      padding-bottom: 1.5rem;
      img {
        width: 9rem;
      }
    }
  }
`;

const List = styled.div`
  width: 24rem;
  display: flex;
  justify-content: space-between;
  padding-top: 5rem;
  ul {
    li {
      margin-bottom: 1rem;
      font-size: 0.9rem;
    }
    .head {
      font-weight: bold;
    }
  }

  @media screen and (max-width: 875px) {
    flex-direction: column;
    width: 100%;
    padding-top: 1rem;

    ul {
      border-bottom: 2px solid #333333;
      padding: 1.5rem 0;
    }
  }
`;

const Line = styled.article`
  width: 100%;
  height: 1px;
  background-color: #333333;
  margin-top: 5rem;

  @media screen and (max-width: 875px) {
    display: none;
  }
`;

const CopyRight = styled.article`
text-align: center;
margin-top: 2rem;
`

export default Footer;
