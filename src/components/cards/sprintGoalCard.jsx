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
    background-color: ${(p) => p.theme.colors.primaryBlue};
    margin: 1rem 0;
    padding: 0.5rem;
    color: ${(p) => p.theme.colors.primaryWhite};
    font-weight: ${(p) => p.theme.h1.fontWeight};
    font-family: Roboto, sans-serif;
`;

const cardProps = {
    title: 'Sprint Goals',
    body: (
        <List>
            <ListItem>Deliver MVP</ListItem>
            <ListItem>Set up database</ListItem>
        </List>
    ),
    style: {
        wrapperStyle: {
            border: 'solid 3px',
            borderColor: theme.colors.primaryBlue
        },
        titleStyle: {
            height: '100%',
            borderBottom: 'solid 3px',
            borderColor: theme.colors.primaryBlue,
            color: theme.colors.primaryBlue
        }
    },
    linkName: 'Sprint goal',
    link: 'www.google.com'
};

const SprintGoalCard = (props) => {
    return <InfoBox {...cardProps} />;
};

export default SprintGoalCard;
