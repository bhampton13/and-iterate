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

const SectionText = styled.p`
    margin: 1rem 0;
    padding: 0;
    color: ${(p) => p.theme.colors.primaryDarkGrey};
    font-family: Roboto, sans-serif;
    font-size: 1em;
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

const planningProps = {
    title: 'Sprint Planning',
    body: (
        <BoxContentWrapper>
            <BoxSubtitle>Timebox:</BoxSubtitle>
            <List>
                <ListItem>
                    8 hours max (for shorter Sprints the full 8 hours may not be
                    necessary)
                </ListItem>
            </List>
            <br />
            <BoxSubtitle> Who’s involved?</BoxSubtitle>
            <List>
                <ListItem>Product Owner</ListItem>
                <ListItem>Scrum Master</ListItem>
                <ListItem>Developers</ListItem>
            </List>
            <br />
            <BoxSubtitle>When?</BoxSubtitle>
            <List>
                <ListItem>At the start of the Sprint</ListItem>
            </List>
            <br />
            <BoxSubtitle>What is it?</BoxSubtitle>
            <List>
                <ListItem>
                    Asks why the Sprint is valuable and defines a Sprint Goal
                </ListItem>
                <ListItem>
                    The Definition of Done, projected team capacity and past
                    team performance are all considered for what can be done in
                    the Sprint
                </ListItem>
                <ListItem>
                    Developers break down the Product Backlog and figure out how
                    to deliver them
                </ListItem>
                <ListItem>
                    Product Owner clarifies the scope, requirements, and makes
                    trade-offs
                </ListItem>
                <ListItem>
                    Scrum Master ensures it takes place and takes the correct
                    time
                </ListItem>
            </List>
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

const dailyProps = {
    title: 'Daily Scrum',
    body: (
        <BoxContentWrapper>
            <BoxSubtitle>Timebox:</BoxSubtitle>
            <List>
                <ListItem>15 Mins</ListItem>
            </List>
            <br />
            <BoxSubtitle> Who’s involved?</BoxSubtitle>
            <List>
                <ListItem>Scrum Master</ListItem>
                <ListItem>Developers</ListItem>
            </List>
            <br />
            <BoxSubtitle>When?</BoxSubtitle>
            <List>
                <ListItem>Daily at the same time, in same place</ListItem>
            </List>
            <br />
            <BoxSubtitle>What is it?</BoxSubtitle>
            <List>
                <ListItem>
                    Time to synchronise as a team and make plan for the next 24
                    hours in order to make progress towards the Sprint Goal
                </ListItem>
                <ListItem>
                    The work completed in the last 24 hours is reviewed - but
                    this is not a status meeting
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

const reviewProps = {
    title: 'Sprint Review',
    body: (
        <BoxContentWrapper>
            <BoxSubtitle>Timebox:</BoxSubtitle>
            <List>
                <ListItem>
                    4 hours maximum (for shorter Sprints the full 4 hours may
                    not be necessary)
                </ListItem>
            </List>
            <br />
            <BoxSubtitle> Who’s involved?</BoxSubtitle>
            <List>
                <ListItem>Product Owner</ListItem>
                <ListItem>Scrum Master</ListItem>
                <ListItem>Developers</ListItem>
                <ListItem>Stakeholders</ListItem>
            </List>
            <br />
            <BoxSubtitle>When?</BoxSubtitle>
            <List>
                <ListItem>
                    At the end of the Sprint, before Sprint Retro
                </ListItem>
            </List>
            <br />
            <BoxSubtitle>What is it?</BoxSubtitle>
            <List>
                <ListItem>A working product is demonstrated</ListItem>
                <ListItem>
                    The whole team works with the stakeholders to review the
                    ‘done’ increment
                </ListItem>
                <ListItem>
                    The team demonstrate the work which has been done and answer
                    any questions from stakeholders
                </ListItem>
                <ListItem>
                    Collaborate on adapting the Product Backlog to prioritise
                    what work to do next
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

const retroProps = {
    title: 'Sprint Retrospective',
    body: (
        <BoxContentWrapper>
            <BoxSubtitle>Timebox:</BoxSubtitle>
            <List>
                <ListItem>
                    3 hours max (for shorter Sprints the full 3 hours may not be
                    necessary)
                </ListItem>
            </List>
            <br />
            <BoxSubtitle> Who’s involved?</BoxSubtitle>
            <List>
                <ListItem>Product Owner</ListItem>
                <ListItem>Scrum Master</ListItem>
                <ListItem>Developers</ListItem>
            </List>
            <br />
            <BoxSubtitle>When?</BoxSubtitle>
            <List>
                <ListItem>
                    At the end of the sprint(After the Sprint Review and before
                    the next Sprint Planning session)
                </ListItem>
            </List>
            <br />
            <BoxSubtitle>What is it?</BoxSubtitle>
            <List>
                <ListItem>
                    Time to reflect on what was created and how it was created
                </ListItem>
                <ListItem>
                    Review the Definition of Ready and the Definition of Done
                </ListItem>
                <ListItem>
                    Identify what went well and improvements to make the next
                    Sprint more effective and efficient
                </ListItem>
                <ListItem>
                    Scrum Master ensures that the meeting takes place in the
                    timebox and encourages the team to improve
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

const SprintCeremonies = (props) => {
    return (
        <SectionWrapper>
            <Heading>Sprint Ceremonies</Heading>
            <SectionText>
                In scrum there are events called Sprint Ceremonies. These events
                will occur in every sprint undertaken.
            </SectionText>
            <BoxWrapper>
                <InfoBoxWithoutLink {...planningProps} />
                <InfoBoxWithoutLink {...dailyProps} />
                <InfoBoxWithoutLink {...reviewProps} />
                <InfoBoxWithoutLink {...retroProps} />
            </BoxWrapper>
        </SectionWrapper>
    );
};

export default SprintCeremonies;
