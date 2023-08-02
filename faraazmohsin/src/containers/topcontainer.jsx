import React from 'react';
import styled from 'styled-components';
import { AiFillMail } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { motion } from "framer-motion";
import FadeIn from 'react-fade-in';
import { scroller } from 'react-scroll';

const TopMainContainer = styled.div`
    display: flex;
    position: relative;
    height: 65vh;
    width: 100%;

    @media (max-width: 450px) {
        height: 43vh;
    }
`;

const MainTitle = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 17vh;
    margin-left: auto;
    margin-right: auto;
`;

const NameTitle = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    font-size: 4.5rem;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 450px) {
        font-size: 1.55rem;
    }
`;

const RankTitle = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    font-size: 4.5rem;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    color: #5B2C6F;

    @media (max-width: 450px) {
        font-size: 1.55rem;
    }
`;

const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`;

const IconsContainer = styled.div`
    display: flex;
`;

const ButtonsContainer = styled.div`
    display: flex;
    margin-top: 9vh;

    @media (max-width: 450px) {
        margin-top: 10vh;
    }
`;

const SocialBanner = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0vh 0vw 0vh 0vw;
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

const ProjectsButtonContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const ProjectsButton = styled(motion.button)`
    display: flex;
    flex-direction: row;
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
`;

const ResumeButtonContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const ResumeButton = styled(motion.button)`
    display: flex;
    flex-direction: row;
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
    margin: 0vh 0vw 0vh 2vw;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 450px) {
        margin: 0vh 0vw 0vh 7vw;
    }
`;


export function TopContainer() {

    const scrollNext = () => {
        scroller.scrollTo("projectsContainer", { smooth: true, duration: 1400});
    }

    return (
        <div>
            <TopMainContainer>
                <MainTitle>
                    <FadeIn>
                        <NameTitle>
                            Hi, my name is Faraaz.
                        </NameTitle>
                    </FadeIn>
                    <FadeIn>
                        <RankTitle>
                            I'm a software engineer.
                        </RankTitle>
                    </FadeIn>
                </MainTitle>
            </TopMainContainer>

            <BottomContainer>
                <IconsContainer>
                <SocialBanner>
                            <MailIcon whileHover={{scale: 1.1}}
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                            >
                            <IconContext.Provider value={{size: "2.5em"}}>
                                <a href='mailto:webmaster@example.com'>
                                    <AiFillMail/>
                                </a>
                            </IconContext.Provider>
                            </MailIcon>
                            <GithubIcon whileHover={{scale: 1.1}}
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                            >
                            <IconContext.Provider value={{size: "2.5em"}}>
                                <a href='https://github.com/faraazmohsin'>
                                    <AiFillGithub />
                                </a>
                            </IconContext.Provider>
                            </GithubIcon>
                            <LinkIcon whileHover={{scale: 1.1}}
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                            >
                            <IconContext.Provider value={{size: "2.5em"}}>
                                <a href='https://www.linkedin.com/in/faraazmohsin/'>
                                    <AiFillLinkedin />
                                </a>
                            </IconContext.Provider>
                            </LinkIcon>
                    </SocialBanner>
                </IconsContainer>

                <ButtonsContainer>
                    <ProjectsButtonContainer>
                        <ProjectsButton
                         onClick={scrollNext}  whileHover={{scale: 1.1}}
                         initial={{opacity: 0}}
                         animate={{opacity: 1}}
                        >Projects</ProjectsButton>
                    </ProjectsButtonContainer>

                <ResumeButtonContainer>
                    <a style={{ textDecoration: 'none'}} href='https://drive.google.com/file/d/1MpyoaqZbj8thRoHV68JpuPmT6_5shYVQ/view?usp=sharing/'>
                    <ResumeButton
                    whileHover={{scale: 1.1}}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    >
                        Resume</ResumeButton></a>
                </ResumeButtonContainer>

                </ButtonsContainer>

            </BottomContainer>
        </div>
    )
};