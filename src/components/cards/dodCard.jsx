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
    background-color: ${(p) => p.theme.colors.secondaryPink};
    margin: 1rem 0;
    padding: 0.5rem;
    color: ${(p) => p.theme.colors.primaryWhite};
    font-weight: ${(p) => p.theme.h1.fontWeight};
    font-family: Roboto, sans-serif;
`;

const cardProps = {
    title: 'Definition of Done',
    body: (
        <List>
            <ListItem>Code is peer reviewed</ListItem>
            <ListItem>Code has been tested</ListItem>
            <ListItem>End user documentation is ready</ListItem>
        </List>
    ),
    style: {
        wrapperStyle: {
            border: 'solid 3px',
            borderColor: theme.colors.secondaryPink
        },
        titleStyle: {
            height: '100%',
            borderBottom: 'solid 3px',
            borderColor: theme.colors.secondaryPink,
            color: theme.colors.secondaryPink
        }
    },
    linkName: 'Definition of Done',
    link: 'www.google.com'
};

const DodCard = (props) => {
    return <InfoBox {...cardProps} />;
};

export default DodCard;
