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

const Link = styled.a`
    margin: 1rem 0;
    padding: 0;
    color: ${(p) => p.theme.colors.primaryDarkGrey};
    font-family: Roboto, sans-serif;
`

const UsefulScrumLinks = (props) => {
    return (
        <SectionWrapper>
            <Heading>Other Useful Resources</Heading>
            <List>
                <ListItem>
                    <Link href="https://www.scrum.org/resources/scrum-guide">
                        The Scrum Guide
                    </Link>
                </ListItem>
            </List>
        </SectionWrapper>
    )
}

export default UsefulScrumLinks
