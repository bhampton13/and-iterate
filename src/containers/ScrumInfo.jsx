import React from 'react';
import styled, { withTheme } from 'styled-components';
import { Page } from '../components/Page';
import Sprints from '../layouts/Sprints';
import ScrumRoles from '../layouts/ScrumRoles';
import ScrumEvents from '../layouts/ScrumEvents';
import ScrumArtifacts from '../layouts/ScrumArtifacts';
import ScrumPillars from '../layouts/ScrumPillars';
import ScrumValues from '../layouts/ScrumValues';
import Definitions from '../layouts/Definitions';
import UsefulScrumLinks from '../layouts/UsefulScrumLinks';

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 1rem;
    min-height: -webkit-fill-available;
    width: 100%;
`;

const Title = styled.div`
    font-size: 4rem;
    color: ${(p) => p.theme.colors.primaryBlue};
    text-align: center;
    font-family: Poppins;
    font-weight: bold;
`;

const ScrumInfo = () => {
    return (
        <Page>
            <ContentWrapper>
                <Title>Scrum Hints & Tips</Title>
                <Sprints />
                <ScrumRoles />
                <ScrumEvents />
                <ScrumArtifacts />
                <ScrumPillars />
                <ScrumValues />
                <Definitions />
                <UsefulScrumLinks />
            </ContentWrapper>
        </Page>
    );
};

export default withTheme(ScrumInfo);
