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
    background-color: ${(p) => p.theme.colors.secondaryGreen};
    margin: 1rem 0;
    padding: 0.5rem;
    color: ${(p) => p.theme.colors.primaryWhite};
    font-weight: ${(p) => p.theme.h1.fontWeight};
    font-family: Roboto, sans-serif;
`;

const cardProps = {
    title: 'Retro Actions',
    body: (
        <List>
            <ListItem>Improve communications between team members</ListItem>
            <ListItem>Follow meeting timeboxes strictly</ListItem>
            <ListItem>Refactor database system</ListItem>
        </List>
    ),
    style: {
        wrapperStyle: {
            border: 'solid 3px',
            borderColor: theme.colors.secondaryGreen
        },
        titleStyle: {
            height: '100%',
            borderBottom: 'solid 3px',
            borderColor: theme.colors.secondaryGreen,
            color: theme.colors.secondaryGreen
        }
    }
};

const RetroActionsCard = ({ openModal }) => {
    const details = { id: 0, color: theme.colors.secondaryGreen };

    return <InfoBox card={cardProps} action={() => openModal(details)} />;
};

export default RetroActionsCard;
