import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Auth from "../../services/AuthService"

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    li {
        padding: 0 1.5rem;
        font-weight: ${(p) => p.theme.h1.fontWeight};
        color: white;
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: white;
        position: fixed;
        transform: ${({ open }) =>
            open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        margin: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;

        li {
            color: ${(p) => p.theme.colors.primaryRed};
            padding: 1rem 0;
            font-size: ${(p) => p.theme.h1.size};
            width: 100%;
        }
    }
`;
const StyledLink = styled(Link)`
    text-decoration: none;
`;

const RightNav = ({ open }) => {


    const handleClick4 = () => {
        Auth.logoutFunction();
    };

    return (
        <Ul open={open}>
            <StyledLink to="/home">
                <li>Home</li>
            </StyledLink>
            <StyledLink to="/scrum-info">
                <li>Scrum Info</li>
            </StyledLink>
            <StyledLink to="/" onClick={handleClick4}>
                <li>Logout</li>
            </StyledLink>
        </Ul>
    );
};

export default RightNav;
