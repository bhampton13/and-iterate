import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Auth from '../services/AuthService';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${(p) => p.theme.colors.primaryRed};
    font-family: Poppins;
`;

const Title = styled.p`
    font-size: 5rem;
    color: white;
    text-align: center;
    font-weight: 800;
`;

const Subtitle = styled.p`
    font-size: 3rem;
    color: white;
    text-align: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    margin: 0 1rem;
    border: solid 2px white;
    color: white;
    background: none;
    font-weight: 700;
    font-size: 1rem;

    :hover {
        background-color: white;
        color: ${(p) => p.theme.colors.primaryRed};
    }
`;

const Login = ({ props, CheckUser }) => {
    const history = useHistory();

    async function handleClick() {
        var succesfulLogin = false;
        succesfulLogin = await Auth.loginFunction();
        if (succesfulLogin) {
            history.push('/home');
        }
    }

    const handleClick4 = () => {
        Auth.logoutFunction();
    };

    return (
        <Container>
            <header className="App-header">
                <Title>ANDIterate</Title>
                <Subtitle>Please Login to Access your Dashboard</Subtitle>
                <ButtonContainer>
                    <Button
                        style={{ width: 100, height: 50 }}
                        onClick={handleClick}
                    >
                        Login
                    </Button>
                    <Button
                        style={{ width: 100, height: 50 }}
                        onClick={handleClick4}
                    >
                        Log Out
                    </Button>
                </ButtonContainer>
            </header>
        </Container>
    );
};

export default Login;
