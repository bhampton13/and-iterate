import React from 'react'
import styled from 'styled-components'

const SectionWrapper = styled.div`
    padding: 2em;
`

const Heading = styled.h2`
    font-family: Poppins, sans-serif;
    color: ${(p) => p.theme.colors.primaryRed};
    font-size: 2em;
`

const List = styled.ul`
    list-style: dash;
    padding: 0.25rem;
    margin: 0 1rem;
`

const ListItem = styled.li`
    margin: 1rem 0;
    padding: 0;
    color: ${(p) => p.theme.colors.primaryDarkGrey};
    font-family: Roboto, sans-serif;
`

const Sprints = (props) => {
    return (
        <SectionWrapper>
            <Heading>What is a sprint?</Heading>
            <List>
                <ListItem>
                    A container for all Scrum events to deliver a ‘Done’
                    increment
                </ListItem>
                <ListItem>
                    Is timeboxed and starts straight after the end of the
                    previous Sprint
                </ListItem>
                <ListItem>
                    A Sprint Goal is defined for the Sprint and agreed during
                    Sprint Planning
                </ListItem>
                <ListItem>
                    Scope may be clarified and re-negotiated between the Product
                    Owner and Development Team as more is learnt
                </ListItem>
                <ListItem>
                    Cancellation of a Sprint is only done by the Product Owner
                    if the Sprint Goal becomes obsolete
                </ListItem>
                <ListItem>
                    The next Sprint starts immediately after the previous Sprint
                </ListItem>
            </List>
        </SectionWrapper>
    )
}

export default Sprints
