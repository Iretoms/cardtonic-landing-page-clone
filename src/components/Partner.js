import React from 'react';
import styled from 'styled-components';
import partnerLine from "../Assets/svgs/sellLine.svg";
import partnerImage from "../Assets/svgs/partner.svg"
import mobilePartnerImage from "../Assets/svgs/partnerMobile.svg";

const Partner = () => {
    return (
      <PartnerSection>
        <Container>
          <Become>
            <p>
              Are you willing to fly into the global gift card buzz and
              <i> giftcardize</i> your business by taking advantage of these
              fast-rising niche? Then, you might be interested in our
              partnership program.
            </p>
            <div className="line"></div>
            <h1>
              Become{" "}
              <span>
                a Partner
                <img src={partnerLine} alt="partner line" />
              </span>
            </h1>
          </Become>
          <Image>
            <img src={partnerImage} alt="partner" className='desktop' />
            <img src={mobilePartnerImage} alt="partner" className="mobile"/>
          </Image>
          <Button>
            <button> Register Now</button>
            <p>Limited Selection Applies</p>
          </Button>
        </Container>
      </PartnerSection>
    );
};

const PartnerSection = styled.section`
width: 100%;
min-height: 100vh;
background-color: #eff8ff;
display: flex;
align-items: center;
`
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  @media screen and (max-width: 1030px) {
    width: 85%;
  }
`;
const Become = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    color: #002444;
    width: 21rem;
  }
  .line {
    width: 1px;
    height: 6rem;
    background-color: #000;
  }
  h1 {
    color: #002444;
    font-size: 3rem;
    width: 25rem;
    span {
      position: relative;
      img {
        position: absolute;
        bottom: -1rem;
        left: -2rem;
      }
    }
  }

  @media screen and (max-width: 875px) {
    flex-direction: column-reverse;
    text-align: center;
    h1 {
      font-size: 2.5rem;
      margin-bottom: 2.5rem;
      width: 100%;
      img {
        width: 14rem;
      }
    }
    p {
      width: 100%;
      margin-bottom: 1rem;
    }
    .line {
      display: none;
    }
  }
`;
const Image = styled.article`
  text-align: center;
  .mobile {
    display: none;
  }
  @media screen and (max-width: 875px) {
    margin-bottom: 1rem;
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
      margin: 0 auto;
      width: 20rem;
    }
  }
`;
const Button = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 1rem 0;
  text-align: center;
  button {
    height: 3.5rem;
    width: 10rem;
    font-family: inherit;
    border: none;
    border-radius: 16px;
    background-color: #1b507e;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
  }
  p {
    margin-top: 1rem;
    color: #ff0000;
    font-size: 0.7rem;
  }
`;


export default Partner;