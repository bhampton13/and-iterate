import styled from "styled-components";
import { media } from "../styles/theme";


export const Page = styled.div`
    display: flex; 
    flex-direction: column;
    margin: 0 auto;
    padding: 4em 1rem;
    min-height: -webkit-fill-available;
    width: -webkit-fill-available;

    ${media.tablet`
        flex-direction: row;
    `}
`;
