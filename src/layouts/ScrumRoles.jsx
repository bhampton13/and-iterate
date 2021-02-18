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

const BoxSubtitle = styled.p`
    color: ${p => p.theme.colors.primaryDarkGrey}; 
    font-weight: ${p => p.theme.h1.fontWeight};
    font-family: Roboto, sans-serif;
    font-style: italic;
    padding: 0;
    margin: 0;
    font-size: 1em;
` ;

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

const scrumMasterProps ={
    title: "Scrum Master",
    body: <BoxContentWrapper>     
        <BoxSubtitle>Serves the Scrum Team by:</BoxSubtitle>
        <List>
            <ListItem>Coaching the team in self-management and cross-functionality</ListItem>
            <ListItem>Helping the team focus on high value increments that meet the Definition of Done</ListItem>
            <ListItem>Removing impediments to the team’s progress</ListItem>
            <ListItem>Ensure all Scrum events take place within the timebox and are positive and productive</ListItem>
        </List>
        <br/>
        <BoxSubtitle> Serves the Product Owner by:</BoxSubtitle>
        <List>
            <ListItem>Helping to find techniques for effective Product Goal definition and Product Backlog management</ListItem>
            <ListItem>Facilitating stakeholder collaboration as requested or needed</ListItem>
            <ListItem>Helping establish empirical product planning for a complex environment</ListItem>
        </List>
        <br/>
        <BoxSubtitle>Serves the Organisation by:</BoxSubtitle>
        <List>
            <ListItem>Leading, training and coaching the organisation in its Scrum adoption</ListItem>
            <ListItem>Planning and advising Scrum implementations within the organisation</ListItem>
            <ListItem>Helping employees and stakeholders understand and enact an empirical approach for complex work</ListItem>
            <ListItem>Removing barriers between stakeholders and Scrum teams</ListItem>
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

const productOwnerProps ={
    title: "Product Owner",
    body: <BoxContentWrapper> 
        <BoxSubtitle>Accountable for:</BoxSubtitle>
        <List>
            <ListItem>Maximising the value of the product from the work of the Scrum Team</ListItem>
            <ListItem>Developing and communicating the Product Goal</ListItem>
            <ListItem>Creating and clearly communicating Product Backlog items</ListItem>
            <ListItem>Ordering Product Backlog items</ListItem>
            <ListItem>Ensuring the Product Backlog is transparent, visible and understood</ListItem>
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

const developerProps ={
    title: "Developers",
    body: <BoxContentWrapper> 
        <BoxSubtitle>Accountable for:</BoxSubtitle>
        <List>
            <ListItem>Creating a plan for the Sprint</ListItem>
            <ListItem>Adhering to a Definition of Done to instill quality</ListItem>
            <ListItem>Adapting their plan towards a Sprint Goal each day</ListItem>
            <ListItem>Holding each other accountable</ListItem>
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

const ScrumRoles = (props) => {

    return <SectionWrapper>
        <Heading>Who is on a scrum team?</Heading>
        <BoxWrapper>
            <InfoBoxWithoutLink {...scrumMasterProps}/>
            <InfoBoxWithoutLink {...productOwnerProps}/>
            <InfoBoxWithoutLink {...developerProps}/>
        </BoxWrapper>
    </SectionWrapper>
}

export default ScrumRoles;
