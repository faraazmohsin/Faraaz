import React from 'react';
import styled from 'styled-components';
import { TopContainer } from './topcontainer';
import { ProjectsContainer } from './projectscontainer';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    height: 200vh;
    background-color: #E8DAEF;
`;

export function Home() {
    return (
        <HomeContainer>
            <TopContainer/>
            <ProjectsContainer/>
        </HomeContainer>
    )
};