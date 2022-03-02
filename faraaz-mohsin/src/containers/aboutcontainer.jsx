import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';
import { Element } from 'react-scroll';
import FadeIn from 'react-fade-in';
import Slide from '../../node_modules/react-reveal';


const AboutMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 115vh;
`;

const AboutTitle = styled(Element)`
    display: flex;
    margin: 3vh 0vw 0vh 5vw;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 3rem;
`;

const AboutMain = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 80vw;
`;

const AboutText = styled(motion.div)`
    display: flex;
    margin: 2vh 0vw 0vh 5vw;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
`;

const Skills = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin: 2vh 0vw 0vh 5vw;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 1rem;
    color: #5B2C6F;
`;

export function AboutContainer() {
    return (
        <AboutMainContainer name="aboutContainer">
            <FadeIn>
            <AboutTitle>about</AboutTitle>
            </FadeIn>
            <AboutMain>
                <Slide left>
                <AboutText>
                    I am currently studying Software Engineering at University of 
                    Ontario Institute of Technology, with a focus in Artificial Intelligence and Softare Architecture.
                    <br>
                    </br>
                    <br>
                    </br>
                    Starting something of my own and building new projects is something that keeps me going!
                    I'm into any sort of software development that requires creativity. Recently, my area of interest
                    includes blockchain development, databases, and machine learning.
                    <br>
                    </br>
                    <br>
                    </br>
                    <br>
                    </br>
                    <br>
                    </br>
                    The technologies I have been using:
                </AboutText>

                <Skills>
                &#8250; HTML & CSS
                </Skills>
                <Skills>
                &#8250; JavaScript ES6+
                </Skills>
                <Skills>
                &#8250; ReactJS
                </Skills>
                <Skills>
                &#8250; NodeJS
                </Skills>
                <Skills>
                &#8250; Python
                </Skills>
                <Skills>
                &#8250; C++
                </Skills>
                <Skills>
                &#8250; Kotlin
                </Skills>
                </Slide>
            </AboutMain>
        </AboutMainContainer>
    )
};