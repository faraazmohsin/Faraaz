import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons/lib';
import { FiGithub } from 'react-icons/fi';
import { FiExternalLink } from 'react-icons/fi';
import { FiFramer } from 'react-icons/fi';
import { motion } from "framer-motion";
import FadeIn from 'react-fade-in';

const ProjectsMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #E8DAEF;
    padding: 0 0 20vh 0;
    
    @media (min-width: 1600px) {
            padding: 0 0 20vh 0;
    }
`;

const ProjTitle = styled.div`
    display: flex;
    margin: 15vh 0vw 0vh 5vw;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 3rem;

    @media (max-width: 450px) {
        margin: 25vh 0vw 0vh 5vw;
    }
`;

const ProjTitleTwo = styled.div`
    display: flex;
    margin: 30vh 0vw 0vh 5vw;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 3rem;

    @media (max-width: 450px) {
        margin: 11vh 0vw 0vh 5vw;
    }
`;

const ProjGridContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 15vh 0vw 0vh 0vw;

    @media (max-width: 450px) {
        margin: 5vh 0vw 0vh 0vw;
    }
`;

const UIGridContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 15vh 0vw 0vh 0vw;

    @media (max-width: 450px) {
        margin: 5vh 0vw 15vh 0vw;
    }
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

const UIRowOne = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: 450px) {
        flex-direction: column;
    }
`;

const UIRowTwo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: 450px) {
        flex-direction: column;
    }
`;

const ProjRowTwo = styled.div`
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

const RowTwoProjOne = styled(motion.div)`
    display: flex;
    background-color: #AF7AC5;
    width: 20em;
    height: 20em;
    border-radius: 4% 4% 4% 4%;
    margin: 2em 2em 0 2em;

    @media (max-width: 450px) {
            width: 21em;
            margin: 0 0 5vh 0;

    }

    &:hover {
        background-color: #633974;
    }
`;

const RowTwoProjTwo = styled(motion.div)`
    display: flex;
    background-color: #AF7AC5;
    width: 20em;
    height: 20em;
    border-radius: 4% 4% 4% 4%;
    margin: 2em 2em 0 0;

    @media (max-width: 450px) {
            width: 21em;
            margin: 0 0 5vh 0;

    }

    &:hover {
        background-color: #633974;
    }
`;

const RowTwoProjThree = styled(motion.div)`
    display: flex;
    background-color: #AF7AC5;
    width: 20em;
    height: 20em;
    border-radius: 4% 4% 4% 4%;
    margin: 2em 2em 0 0;

    @media (max-width: 450px) {
            width: 21em;
            margin: 0 0 5vh 0;

    }

    &:hover {
        background-color: #633974;
    }
`;

const RowOneUIOne = styled(motion.div)`
    display: flex;
    background-color: #AF7AC5;
    width: 20em;
    height: 20em;
    border-radius: 1rem;
    margin: 0 2em 0 0;

    @media (max-width: 450px) {
            width: 21em;
            margin: 0 0 5vh 0;

    }

    &:hover {
        background-color: #633974;
    }
`;

const RowOneUITwo = styled(motion.div)`
    display: flex;
    background-color: #AF7AC5;
    width: 20em;
    height: 20em;
    border-radius: 1rem;
    margin: 0 2em 0 0;

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

const UIInfoContainer = styled.div`
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

const UIMiniTitle = styled.div`
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

const UIMiniSub = styled.div`
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    margin: 2vh 0vw 0vh 0vw;
`;

const BottomProjInfoContainer =styled.div`
    display: flex;
    flex-direction: row;
    margin: -13% 0 0 0;
    width: 15em;
`;

const BottomUIInfoContainer =styled.div`
    display: flex;
    flex-direction: row;
    margin: -13% 0 0 0;
    width: 15em;
`;

const BottomProjInfoContainerTwo =styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 0 0 0;
`;

const BottomProjInfoContainerThree =styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 0 0 0;
`;

const ProjLang = styled.div`
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    margin: 30% 0 0 0;
    width: 15em;
`;

const UILang = styled.div`
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    margin: 65% 0 0 0;
    width: 15em;
`;

const ProjLangTwo = styled.div`
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    margin: 43% 0 0 0;
    width: 15em;
`;

const ProjLangThree = styled.div`
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    margin: 33% 0 0 0;
    width: 15em;
`;

const ProjLinks = styled.div`
    display: flex;
    margin: 28% -10% 0 0;
    cursor: pointer;

    a {
        color: inherit;
    }
`;

const ProjLinksTwo = styled.div`
    display: flex;
    margin: 40% -10% 0 0;
    cursor: pointer;

    a {
        color: inherit;
    }

    @media (max-width: 450px) {
            

    }
`;

const UILinks = styled.div`
    display: flex;
    margin: 63% 0 0 53%;
    cursor: pointer;

    a {
        color: inherit;
    }

    @media (max-width: 450px) {
            margin: 63% 0 0 53%;

    }
`;

const UITwoLinks = styled.div`
    display: flex;
    margin: 63% 0 0 70%;
    cursor: pointer;

    a {
        color: inherit;
    }

    @media (max-width: 450px) {
            margin: 63% 0 0 75%;

    }
`;

const ProjLinksFour = styled.div`
    display: flex;
    margin: 52% -10% 0 0;
    cursor: pointer;

    a {
        color: inherit;
    }

    @media (max-width: 450px) {
            margin: 52% 0 0 74%;

    }
`;

const ProjLangFour = styled.div`
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    margin: 53% 0 0 0;
    width: 15em;
`;

const ProjLinksThree = styled.div`
    display: flex;
    margin: 30.5% -5% 0 0;
    cursor: pointer;

    a {
        color: inherit;
    }
`;

const ProjLangFive = styled.div`
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    margin: 66% 0 0 0;
    width: 15em;
`;

const UILinksOneEx = styled.div`
    display: flex;
    padding: 0 0 0 17%;

    a {
        color: inherit;
    }
`;

const ProjLinksFive = styled.div`
    display: flex;
    margin: 64% -5% 0 0;
    cursor: pointer;

    a {
        color: inherit;
    }
`;

const ProjLangSix = styled.div`
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    margin: 56% 0 0 0;
    width: 15em;
`;

const ProjLinksSix= styled.div`
    display: flex;
    margin: 54.5% -5% 0 0;
    cursor: pointer;

    a {
        color: inherit;
    }

    @media (max-width: 450px) {
            margin: 54.5% 0 0 83%;

    }
`;

const ProjLinksFiveEx = styled.div`
    display: flex;
    padding: 0 0 0 20%;

    a {
        color: inherit;
    }
`;

const ProjLinksThreeEx = styled.div`
    display: flex;
    padding: 0 0 0 20%;

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
                                Road Surface Detection Using Machine Learning
                            </ProjMiniTitle>
                            <ProjMiniSub>
                               A full-stack distributed application to capture and classify road damages in realtime.
                            </ProjMiniSub>

                            <BottomProjInfoContainer>
                                <ProjLang>
                                    Python | Kafka | Neo4j
                                </ProjLang>

                                <ProjLinks>
                                    <IconContext.Provider value={{size: "2.2em"}}>
                                        <a href='https://github.com/Capstone-RSD'>
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
                              BlockVote
                            </ProjMiniTitle>
                            <ProjMiniSub>
                               A decentralized web platform that utilizes the blockchain network to secure voter information and votes.
                            </ProjMiniSub>

                            <BottomProjInfoContainerTwo>
                                <ProjLangTwo>
                                    JavaScript | Solidity
                                </ProjLangTwo>

                                <ProjLinksTwo>
                                    <IconContext.Provider value={{size: "2.2em"}}>
                                        <a href='https://github.com/faraazmohsin/BlockchainVotingPlatform'>
                                        <FiGithub/>
                                        </a>
                                    </IconContext.Provider>
                                </ProjLinksTwo>
                            </BottomProjInfoContainerTwo>
                        </ProInfoContainer>
                    </RowOneProjTwo>

                    <RowOneProjThree
                    whileHover={{scale: 1.1}}
                    transition={{duration:0.6}}
                    >
                        <ProInfoContainer>
                            <ProjMiniTitle>
                              Wander
                            </ProjMiniTitle>
                            <ProjMiniSub>
                                Wander is an app that promotes exploration and exercise by providing AI-generated guided running tours.
                            </ProjMiniSub>

                            <BottomProjInfoContainerThree>
                                <ProjLangThree>
                                    Python | JavaScript
                                </ProjLangThree>

                                <ProjLinksThree>
                                    <IconContext.Provider value={{size: "2.2em"}}>
                                        <a href='https://github.com/Discovery-Squad/uofthacks-project'>
                                        <FiGithub/>
                                        </a>
                                    </IconContext.Provider>

                                    <ProjLinksThreeEx>
                                    <IconContext.Provider value={{size: "2.2em"}}>
                                        <a href='https://devpost.com/software/placeholder-name-n7wisp'>
                                        <FiExternalLink/>
                                        </a>
                                    </IconContext.Provider>
                                    </ProjLinksThreeEx>
                                </ProjLinksThree>
                            </BottomProjInfoContainerThree>
                        </ProInfoContainer>
                    </RowOneProjThree>
                </ProjRowOne>

                <ProjRowTwo>
                <RowTwoProjOne
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
                                <ProjLangFour>
                                    Python
                                </ProjLangFour>

                                <ProjLinksFour>
                                    <IconContext.Provider value={{size: "2.2em"}}>
                                        <a href='https://github.com/faraazmohsin/ImageRetrievalBarcodeGenerator'>
                                        <FiGithub/>
                                        </a>
                                    </IconContext.Provider>
                                </ProjLinksFour>
                            </BottomProjInfoContainer>
                        </ProInfoContainer>
                    </RowTwoProjOne>

                    <RowTwoProjTwo
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

                            <BottomProjInfoContainer>
                                <ProjLangFive>
                                    JavaScript
                                </ProjLangFive>

                                <ProjLinksFive>
                                    <IconContext.Provider value={{size: "2.2em"}}>
                                        <a href='https://github.com/Capstone-RSD'>
                                        <FiGithub/>
                                        </a>
                                    </IconContext.Provider>

                                    <ProjLinksFiveEx>
                                    <IconContext.Provider value={{size: "2.2em"}}>
                                        <a href='https://faraazmohsin.github.io/SneakPeek/'>
                                        <FiExternalLink/>
                                        </a>
                                    </IconContext.Provider>
                                    </ProjLinksFiveEx>

                                </ProjLinksFive>
                            </BottomProjInfoContainer>
                        </ProInfoContainer>
                    </RowTwoProjTwo>

                    <RowTwoProjThree
                    whileHover={{scale: 1.1}}
                    transition={{duration:0.6}}
                    >
                    <ProInfoContainer>
                            <ProjMiniTitle>
                                Auto Lock
                            </ProjMiniTitle>
                            <ProjMiniSub>
                               IoT based digital locking system designed to automate and digitize the action of locking a door.
                            </ProjMiniSub>

                            <BottomProjInfoContainer>
                                <ProjLangSix>
                                    C++
                                </ProjLangSix>

                                <ProjLinksSix>
                                    <IconContext.Provider value={{size: "2.2em"}}>
                                        <a href='https://github.com/faraazmohsin/AutoLockIoTDoorLockProject'>
                                        <FiGithub/>
                                        </a>
                                    </IconContext.Provider>
                                </ProjLinksSix>
                            </BottomProjInfoContainer>
                        </ProInfoContainer>
                    </RowTwoProjThree>
                </ProjRowTwo>
            </ProjGridContainer>

            <FadeIn>
                <ProjTitleTwo>
                    ui/ux-projects
                </ProjTitleTwo>
            </FadeIn>

            <UIGridContainer>
                <UIRowOne>
                    <RowOneUIOne
                    whileHover={{scale: 1.1}}
                    transition={{duration:0.6}}
                    >
                    <UIInfoContainer>
                            <UIMiniTitle>
                                6site
                            </UIMiniTitle>
                            <UIMiniSub>
                               Mockup design of videography/photography business based in Toronto.
                            </UIMiniSub>

                            <BottomUIInfoContainer>
                                <UILang>
                                    Framer
                                </UILang>

                                <UILinks>
                                    <IconContext.Provider value={{size: "2.2em"}}>
                                        <a href='https://framer.com/share/6site--9iQ6FhRpkfZDlIRorYZ8/Eqbay9mOn'>
                                        <FiFramer/>
                                        </a>
                                    </IconContext.Provider>

                                    <UILinksOneEx>
                                    <IconContext.Provider value={{size: "2.2em"}}>
                                        <a href='https://site-d730a.web.app/'>
                                        <FiExternalLink/>
                                        </a>
                                    </IconContext.Provider>
                                    </UILinksOneEx>

                                </UILinks>
                            </BottomUIInfoContainer>
                        </UIInfoContainer>
                    </RowOneUIOne>

                    <RowOneUITwo
                    whileHover={{scale: 1.1}}
                    transition={{duration:0.6}}
                    >
                    <UIInfoContainer>
                            <UIMiniTitle>
                                SneakPeek
                            </UIMiniTitle>
                            <UIMiniSub>
                               Initial mockup design of "SneakPeek", a sneaker realease calendar.
                            </UIMiniSub>

                            <BottomUIInfoContainer>
                                <UILang>
                                    Framer
                                </UILang>

                                <UITwoLinks>
                                    <IconContext.Provider value={{size: "2.2em"}}>
                                        <a href='https://framer.com/share/6site--9iQ6FhRpkfZDlIRorYZ8/Eqbay9mOn'>
                                        <FiFramer/>
                                        </a>
                                    </IconContext.Provider>

                                </UITwoLinks>
                            </BottomUIInfoContainer>
                        </UIInfoContainer>
                    </RowOneUITwo>
                </UIRowOne>

                <UIRowTwo>
                    
                </UIRowTwo>
            </UIGridContainer>

        </ProjectsMainContainer>
    ) 
};