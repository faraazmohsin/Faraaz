import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';
import Typist from 'react-typist';
import { Element, scroller } from 'react-scroll';

const Nav = styled.div`
    display: flex;
    flex-direction: column;
    height: 19vh;
    margin: 3vh 0vw 0vh 3vw;
`;

const NavSub = styled(motion.div)`
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
    margin: 0vh 0vw 0.2vh 0vw;
    cursor: pointer;
`;

export function NavHeader() {

    const scrollHome = () => {
        scroller.scrollTo("homeContainer", { smooth: true, duration: 1400});
    }

    const scrollAbout = () => {
        scroller.scrollTo("aboutContainer", { smooth: true, duration: 1400});
    }

    const scrollEx = () => {
        scroller.scrollTo("experienceContainer", { smooth: true, duration: 1400});
    }

    const scrollProj = () => {
        scroller.scrollTo("projectsContainer", { smooth: true, duration: 1400});
    }

    return (
        <Nav>
            <Typist>
                <NavSub onClick={scrollHome}
                >home</NavSub>
                <NavSub onClick={scrollAbout}
                >about</NavSub>
                <NavSub onClick={scrollEx}
                >experience</NavSub>
                <NavSub onClick={scrollProj}
                >software-projects</NavSub>
            </Typist>
        </Nav>
    )
}