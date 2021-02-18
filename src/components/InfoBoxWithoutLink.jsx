import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  box-shadow: 0 4px 2px -1px #c1c1c1;
  border-radius: 20px;
  width: -webkit-fill-available;
  display: flex;
  margin: 0.25em;
  flex-direction: column;
  ${props => props};
  
`;

const TitleBox = styled.div`
  border-radius: 16px 16px 0 0;
  padding: 0 1rem;
  color: white;
  text-align: center;
  font-family: Poppins;
  ${p => p.theme.h1.fontWeight}
  ${props => props};
`;

const BodyBox = styled.div`
  ${props => props};
`;


const InfoBoxWithoutLink = (props) => {

  return (
    <Wrapper {...props.style.wrapperStyle}>
      <TitleBox {...props.style.titleStyle}> <h1>{props.title}</h1> </TitleBox>
      <BodyBox {...props.style.bodyStyle}> {props.body} </BodyBox>
    </Wrapper>
  );
}

export default InfoBoxWithoutLink;
