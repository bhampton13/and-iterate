import React from 'react';
import styled from 'styled-components';
import theme, { media } from '../styles/theme';
import InfoBoxWithoutLink from '../components/InfoBoxWithoutLink';

const SectionWrapper = styled.div`
    padding: 2em;
`;

const Heading = styled.h2`
    font-family: Poppins, sans-serif;
    color: ${(p) => p.theme.colors.primaryRed};
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

const BoxText = styled.p`
    margin: 1rem 0;
    padding: 0;
    color: ${(p) => p.theme.colors.primaryDarkGrey};
    font-family: Roboto, sans-serif;
    font-size: 1em;
    text-align: center;
`;

const courageProps = {
    title: 'Courage',
    body: (
        <BoxContentWrapper>
            <BoxText>
                The Scrum Team members have the courage to do the right thing
                and work on tough problems
            </BoxText>
        </BoxContentWrapper>
    ),
    style: {
        wrapperStyle: {
            border: 'solid  5px',
            borderColor: theme.colors.secondaryPink
        },
        titleStyle: {
            backgroundColor: theme.colors.primaryWhite,
            color: theme.colors.secondaryPink
        }
    }
};

const focusProps = {
    title: 'Focus',
    body: (
        <BoxContentWrapper>
            <BoxText>
                Everyone focuses on the the work of the Sprint and goals of the
                Scrum Team
            </BoxText>
        </BoxContentWrapper>
    ),
    style: {
        wrapperStyle: {
            border: 'solid  5px',
            borderColor: theme.colors.secondaryPurple
        },
        titleStyle: {
            backgroundColor: theme.colors.primaryWhite,
            color: theme.colors.secondaryPurple
        }
    }
};

const commitmentProps = {
    title: 'Commitment',
    body: (
        <BoxContentWrapper>
            <BoxText>
                People personally commit to achieving the goals set out
            </BoxText>
        </BoxContentWrapper>
    ),
    style: {
        wrapperStyle: {
            border: 'solid  5px',
            borderColor: theme.colors.secondaryYellow
        },
        titleStyle: {
            backgroundColor: theme.colors.primaryWhite,
            color: theme.colors.secondaryYellow
        }
    }
};

const respectProps = {
    title: 'Respect',
    body: (
        <BoxContentWrapper>
            <BoxText>
                All team members respect each other and trust that they are
                capable and independent
            </BoxText>
        </BoxContentWrapper>
    ),
    style: {
        wrapperStyle: {
            border: 'solid  5px',
            borderColor: theme.colors.secondaryOrange
        },
        titleStyle: {
            backgroundColor: theme.colors.primaryWhite,
            color: theme.colors.secondaryOrange
        }
    }
};

const openessProps = {
    title: 'Openess',
    body: (
        <BoxContentWrapper>
            <BoxText>
                The Scrum Team and its Stakeholders agree to be open about the
                work being completed and any challenges in completing the work
            </BoxText>
        </BoxContentWrapper>
    ),
    style: {
        wrapperStyle: {
            border: 'solid  5px',
            borderColor: theme.colors.secondaryGreen
        },
        titleStyle: {
            backgroundColor: theme.colors.primaryWhite,
            color: theme.colors.secondaryGreen
        }
    }
};

const ScrumValues = (props) => {
    return (
        <SectionWrapper>
            <Heading>What are the 5 values of Scrum?</Heading>
            <BoxWrapper>
                <InfoBoxWithoutLink {...courageProps} />
                <InfoBoxWithoutLink {...focusProps} />
                <InfoBoxWithoutLink {...commitmentProps} />
                <InfoBoxWithoutLink {...respectProps} />
                <InfoBoxWithoutLink {...openessProps} />
            </BoxWrapper>
        </SectionWrapper>
    );
};

export default ScrumValues;
