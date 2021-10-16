import styled from 'styled-components';

export const Section = styled.section`
    overflow: hidden;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &#home{
        background: #8FC8C2;
    }
    &#about{
        background: #44958D;
    }
    &#settings{
        background: #15726A;
    }
`;

export const Header = styled.h1`
    text-align: center;
    text-transform: uppercase;
    letter-spacing: .3rem;
    font-size: clamp(3rem, 10vw, 5rem);
    color: ${props => props.theme.white}
`;