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
  
`;

export default CarouselContent;
