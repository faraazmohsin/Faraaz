import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';
import FadeIn from 'react-fade-in';
import { IconContext } from 'react-icons/lib';
import { FiGithub } from 'react-icons/fi';
import { FiExternalLink } from 'react-icons/fi';

const ProjectsMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #EAF2F8;
    padding: 0 0 20% 0;
    
    @media (min-width: 1600px) {
            padding: 0 0 44% 0;
    }
`;

const ProjTitle = styled.div`
    display: flex;
    margin: 3vh 0vw 0vh 5vw;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 3rem;
`;

const ProjGridContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 7vh 0vw 0vh 0vw;
`;

const ProjRowOne = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: 450px) {
        flex-direction: column;
    }
`;

const RowOneProjOne = styled(motion.div)`
    display: flex;
    background-color: #AF7AC5;
    width: 20em;
    height: 20em;
    border-radius: 4% 4% 4% 4%;
    margin: 0 2em 0 0;

    @media (max-width: 450px) {
            width: 21em;
            margin: 0 0 5vh 0;

    }

    &:hover {
        background-color: #633974;
    }
`;

const RowOneProjTwo = styled(motion.div)`
    display: flex;
    background-color: #AF7AC5;
    width: 20em;
    height: 20em;
    border-radius: 4% 4% 4% 4%;
    margin: 0 2em 0 0;

    @media (max-width: 450px) {
            width: 21em;
            margin: 0 0 5vh 0;

    }

    &:hover {
        background-color: #633974;
    }
`;

const RowOneProjThree = styled(motion.div)`
    display: flex;
    background-color: #AF7AC5;
    width: 20em;
    height: 20em;
    border-radius: 4% 4% 4% 4%;

    @media (max-width: 450px) {
            width: 21em;
            margin: 0 0 5vh 0;

    }

    &:hover {
        background-color: #633974;
    }
`;

const ProInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 8% 0 0 8%;
    width: 15em;
    height: 15em;
`;

const ProjMiniTitle = styled.div`
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 1.3rem;
`;

const ProjMiniSub = styled.div`
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    margin: 2vh 0vw 0vh 0vw;
`;

const BottomProjInfoContainer =styled.div`
    display: flex;
    flex-direction: row;
`;

const BottomProjInfoContainerTwo =styled.div`
    display: flex;
    flex-direction: row;
    margin: 14% 0 0 0;
`;

const ProjLang = styled.div`
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    margin: 30% 0 0 0;
`;

const ProjLinks = styled.div`
    display: flex;
    margin: 28% 0 0 70%;
    cursor: pointer;

    a {
        color: inherit;
    }
`;

const ProjLinksThree = styled.div`
    display: flex;
    margin: 28% 0 0 40%;
    cursor: pointer;

    a {
        color: inherit;
    }
`;

const ProjLinksThreeEx = styled.div`
    display: flex;
    padding: 0 0 0 25%;

    a {
        color: inherit;
    }
`;

export function ProjectsContainer() {
    return (
        <ProjectsMainContainer name="projectsContainer">
            <FadeIn>
                <ProjTitle>
                    software-projects
                </ProjTitle>
            </FadeIn>

            <ProjGridContainer>
                <ProjRowOne>
                    <RowOneProjOne
                    whileHover={{scale: 1.1}}
                    transition={{duration:0.6}}
                    >
                        <ProInfoContainer>
                            <ProjMiniTitle>
                                Image Retrieval Barcode Generator
                            </ProjMiniTitle>
                            <ProjMiniSub>
                                Algorithms created for the retrieval of images from a set of generated barcodes.
                            </ProjMiniSub>

                            <BottomProjInfoContainer>
                                <ProjLang>
                                    Python
                                </ProjLang>

                                <ProjLinks>
                                    <IconContext.Provider value={{size: "2.2em"}}>
                                        <a href='https://github.com/faraazmohsin/ImageRetrievalBarcodeGenerator'>
                                        <FiGithub/>
                                        </a>
                                    </IconContext.Provider>
                                </ProjLinks>
                            </BottomProjInfoContainer>
                        </ProInfoContainer>
                    </RowOneProjOne>

                    <RowOneProjTwo
                    whileHover={{scale: 1.1}}
                    transition={{duration:0.6}}
                    >
                        <ProInfoContainer>
                            <ProjMiniTitle>
                              Guess The Letter
                            </ProjMiniTitle>
                            <ProjMiniSub>
                               A letter guessing game with 3 game modes, with Python automation tests.
                            </ProjMiniSub>

                            <BottomProjInfoContainerTwo>
                                <ProjLang>
                                    Python
                                </ProjLang>

                                <ProjLinks>
                                    <IconContext.Provider value={{size: "2.2em"}}>
                                        <a href='https://github.com/faraazmohsin/GuessTheLetter'>
                                        <FiGithub/>
                                        </a>
                                    </IconContext.Provider>
                                </ProjLinks>
                            </BottomProjInfoContainerTwo>
                        </ProInfoContainer>
                    </RowOneProjTwo>

                    <RowOneProjThree
                    whileHover={{scale: 1.1}}
                    transition={{duration:0.6}}
                    >
                        <ProInfoContainer>
                            <ProjMiniTitle>
                              SneakPeek
                            </ProjMiniTitle>
                            <ProjMiniSub>
                               A sneaker release calendar application that keeps you updated with the latest drops.
                            </ProjMiniSub>

                            <BottomProjInfoContainerTwo>
                                <ProjLang>
                                    JavaScript
                                </ProjLang>

                                <ProjLinksThree>
                                    <IconContext.Provider value={{size: "2.2em"}}>
                                        <a href='https://github.com/faraazmohsin/SneakPeek'>
                                        <FiGithub/>
                                        </a>
                                    </IconContext.Provider>

                                    <ProjLinksThreeEx>
                                    <IconContext.Provider value={{size: "2.2em"}}>
                                        <a href='https://faraazmohsin.github.io/SneakPeek/'>
                                        <FiExternalLink/>
                                        </a>
                                    </IconContext.Provider>
                                    </ProjLinksThreeEx>
                                </ProjLinksThree>
                            </BottomProjInfoContainerTwo>
                        </ProInfoContainer>
                    </RowOneProjThree>
                </ProjRowOne>
            </ProjGridContainer>
        </ProjectsMainContainer>
    ) 
};