import React from 'react';
import styled from 'styled-components';
import { TopContainer } from './topcontainer';
import { AboutContainer } from './aboutcontainer';
import { ExperienceContainer } from './experiencecontainer';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    height: 500vh;
    background-color: #EAF2F8;
`;

export function Home() {
    return (
        <HomeContainer>
            <TopContainer/>
            <AboutContainer/>
            <ExperienceContainer/>
        </HomeContainer>
    )
};