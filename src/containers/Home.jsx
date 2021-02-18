import React from 'react'
import { media } from "../styles/theme"
import styled from "styled-components"
import TeamMembersInfoBox from "../components/TeamMembersInfoBox"
import EventBox from "../components/EventBox"
import { Page } from "../components/Page"
import SprintGoalCard from "../components/cards/sprintGoalCard";
import RetroActionsCard from '../components/cards/retroActionsCard';
import DodCard from '../components/cards/dodCard';
import DorCard from '../components/cards/dorCard';
import EventCard from "../components/cards/SprintEvent"
import EventCarousel from "../components/EventCarousel"

const LeftContainer = styled.div`
    width: 100%;

    ${media.tablet`
        width: 50%;
    `}
`;

const RightContainer = styled.div`
    width: 100%; 

    ${media.tablet`
        width: 50%;
        display: flex; 
        flex-direction: column;
    `}
`;

const Top = styled.div`
    display: flex;
    flex-direction: column;

    ${media.mobileLarge`
        flex-direction: row;
    `}
`;

const ContentWrapper = styled.div`
    display: flex; 
    flex-direction: column;
    margin: 0 auto;
    padding: 1rem;
    min-height: -webkit-fill-available;
    width: -webkit-fill-available;
`;

const BoxWrapper = styled.div`
    display: flex;
    flex-direction: column;

    ${media.mobileLarge`
        flex-direction: row;
    `} 
`;

const Title = styled.div`
    font-size: 4rem;
    color: ${p => p.theme.colors.primaryDarkGrey}; 
    font-family: Poppins;
    font-weight: bold;
    margin: 0 15px;
`;

const SprintNo = styled.h2`
    font-family: Poppins, sans-serif;
    color: ${p => p.theme.colors.primaryDarkGrey};
    font-size: 2em;
    margin: 0 15px;
`;

const Home = () => {

    //Create contents for the sprint goal info box

    return <Page>
        <ContentWrapper>
            <Title>Agile ANDi's</Title>
            <SprintNo>Sprint 1 (15/02/21 - 19/02/21)</SprintNo>
            <BoxWrapper>
                <LeftContainer>
                    <EventBox/>
                    <SprintGoalCard/>
                    <TeamMembersInfoBox/>
                </LeftContainer>
                <RightContainer>
                    <Top>
                        <DorCard />
                        <DodCard />
                    </Top>
                    <RetroActionsCard />
                </RightContainer>
            </BoxWrapper>
        </ContentWrapper>
    </Page>
}

export default Home;
