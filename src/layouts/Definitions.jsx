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

const timeboxProps ={
    title: "Timebox",
    body: <BoxContentWrapper>
        <BoxSubtitle>What is it?</BoxSubtitle> 
        <List>
            <ListItem>The maximum amount of time for an activity to take place</ListItem>
            <ListItem>Keeps teams focused on accomplishing the task within the set amount of time</ListItem>
        </List>
    </BoxContentWrapper>,    
    style:{
        wrapperStyle:{
            border: 'solid 5px',
            borderColor: theme.colors.primaryRed,
        },
        titleStyle:{
            backgroundColor: theme.colors.primaryWhite,
            color: theme.colors.primaryRed,
        }
    },
};

const burndownProps ={
    title: "Burndown Chart",
    body: <BoxContentWrapper> 
        <BoxSubtitle>What is it?</BoxSubtitle> 
        <List>
            <ListItem>A visual representation of the team’s progress</ListItem>  
            <ListItem>Plots the work committed vs the work delivered during a Sprint</ListItem>  
            <ListItem>Updated every day to help ensure that the team is focused on meeting the Sprint Goal</ListItem>  
        </List>
    </BoxContentWrapper>,    
    style:{
        wrapperStyle:{
            border: 'solid 5px',
            borderColor: theme.colors.secondaryOrange,
        },
        titleStyle:{
            backgroundColor: theme.colors.primaryWhite,
            color: theme.colors.secondaryOrange,
        }
    },
};

const mvpProps ={
    title: "Minimum Viable Product",
    body: <BoxContentWrapper> 
        <BoxSubtitle>What is it?</BoxSubtitle> 
        <List>
            <ListItem>A version of a new product which allows a team to collect the maximum amount of validated learning about customers with the least effort</ListItem>
            <ListItem>Allows you to test an idea by exposing an early version of the product to target users</ListItem>
            <ListItem>Can be viewed as a risk reduction tool</ListItem>    
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

const userStoriesProps ={
    title: "User Stories",
    body: <BoxContentWrapper> 
        <BoxSubtitle>What is it?</BoxSubtitle> 
        <List>
            <ListItem>A way to communicate and manage user requirements</ListItem>
            <ListItem>Describe a feature and express the value of that feature</ListItem>
            <ListItem>A placeholder for further discussion, shifting the focus from writing about requirements to discussing them</ListItem>
            <ListItem>Helps teams consider the perspective of the users of the software</ListItem>
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

const estimatingProps ={
    title: "Estimating",
    body: <BoxContentWrapper> 
        <BoxSubtitle>What is it?</BoxSubtitle> 
        <List>
            <ListItem>A collaborative process where the whole team participates</ListItem>
            <ListItem>Estimates are usually provided in relative values and are based on what’s known</ListItem>
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

const Definitions = (props) => {

    return <SectionWrapper>
        <Heading>Useful Information/Definitions</Heading>
        <BoxWrapper>
            <InfoBoxWithoutLink {...timeboxProps}/>
            <InfoBoxWithoutLink {...burndownProps}/>
            <InfoBoxWithoutLink {...mvpProps}/>
            <InfoBoxWithoutLink {...userStoriesProps}/>
            <InfoBoxWithoutLink {...estimatingProps}/>
        </BoxWrapper>
    </SectionWrapper>
}

export default Definitions;
