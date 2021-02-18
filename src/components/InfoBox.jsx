import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    ${(props) => props};
    box-shadow: 0 4px 2px -1px #c1c1c1;
    border-radius: 20px;
    margin: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    flex: 1;
    // height: fit-content;
`;

const TitleBox = styled.div`
    border-radius: 16px 16px 0 0;
    padding: 0 1rem;
    color: white;
    font-family: Poppins;
    ${(p) => p.theme.h1.fontWeight}
    ${(props) => props};
`;

const BodyBox = styled.div`
    ${(props) => props};
    padding-bottom: 2rem;
    border-radius: 0 0 1rem 1rem;
`;

const Linker = styled(Link)`
    padding: 0.25rem 0.75rem;
    text-decoration: none;
    background-color: #f1f1f1;
    border-radius: 100%;
    margin: 1rem 1rem 0;
    color: black;
    height: fit-content;
`;

const BottomContainer = styled.div`
    width: 100%;
    margin-top: 2rem;
    text-align: right;
`;

const InfoBox = (props) => {
    return (
        <Wrapper {...props.style.wrapperStyle}>
            <TitleBox {...props.style.titleStyle}>
                <h1>{props.title}</h1>
                {/* <Linker to={props.link} {...props.style.linkStyle}>
        ?
      </Linker> */}
            </TitleBox>
            <BodyBox {...props.style.bodyStyle}>
                {' '}
                {props.body}
                <BottomContainer>
                    <Linker to={props.link} {...props.style.linkStyle}>
                        ?
                    </Linker>
                </BottomContainer>
            </BodyBox>
        </Wrapper>
    );
};

export default InfoBox;
