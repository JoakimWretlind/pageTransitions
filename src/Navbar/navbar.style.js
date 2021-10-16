import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 18rem;
    display: flex;
    justify-content: center;
    background: ${props => props.theme.gray};
    z-index: 2;
`;

export const NavUL = styled.ul`
    height: 100%;
    width: 80%;
    margin-left: 20%;
    padding-top: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const NavLI = styled.li`    
    margin-bottom: 2rem;    
    
`;

export const NavLink = styled(Link)`
    color: ${props => props.theme.white};
    font-size: 1.6rem;
    text-transform: capitalize;
    letter-spacing: .1rem;
    padding: .4rem 1.2rem;
    border-radius: .5rem;
    transition: .25s ease-out;
    &:hover{
        cursor: pointer;
        background: #A1876F;
    }
    &.active{
        background: #DED1C2;
        color: ${props => props.theme.gray}
    }
`;