import React from 'react';
import styled from 'styled-components';
import Line from "../Assets/svgs/underMark.svg";


const Offer = () => {
    return (
      <OfferSection>
        <div>
          <OfferHead>
            <h1>
              <span>we say 'No' <img src={Line} alt="line"/></span> <br/>to gift card wastage!
            </h1>
          </OfferHead>
          <OfferLine></OfferLine>
          <OfferInfo>
            <p>
              About $3 billion worth of gift cards were unused last year. This
              means a lot of people get hold of gift cards they never need or
              never use up the balance of a gift card, which is wasteful. Until
              recently, that was a major problem, which is where Cardtonic steps
              in as a knight in shining armor.
            </p>
            <p>
              Cardtonic also allows users to
              <b> sell gift cards in Ghana</b> and Nigeria with instant
              payment settlement. With this innovative provision, gift cards
              will never go to waste, even when they cannot be used in certain
              areas of the world, they can be sold at the best possible gift
              card rates.
            </p>
            <p>
              With Cardtonic, you can trade gift cards including but not limited
              to iTunes, Amazon, Steam Wallet, Google Play, Apple Store, eBay,
              Walmart, Sephora, OneVanilla, Nordstrom, Target, JCPenney, Best
              Buy, Nike, Hotels.com, Macy's, Gamestop, Xbox,Vanilla, G2A,
              American Express (AMEX), OffGamers, Foot Locker,Visa, Play Station
              and others.
            </p>
          </OfferInfo>
        </div>
      </OfferSection>
    );
};


const OfferSection = styled.section`
min-height: 100vh;
background-color: #00cede;
padding-top: 6rem;
div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 25rem;
    width: 80%;
    margin: 0 auto;
}
`

const OfferHead = styled.article`
width: 21.5rem;
h1 {
    font-size: 3.5rem;
    text-transform: capitalize;
    color: #fff;
    span {
        color: #1b507e;
        position: relative;
        img {
            position: absolute;
            width: 15rem;
            height:1rem;
            bottom: -1rem;
            left:2rem;
        }
    }
}
`

const OfferLine = styled.article`
width: 1px;
height: 11.5rem;
background-color: #002444;
`;

const OfferInfo = styled.article`
width:24.5rem;
p {
    color: #1b507e;
    margin-bottom: 1.5rem;
}
`;





export default Offer;