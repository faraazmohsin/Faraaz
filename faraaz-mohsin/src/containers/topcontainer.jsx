import React from 'react';
import styled from 'styled-components';
import { NavHeader } from '../components/nav';
import Slide from '../../node_modules/react-reveal';
import { motion } from 'framer-motion//dist/framer-motion';
import { AiFillMail } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const MainContainer = styled.div`

`;

const LeftNameTitle = styled.div`
    display: flex;
    position: absolute;
    font-family: 'Poppins', sans-serif;
    font-size: 4.5rem;
    font-weight: bold;
    margin: 1vh 0vw 0vh 3vw;
`;

const LeftSubTitle = styled.div`
    display: flex;
    position: absolute;
    font-family: 'Poppins', sans-serif;
    margin: 13vh 0vw 0vh 4vw;
    font-size: 0.96rem;
`;

const BothText = styled.div`
    display: flex;
    flex-direction: row;
`;

const NowText = styled.div`
    display: flex;
    position: absolute;
    font-family: 'Poppins', sans-serif;
    margin: 30vh 0vw 0vh 4vw;
    font-size: 1.2rem;
`;

const NewText = styled(motion.div)`
    display: flex;
    position: absolute;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    margin: 35vh 0vw 0vh 10vw;
    color: #117A65;
    font-size: 1.2rem;
`;

const MainBottomContainer = styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 50vh;
`;

const SocialBanner = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 55vh 0vw 0vh 0vw;
`;

const MailIcon = styled(motion.div)`
    cursor: pointer;
    margin: 0vh 0vw 0vh 0.5vw;
`;

const GithubIcon = styled(motion.div)`
    cursor: pointer;
    margin: 0vh 0vw 0vh 0.5vw;
`;

const LinkIcon = styled(motion.div)`
    cursor: pointer;
    margin: 0vh 0vw 0vh 0.5vw;
`;

const ExploreButton = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10vh;

`;

const Button = styled(motion.button)`
    display: flex;
    border: none;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: black;
    cursor: pointer;
    font-size: 1.4rem;
    border-radius: 40px;
    padding: 0.5vh 3vw 0.5vh 3vw;
    font-family: 'Poppins', sans-serif;
    margin: 50vh 0vw 0vh 0vw;
`;


export function TopContainer() {
    return (
        <div>
            <NavHeader/>
                <MainContainer>
                    <LeftNameTitle>
                        <Slide left>
                            Faraaz
                        </Slide>
                    </LeftNameTitle>
                    <LeftSubTitle>
                        <Slide left>
                            Full-Stack Engineer & Designer
                        </Slide>
                    </LeftSubTitle>
                    <BothText>
                    <NowText>
                        <Slide left>
                        Now exploring &darr;
                        </Slide>
                    </NowText>
                    <NewText
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration:3}}
                    >Blockchain Development</NewText>
                    </BothText>
                </MainContainer>
                <MainBottomContainer>
                    <SocialBanner>
                            <MailIcon whileHover={{scale: 1.1}}
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                            >
                            <IconContext.Provider value={{size: "2.2em"}}>
                                <AiFillMail/>
                            </IconContext.Provider>
                            </MailIcon>
                            <GithubIcon whileHover={{scale: 1.1}}
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                            >
                            <IconContext.Provider value={{size: "2.2em"}}>
                                <AiFillGithub />
                            </IconContext.Provider>
                            </GithubIcon>
                            <LinkIcon whileHover={{scale: 1.1}}
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                            >
                            <IconContext.Provider value={{size: "2.2em"}}>
                                <AiFillLinkedin />
                            </IconContext.Provider>
                            </LinkIcon>
                    </SocialBanner>
                </MainBottomContainer>
                <ExploreButton>
                        <Button  whileHover={{scale: 1.1}}
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}>
                            Start
                        </Button>
                </ExploreButton>
        </div>
    )
};