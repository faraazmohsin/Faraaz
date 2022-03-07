import React from 'react';
import styled from 'styled-components';
import FadeIn from 'react-fade-in';

const FooterMainContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #EAF2F8;
    padding: 0 0 1% 0;
`;

const FooterOne = styled.div`
    display: flex;
    position: relative;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
`;

const FooterTwo = styled.div`
    display: flex;
    position: relative;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
`;

export function Footer() {
    return(
        <div>
            <FooterMainContainer>
            <FadeIn>
            <FooterOne>
                Built and designed by Faraaz Mohsin.
            </FooterOne>
            </FadeIn>
            <FadeIn>
            <FooterTwo>
                All rights reserved. ©
            </FooterTwo>
            </FadeIn>
            </FooterMainContainer>
        </div>
    )
};