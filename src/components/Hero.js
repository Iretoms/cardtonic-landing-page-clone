import React from 'react';
import styled from 'styled-components';
import heroImage from '../Assets/svgs/firstHomeImage.svg'
import googlePlay from '../Assets/svgs/googleplay.svg'
import appleStore from "../Assets/svgs/appstore.svg";
import giftLine from "../Assets/svgs/sellLine.svg"
import trusted from "../Assets/svgs/trustedIcon.svg"
import cross from "../Assets/svgs/crossPlatformIcon.svg";
import bell from "../Assets/svgs/payment.svg"

const Hero = () => {
    return (
      <HeroSection>
        <Container>
          <HeroText>
            <h1>
              sell{" "}
              <span>
                gift cards <img src={giftLine} alt="giftline" />
              </span>{" "}
              & earn rewards💰
            </h1>
            <p>
              Exchange unused gift cards for cash at
              <br /> amazing rates in split seconds.
            </p>
            <div className="button-container">
              <img src={googlePlay} alt="googleplay" />
              <img src={appleStore} alt="applestore" />
            </div>
          </HeroText>
          <HeroImage>
            <img src={heroImage} alt="heroImage" />
          </HeroImage>
        </Container>
        <Cards>
          <Card id='colored'>
            <img src={bell} alt="instant" />
            <h4>Instant Payment</h4>
            <p>
              Using state-of-the-art payment procedures, you are guaranteed to
              get your payment sent to your account within minutes.
            </p>
          </Card>
          <Card>
            <img src={cross} alt="instant" />
            <h4>Cross-Platform Availability</h4>
            <p>
              Sell any gift card anywhere, anytime, using our modern gift card 
              trading application available on Andriod, iOS and web browser.
            </p>
          </Card>
          <Card>
            <img src={trusted} alt="instant" />
            <h4>Trusted and Secure</h4>
            <p>
              Trade with high confidence, as we assure you the highest level of
              encryption and professionally audited exchange system.
            </p>
          </Card>
        </Cards>
        <Button>
            <button> Register Now</button>
        </Button>
      </HeroSection>
    );
};

const HeroSection = styled.section`
background-color: #fff;
width: 100%;
min-height: 100vh;
overflow-x: hidden;
`
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  min-height: 75vh;
  padding-top: 2rem;

  @media screen and (max-width: 1030px) {
    width: 90%;
  }

  @media screen and (max-width: 875px) {
    flex-direction: column;
    text-align: center;
    padding-top: 2rem;
  }
`;

const HeroText = styled.article`
  display: flex;
  flex-direction: column;
  width: 50%;
  h1 {
    position: relative;
    text-transform: capitalize;
    color: #002444;
    font-size: 3.5rem;
    span {
      color: #1b507e;
      position: relative;
      img {
        position: absolute;
        right: 0;
        bottom: -0.8rem;
      }
    }
    &::before {
      content: "";
      background-color: #f8f8f8;
      height: 6.5rem;
      width: 6.5rem;
      border-radius: 50%;
      z-index: -1;
      position: absolute;
      left: -2.5rem;
      top: -1.5rem;
    }
  }

  p {
    color: #002444;
    font-size: 1.5rem;
    margin: 1.3rem 0;
    font-weight: 200;
  }

  div {
    margin-top: 1rem;
    img {
      margin-right: 0.7rem;
    }
  }

  @media screen and (max-width: 920px) {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 875px) {
    width: 90%;
    img {
      width: 14rem;
    }
    div {
      img {
        width: 12rem;
        margin-bottom: 1rem;
      }
    }
  }

  @media screen and (max-width: 580px) {
    h1 {
      font-size: 2.6rem;
    }
  }
`;

const HeroImage = styled.article`
  width: 50%;
  img {
    width: 100%;
    height: 33rem;
  }

  @media screen and (max-width: 875px) {
    width: 100%;
    padding-top: 1.5rem;
  }
`;

const Cards = styled.div`
  width: 80%;
  margin: 3rem auto 0;
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 875px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  width: 14rem;
  height: 15rem;
  box-shadow: rgba(0, 0, 0, 0.05) 10px 24px 54px 0px;
  border-radius: 20px;
  padding: 1rem;
  position: relative;
  transition: all 1s ease;
  overflow: hidden;
  h4 {
    margin-top: 0.8rem;
    color: #0a2b43;
    transition: all 0.7s ease;
  }

  p {
    color: #79869f;
    font-size: 0.8rem;
    margin-top: 0.8rem;
    line-height: 18px;
  }

  &:hover {
    background-color: #002444;
    h4 {
      color: #fff;
    }
  }

  &::before {
    content: "";
    width: 7rem;
    height: 7rem;
    background-color: rgba(240, 240, 240, 0.1);
    position: absolute;
    right: 11px;
    border-radius: 50%;
    transform: rotate(-45deg) translateX(7rem);
    transition: transform 1s ease;
  }

  &::after {
    content: "";
    width: 6rem;
    height: 6rem;
    background-color: rgba(240, 240, 240, 0.2);
    position: absolute;
    left: -4rem;
    bottom: -4rem;
    border-radius: 50%;
    transform: rotate(-45deg) translateX(0rem);
    transition: transform 0.5s ease;
  }

  &:hover::before {
    transform: rotate(-45deg) translateX(3rem);
  }

  &:hover::after {
    transform: rotate(-45deg) translateX(4rem);
  }

  &#colored {
    background-color: #002444;
    h4 {
      color: #fff;
    }
  }

  &#colored:hover {
    background-color: #fff;
    h4 {
      color: #0a2b43;
    }
  }

  @media screen and (max-width: 875px) {
    width: 20rem;
  }
`;

const Button = styled.div`
  width: 80%;
  margin: 4rem auto ;
  text-align: center;
  button {
    height: 3.5rem;
    width: 10rem;
    font-family: inherit;
    border: none;
    border-radius: 16px;
    background-color: #f0f0f0;
    color: #0a2b43;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
  }
`;

export default Hero;