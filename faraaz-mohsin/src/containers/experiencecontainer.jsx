import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';
import FadeIn from 'react-fade-in';
import Slide from '../../node_modules/react-reveal';
import { IconContext } from 'react-icons/lib';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { AiOutlineArrowUp } from 'react-icons/ai';

const ExperienceMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 200vh;
`;

const ExTitle = styled.div`
    display: flex;
    margin: 3vh 0vw 0vh 5vw;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 3rem;
`;

const ExMain = styled.div`
    display: flex;
    flex-direction: column;
    margin: 7vh 0vw 0vh 5vw;
    width: 80vw;
`;

const FirstExRole = styled.div`
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 1rem;
`;

const FirstExPlace = styled.div`
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 1rem;
    color: #5B2C6F;
    margin: 0vh 0vw 1vh 0vw;
`;

const FirstExInfo = styled.div`
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
`;

const SecondExRole = styled.div`
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 1rem;
    margin: 40vh 0vw 0vh 0vw;
`;

const SecondExPlace = styled.div`
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 1rem;
    color: #5B2C6F;
    margin: 0vh 0vw 1vh 0vw;
`;

const SecondExInfo = styled.div`
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
`;

const ScrollContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 6vh 0vw 0vh 0vw;
`;

const ScrollDown = styled(motion.div)`
    display: flex;
    margin: 0vh 0vw 0vh 0vw;
    cursor: pointer;
`;

const ScrollUp = styled(motion.div)`
    display: flex;
    margin: 0vh 0vw 0vh 0vw;
    cursor: pointer;
`;


export function ExperienceContainer() {

    return (
        <ExperienceMainContainer>
            <FadeIn>
                <ExTitle>
                    experience
                </ExTitle>
            </FadeIn>
            <ExMain>
                <FadeIn>
                <FirstExRole>
                    Co-Founder / Full-Stack Engineer
                </FirstExRole>
                </FadeIn>

            <FadeIn>
                <FirstExPlace>
                    Devlution
                </FirstExPlace>
            </FadeIn>
            <Slide left>
            <FirstExInfo>
                &#8250; Managed both back end and front-end aspects of the development process.
                <br>
                </br>
                <br>
                </br>

                &#8250; Designed UI using Framer and constructed appropriate UML diagrams for web applications,
                resulting in a smooth development process.
                <br>
                </br>
                <br>
                </br>

                &#8250; Created user interface using ReactJS, styled-components, and framer motion
                <br>
                </br>
                <br>
                </br>

                &#8250; Implemented React-Router to allow client side navigation within the application
                <br>
                </br>
                <br>
                </br>

                &#8250; Developed contact forms and email routing using Nodemailer to connect our clients with their customers.
            </FirstExInfo>
            </Slide>

            <ScrollContainer>
                <FadeIn>
                <ScrollDown whileHover={{scale: 1.1}}>
                <IconContext.Provider value={{size: "2.2em"}}>
                    <AiOutlineArrowDown/>
                </IconContext.Provider>
                </ScrollDown>
                </FadeIn>
            </ScrollContainer>
            <FadeIn>
            <SecondExRole>
                Junior Software Developer Intern
            </SecondExRole>
            </FadeIn>
            <FadeIn>
            <SecondExPlace>
                binqit jobs
            </SecondExPlace>
            </FadeIn>
            <Slide left>
            <SecondExInfo>
                &#8250; Responsible for building codebase and features for an 
                Android application primarily using Kotlin in a Startup environment.
                <br>
                </br>
                <br>
                </br>

                &#8250; Operated in a team-based, Scrum environment to 
                accomplish objectives quickly and efficiently.
                <br>
                </br>
                <br>
                </br>

                &#8250; Implemented Git (Bitbucket) to manage, test, and deploy applicaton features while
                utilizing best software practices.
                <br>
                </br>
                <br>
                </br>

                &#8250; Participated in the lifecycle of Android application research and planning through app launch and client support.
                <br>
                </br>
                <br>
                </br>

                &#8250; Constructed and populate a ListView using Kotlin for a certain feature on the application
                <br>
                </br>
                <br>
                </br>

                &#8250; Cleaned up code to optimize and understood all release channels while developing
                <br>
                </br>
                <br>
                </br>
            </SecondExInfo>
            </Slide>
            <ScrollContainer>
                <FadeIn>
                <ScrollUp whileHover={{scale: 1.1}}>
                <IconContext.Provider value={{size: "2.2em"}}>
                    <AiOutlineArrowUp/>
                </IconContext.Provider>
                </ScrollUp>
                </FadeIn>
            </ScrollContainer>
            </ExMain>
        </ExperienceMainContainer>
    )
};