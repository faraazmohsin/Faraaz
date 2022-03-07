import React from 'react';
import styled from 'styled-components';
import { NavHeader } from '../components/nav';
import { motion } from 'framer-motion/dist/framer-motion';
import Slide from '../../node_modules/react-reveal';
import { AiFillMail } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { Element, scroller } from 'react-scroll';


const TopMainContainer = styled.div`
    display: flex;
    position: relative;
    height: 90vh;
    width: 100%;
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
    margin: 13.5vh 0vw 0vh 3.5vw;
    font-size: 0.96rem;
    color: #5B2C6F;
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
    width: 100%;
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
    color: #5B2C6F;

    a {
        color: inherit;
    }
`;

const GithubIcon = styled(motion.div)`
    cursor: pointer;
    margin: 0vh 0vw 0vh 0.5vw;
    color: #5B2C6F;

    a {
        color: inherit;
    }
`;

const LinkIcon = styled(motion.div)`
    cursor: pointer;
    margin: 0vh 0vw 0vh 0.5vw;
    color: #5B2C6F;

    a {
        color: inherit;
    }
`;

const StartButton = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20vh;
`;

const Button = styled(motion.button)`
    display: flex;
    border: none;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    background-color: #5B2C6F;
    cursor: pointer;
    font-size: 1.4rem;
    border-radius: 40px;
    padding: 0.5vh 3vw 0.5vh 3vw;
    font-family: 'Poppins', sans-serif;
    margin: 12vh 0vw 0vh 0vw;
`;

export function TopContainer() {

    const scrollNext = () => {
        scroller.scrollTo("aboutContainer", { smooth: true, duration: 1400});
    }

    return (
        <div>
            <Element name="topContainer">
            <NavHeader />
            <TopMainContainer>
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

                    <MainBottomContainer>
                    <SocialBanner>
                            <MailIcon whileHover={{scale: 1.1}}
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                            >
                            <IconContext.Provider value={{size: "2.2em"}}>
                                <a href=''>
                                    <AiFillMail/>
                                </a>
                            </IconContext.Provider>
                            </MailIcon>
                            <GithubIcon whileHover={{scale: 1.1}}
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                            >
                            <IconContext.Provider value={{size: "2.2em"}}>
                                <a href=''>
                                    <AiFillGithub />
                                </a>
                            </IconContext.Provider>
                            </GithubIcon>
                            <LinkIcon whileHover={{scale: 1.1}}
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                            >
                            <IconContext.Provider value={{size: "2.2em"}}>
                                <a href=''>
                                    <AiFillLinkedin />
                                </a>
                            </IconContext.Provider>
                            </LinkIcon>
                    </SocialBanner>
                </MainBottomContainer>

                
                <StartButton>
                        <Button onClick={scrollNext}  whileHover={{scale: 1.1}}
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}>
                            Start
                        </Button>
                </StartButton>
            </TopMainContainer>
            </Element>
        </div>
    )
};