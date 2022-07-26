import React from "react";
import styled from "styled-components";

import googlePlay from "../Assets/svgs/googleplay.svg";
import appleStore from "../Assets/svgs/appstore.svg";
import phones from "../Assets/pngs/Trade.png";
import Line from "../Assets/svgs/underMark.svg";

const Download = () => {
  return (
    <DownloadSection>
      <Container>
        <Register>
          <div>
            <h1>
              <span>
                Download
                <img src={Line} alt="download" />
              </span>{" "}
              Cardtonic App
            </h1>
            <p>
              Experience the best of Cardtonic as you download our mobile
              application to your phone or tablet. Available for iOS and Android
              operating systems.
            </p>
            <Button>
              <button> Register Now</button>
            </Button>
          </div>
          <div className="line"></div>
          <div className="button-container">
            <img src={googlePlay} alt="googleplay" />
            <img src={appleStore} alt="applestore" />
          </div>
        </Register>
        <Image>
          <img src={phones} alt="phones" />
        </Image>
      </Container>
    </DownloadSection>
  );
};

const DownloadSection = styled.section`
  width: 100%;
  min-height: 90vh;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 4rem 0 0;
`;

const Register = styled.article`
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 3.5rem;
    color: #1b507e;
    width: 24rem;
    span {
      position: relative;
      img {
        width: 15rem;
        position: absolute;
        bottom: -0.5rem;
        left: 0.5rem;
      }
    }
  }
  p {
    width: 24rem;
    color: #1b507e;
    margin: 1.5rem 0;
  }
  .line {
    height: 6rem;
    width: 1px;
    background-color: #1b507e;
  }
  .button-container {
    width: 24rem;
    padding-left: 2rem;
    img {
      margin-right: 0.4rem;
    }
  }
`;
const Button = styled.div`
  button {
    height: 3.5rem;
    width: 10rem;
    font-family: inherit;
    border: none;
    border-radius: 16px;
    background-color: #ffeaca;
    color: #002444;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
  }
`;

const Image = styled.article`
text-align: right;
img {
  height: 17rem;
  vertical-align: bottom;
}
`;

export default Download;
