import React from 'react';
import styled from 'styled-components';

import azcentral from "../Assets/svgs/azcentral.svg"
import digital from "../Assets/svgs/digital.svg";
import marketWatch from "../Assets/svgs/marketWatch.svg";
import punch from "../Assets/svgs/punch.svg";
import techpoint from "../Assets/svgs/techpoint.svg";
import vanguard from "../Assets/svgs/vanguard.svg";
import Line from "../Assets/svgs/underMark.svg";


const News = () => {
    return (
      <NewsSection>
        <Container>
          <TheNews>
            <p>
              As a demonstration of our quality service and awesome impression,
              we have been published by some platforms across Nigeria, Ghana and
              beyond.
            </p>
            <div className="line"></div>
            <h1>
              <span>
                Cardtonic
                <img src={Line} alt="line" />
              </span>{" "}
              in the news
            </h1>
          </TheNews>
          <Platforms>
            <img src={vanguard} alt="vanguard" />
            <img src={azcentral} alt="azcentral" />
            <img src={punch} alt="punch" />
            <img src={marketWatch} alt="marketWatch" />
            <img src={digital} alt="digital" />
            <img src={techpoint} alt="techpoint" />
          </Platforms>
          <BigLine></BigLine>
          <GiveAway>
            <p>Follow our ongoing Upskill #CardtonicMacbookGiveaway program</p>
          </GiveAway>
        </Container>
      </NewsSection>
    );
};

const NewsSection = styled.section`
min-height: 80vh;
background-color: #f8f8f8;
`

const Container = styled.div`
width: 80%;
margin: 0 auto;
padding: 6rem 0 4rem;
`

const TheNews = styled.article`
display: flex;
justify-content: space-between;
align-items: center;
p {
    width: 24rem;
    color: #1b507e;
}
.line {
    width: 1px;
    height: 6rem;
    background-color: #000;
}
h1 {
    width: 24rem;
    font-size: 3.5rem;
    color: #1b507e;
    span {
        position: relative;
        img {
            width: 16rem;
            position: absolute;
            left: 0;
            bottom: -0.8rem;
        }
    }
}
`

const Platforms = styled.article`
margin: 7rem 0 3rem;
display: flex;
justify-content: space-between;
align-items: center;
img {
    transform: scale(1);
    transition: transform 0.5s ease;
    &:hover {
        transform: scale(1.1);
    }
}
`

const BigLine = styled.article`
width: 100%;
height: 1px;
background-color: #d8d8d8;
`

const GiveAway = styled.article`
text-align: center;
margin-top: 2rem;
p {
    color: #00cede;
}
`

export default News;