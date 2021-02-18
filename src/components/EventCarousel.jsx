import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Events from '../resources/data/events.json';
import { media } from '../styles/theme';
import { CarouselProvider, Slider,Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Header = styled.p`
    color: ${(p) => p.theme.colors.primaryRed};
    font-size: 1.5rem;
    // margin: 0.5rem 0;
    margin: 0;

    ${media.desktop`
        font-size: 2rem; 
    `}
`;

const Title = styled.div`
    font-size: 3rem;
    color: ${(p) => p.theme.colors.primaryRed};
    font-weight: ${(p) => p.theme.h1.fontWeight};
    margin-bottom: 1rem;

    ${media.desktop`
    font-size: 4rem;
    `}
`;

const Subtitle = styled.div`
    font-size: 1rem;
    font-weight: ${(p) => p.theme.h3.fontWeight};
    background-color: ${(p) => p.theme.colors.primaryRed};
    color: white;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
`;

const Text = styled.p`
    font-size: 0.75rem;

    ${media.desktop`
    font-size: 1rem;
    `}
`;

const Card = styled.div`
    background-color: white;
    padding: 2rem;
`;

const Linker = styled(Link)`
    padding: 0.25rem 0.75rem;
    text-decoration: none;
    background-color: #f1f1f1;
    border-radius: 100%;
    color: black;
    height: fit-content;
`;

const BottomContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const EventCarousel = () => {
    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={60}
            totalSlides={3}
            style={{ margin: '1.5rem 1rem', minWidth: '90%', maxWidth: '95%' }}
        >
            <Slider
                style={{
                    boxShadow: '0 4px 2px -1px #c1c1c1',
                    borderRadius: '1rem',
                    border: 'solid 3px #FF323C',
                    height: '26rem',
                    maxHeight: '28rem'
                }}
            >
                {Events.items.map((event) => {
                    return (
                        <Slide>
                            <Card>
                                <Header>Next Sprint Event:</Header>
                                <Title>{event.summary}</Title>
                                <Subtitle>{event.description}</Subtitle>
                                <Subtitle>
                                    Start time:{' '}
                                    {event.start.dateTime.toString(
                                        'yyyy-MM-dd'
                                    )}
                                </Subtitle>
                                <BottomContainer>
                                    <Text>Swipe to see the next event...</Text>
                                    <Linker>?</Linker>
                                </BottomContainer>
                            </Card>
                        </Slide>
                    );
                })}
                {/* <DotGroup dotNumbers={true}/> */}
            </Slider>
        </CarouselProvider>
    );
};

export default EventCarousel;
