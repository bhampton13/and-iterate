import React from 'react';
import styled from "styled-components";
import theme, { media } from '../styles/theme';
import InfoBoxWithoutLink from "../components/InfoBoxWithoutLink";

const SectionWrapper = styled.div`
    padding: 2em;
`;

const Heading = styled.h2`
    font-family: Poppins, sans-serif;
    color: ${p => p.theme.colors.primaryRed};
    font-size: 2em;
`;

const BoxWrapper = styled.div`
    display: flex;
    flex-direction: column;

    ${media.mobileLarge`
        flex-direction: row;
    `} 
`;

const BoxContentWrapper = styled.div`
    padding: 15px;
`;

const List = styled.ul`
    list-style: dash;
    padding: 0.25rem;
    margin: 0 1rem;
`;

const ListItem = styled.li`
    margin: 1rem 0;
    padding: 0;
    color: ${p => p.theme.colors.primaryDarkGrey};       
    font-family: Roboto, sans-serif;
    font-size: 1em;
`;

const transparencyProps ={
    title: "Transparency",
    body: <BoxContentWrapper>     
        <List>
            <ListItem>Making the significant aspects of the process visible to those who are responsible for the outcome</ListItem>
            <ListItem>No work should be completed ‘secretly’ without view of the team</ListItem>
            <ListItem>The Definition of Done should be clear and understood by those doing and accepting work</ListItem>
        </List>  
    </BoxContentWrapper>,
    style:{
        wrapperStyle:{
            border: 'solid 5px',
            borderColor: theme.colors.primaryBlue,
        },
        titleStyle:{
            backgroundColor: theme.colors.primaryWhite,
            color: theme.colors.primaryBlue,
        }
    },
};

const inspectionProps ={
    title: "Inspection",
    body: <BoxContentWrapper>
        <List>
            <ListItem>Timely checks on the progress towards the Sprint Goal to detect any undesired variances</ListItem>
            <ListItem>Frequent enough to detect issues, but not too frequent that it impacts the ability to deliver</ListItem>
            <ListItem>Done by the team doing the work</ListItem>
        </List>
    </BoxContentWrapper>,
    style:{
        wrapperStyle:{
            border: 'solid 5px',
            borderColor: theme.colors.secondaryGreen,
        },
        titleStyle:{
            backgroundColor: theme.colors.primaryWhite,
            color: theme.colors.secondaryGreen,
        }
    },
};

const adaptionProps ={
    title: "Adaption",
    body: <BoxContentWrapper> 
        <List>
            <ListItem>Adjusting a process as soon as possible to minimise any further issues or deviation from the goal</ListItem>
        </List>
    </BoxContentWrapper>,    
    style:{
        wrapperStyle:{
            border: 'solid 5px',
            borderColor: theme.colors.secondaryYellow,
        },
        titleStyle:{
            backgroundColor: theme.colors.primaryWhite,
            color: theme.colors.secondaryYellow,
        }
    },
};

const ScrumPillars = (props) => {

    return <SectionWrapper>
        <Heading>What are the Three Pillars of Scrum?</Heading>
        <BoxWrapper>
            <InfoBoxWithoutLink {...transparencyProps}/>
            <InfoBoxWithoutLink {...inspectionProps}/>
            <InfoBoxWithoutLink {...adaptionProps}/>
        </BoxWrapper>
    </SectionWrapper>
}

export default ScrumPillars;
