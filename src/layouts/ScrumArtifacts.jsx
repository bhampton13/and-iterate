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

const BoxSubtitle = styled.p`
    color: ${(p) => p.theme.colors.primaryDarkGrey};
    font-weight: ${(p) => p.theme.h1.fontWeight};
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
    color: ${(p) => p.theme.colors.primaryDarkGrey};
    font-family: Roboto, sans-serif;
    font-size: 1em;
`;

const productBacklogProps = {
    title: 'Product Backlog',
    body: (
        <BoxContentWrapper>
            <BoxSubtitle>What is it?</BoxSubtitle>
            <List>
                <ListItem>Owned by the Product Owner</ListItem>
                <ListItem>
                    Lists all features, functions, requirements and fixes which
                    require changes to be made to the product in future releases
                </ListItem>
                <ListItem>
                    Each item have a description, order and estimate
                </ListItem>
                <ListItem>
                    Items are ranked in order of priority, with items further
                    down the list less refined than those at the top
                </ListItem>
                <ListItem>
                    Multiple teams can work from a single backlog
                </ListItem>
            </List>
        </BoxContentWrapper>
    ),
    style: {
        wrapperStyle: {
            border: 'solid 5px',
            borderColor: theme.colors.primaryRed
        },
        titleStyle: {
            backgroundColor: theme.colors.primaryWhite,
            color: theme.colors.primaryRed
        }
    }
};

const productGoalProps = {
    title: 'Product Goal',
    body: (
        <BoxContentWrapper>
            <BoxSubtitle>What is it?</BoxSubtitle>
            <List>
                <ListItem>Is the commitment to the Product Backlog</ListItem>
                <ListItem>
                    Describes a future state of the product which acts as a
                    target for the team to plan against
                </ListItem>
                <ListItem>
                    Is a long term objective, focussing on one goal before the
                    next
                </ListItem>
                <ListItem>
                    Is owned by the Product Owner but determined by the Product
                    Owner and Scrum Team
                </ListItem>
            </List>
        </BoxContentWrapper>
    ),
    style: {
        wrapperStyle: {
            border: 'solid 5px',
            borderColor: theme.colors.secondaryOrange
        },
        titleStyle: {
            backgroundColor: theme.colors.primaryWhite,
            color: theme.colors.secondaryOrange
        }
    }
};

const sprintBacklogProps = {
    title: 'Sprint Backlog',
    body: (
        <BoxContentWrapper>
            <BoxSubtitle>What is it?</BoxSubtitle>
            <List>
                <ListItem>
                    Owned by the entire Development Team, even though each item
                    may be worked on by one developer
                </ListItem>
                <ListItem>
                    Is a clear log of what work is needed to be completed during
                    the Sprint to meet the Sprint Goal
                </ListItem>
            </List>
        </BoxContentWrapper>
    ),
    style: {
        wrapperStyle: {
            border: 'solid 5px',
            borderColor: theme.colors.secondaryYellow
        },
        titleStyle: {
            backgroundColor: theme.colors.primaryWhite,
            color: theme.colors.secondaryYellow
        }
    }
};

const sprintGoalProps = {
    title: 'Sprint Goal',
    body: (
        <BoxContentWrapper>
            <BoxSubtitle>What is it?</BoxSubtitle>
            <List>
                <ListItem>
                    Is a business objective set during planning to provide focus
                </ListItem>
                <ListItem>The commitment to the Sprint Backlog</ListItem>
                <ListItem>Can be formed either bottom up or top down</ListItem>
                <ListItem>
                    Goals are SMART (Specific, Measurable, Achievable, Relevant
                    and Time Limited)
                </ListItem>
            </List>
        </BoxContentWrapper>
    ),
    style: {
        wrapperStyle: {
            border: 'solid 5px',
            borderColor: theme.colors.secondaryGreen
        },
        titleStyle: {
            backgroundColor: theme.colors.primaryWhite,
            color: theme.colors.secondaryGreen
        }
    }
};

const DoRProps = {
    title: 'Definition of Ready',
    body: (
        <BoxContentWrapper>
            <BoxSubtitle>What is it?</BoxSubtitle>
            <List>
                <ListItem>
                    A working agreement between the team and Product Owner on
                    what readiness means
                </ListItem>
                <ListItem>
                    Ensures stories proposed for the Sprint have enough detail
                </ListItem>
                <ListItem>
                    A backlog item is only ‘Ready’ if it’s clear and if all team
                    members have a shared understanding of what it means
                </ListItem>
                <ListItem>
                    Not having a clearly defined DoR can lead to rework or waste
                </ListItem>
            </List>
        </BoxContentWrapper>
    ),
    style: {
        wrapperStyle: {
            border: 'solid 5px',
            borderColor: theme.colors.primaryBlue
        },
        titleStyle: {
            backgroundColor: theme.colors.primaryWhite,
            color: theme.colors.primaryBlue
        }
    }
};

const DoDProps = {
    title: 'Definition of Done',
    body: (
        <BoxContentWrapper>
            <BoxSubtitle>What is it?</BoxSubtitle>
            <List>
                <ListItem>The commitment to the increment</ListItem>
                <ListItem>
                    When the Sprint comes to an end the product should be in a
                    ‘Done’ state as defined by the DoD
                </ListItem>
                <ListItem>
                    Is agreed up-front to ensure all work required is included
                    in the estimates
                </ListItem>
                <ListItem>
                    The ‘Done’ increment should be potentially releasable and is
                    integrated with previous increments
                </ListItem>
            </List>
        </BoxContentWrapper>
    ),
    style: {
        wrapperStyle: {
            border: 'solid 5px',
            borderColor: theme.colors.secondaryPurple
        },
        titleStyle: {
            backgroundColor: theme.colors.primaryWhite,
            color: theme.colors.secondaryPurple
        }
    }
};

const productIncProps = {
    title: 'Shippable Product Increment',
    body: (
        <BoxContentWrapper>
            <BoxSubtitle>What is it?</BoxSubtitle>
            <List>
                <ListItem>The sum of all increments</ListItem>
            </List>
        </BoxContentWrapper>
    ),
    style: {
        wrapperStyle: {
            border: 'solid 5px',
            borderColor: theme.colors.secondaryPink
        },
        titleStyle: {
            backgroundColor: theme.colors.primaryWhite,
            color: theme.colors.secondaryPink
        }
    }
};

const ScrumArtifacts = (props) => {
    return (
        <SectionWrapper>
            <Heading>What are Scrum Artifacts?</Heading>
            <BoxWrapper>
                <InfoBoxWithoutLink {...productBacklogProps} />
                <InfoBoxWithoutLink {...productGoalProps} />
                <InfoBoxWithoutLink {...sprintBacklogProps} />
                <InfoBoxWithoutLink {...sprintGoalProps} />
            </BoxWrapper>
            <BoxWrapper>
                <InfoBoxWithoutLink {...DoRProps} />
                <InfoBoxWithoutLink {...DoDProps} />
                <InfoBoxWithoutLink {...productIncProps} />
            </BoxWrapper>
        </SectionWrapper>
    );
};

export default ScrumArtifacts;
