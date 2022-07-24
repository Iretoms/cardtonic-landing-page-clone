import React from "react";
import styled from "styled-components";

const CarouselContent = ({ heading, details, bottomImage }) => {
  return (
    <Card>
      <h3>{heading}</h3>
      <p>{details}</p>
      <img className="bottomImg" src={bottomImage} alt={heading} />
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  position: relative;
  height: 330px;
  h3 {
    align-items: center;
    color: #1b507e;
    font-size: 24px;
    font-weight: 900;
  }
  p {
    color: #79869f;
  font-size: 16px;
  font-weight: 400;
  align-items: center;
  width:364px;
  height: 64.2px;
  margin-bottom: 0.5rem;
  }
`;

export default CarouselContent;
