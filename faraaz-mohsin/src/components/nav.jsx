import React from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';

const Nav = styled.div`
    display: flex;
    height: 19vh;
    margin: 3vh 0vw 0vw 3vw;
`;

const NavSub = styled.div`
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
    margin: 0vh 0vw 0.2vh 0vw;
`;

export function NavHeader() {
    return (
        <div>
                <Nav>
                    <Typist>
                        <Typist.Delay ms={300}/>
                        <NavSub>home</NavSub>
                        <NavSub>about</NavSub>
                        <NavSub>experience</NavSub>
                        <NavSub>software-projects</NavSub>
                    </Typist>
                </Nav>
        </div>
    )
};