import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import InfoBox from '../InfoBox';

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 1rem;
`;

const ListItem = styled.li`
    background-color: ${(p) => p.theme.colors.secondaryOrange};
    margin: 1rem 0;
    padding: 0.5rem;
    color: ${(p) => p.theme.colors.primaryWhite};
    font-weight: ${(p) => p.theme.h1.fontWeight};
    font-family: Roboto, sans-serif;
`;

const cardProps = {
    title: 'Definition of Ready',
    body: (
        <List>
            <ListItem>
                The story should be written exactly in the ‘user story’ format
            </ListItem>
            <ListItem>
                Acceptance criteria must be understood by the team
            </ListItem>
            <ListItem>A Team needs to estimate the story</ListItem>
            <ListItem>
                The team should understand how to provide a demo of the features
            </ListItem>
            <ListItem>
                Performance criteria should be understood by the team
            </ListItem>
        </List>
    ),
    style: {
        wrapperStyle: {
            border: 'solid 3px',
            borderColor: theme.colors.secondaryOrange
        },
        titleStyle: {
            height: '100%',
            borderBottom: 'solid 3px',
            borderColor: theme.colors.secondaryOrange,
            color: theme.colors.secondaryOrange
        }
    },
    linkName: 'Definition of Ready',
    link: 'www.google.com'
};

const DorCard = (props) => {
    return <InfoBox {...cardProps} />;
};

export default DorCard;
