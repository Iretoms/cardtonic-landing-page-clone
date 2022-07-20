import React from 'react';
import styled from 'styled-components';
import heroImage from '../Assets/svgs/firstHomeImage.svg'
import googlePlay from '../Assets/svgs/googleplay.svg'
import appleStore from "../Assets/svgs/appstore.svg";
import giftLine from "../Assets/svgs/sellLine.svg"

const Hero = () => {
    return (
      <HeroSection>
        <Container>
          <HeroText>
            <h1>
              sell <span>gift cards <img src={giftLine} alt="giftline"/></span> & <br/> earn rewards💰
            </h1>
            <p>
              Exchange unused gift cards for cash at<br/> amazing rates in split
              seconds.
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
      </HeroSection>
    );
};

const HeroSection = styled.section`
width: 100%;
min-height: 100vh;
padding-top: 2vh;
`
const Container = styled.div`
width: 80%;
margin: 0 auto;
display: flex;
align-items: center;
height: 75vh;
`

const HeroText = styled.article`
display: flex;
flex-direction: column;
width: 50%;
h1 {
    position: relative;
    text-transform: capitalize;
    color:#002444;
    font-size: 3.5rem;
    font-weight: 900;
    span {
        color:#1b507e;
        position: relative;
        img {
            position: absolute;
            right: 0;
            bottom: -0.8rem;
        }
    }

    &::before {
        content: '';
        background-color: #f8f8f8;
        height: 6.5rem;
        width: 6.5rem;
        border-radius: 50%;
        z-index: -1;
        position: absolute;
        left: -2.5rem;
        top:-1.5rem;
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
`

const HeroImage = styled.article`
width: 50%;
img {
    width: 100%;
    height: 33rem;
}
`

export default Hero;