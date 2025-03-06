import styled from "styled-components";
import {Link} from "react-router";

const StyledNav = styled.nav`
  width: 20%;
  background-color: rgb(255, 162, 96);
  display: flex;
  flex-direction: column;
    
    @media screen and (max-width: 750px) {
        width: 100%;
        text-align: center;
        flex-direction: row;
        padding-bottom: 1vh;
    }
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 5vh;
  justify-content: space-around;
  list-style-type: none;
  font-size: calc(2vw);

    @media screen and (max-width: 750px) {
        flex-direction: row;
        margin: auto;
    }
`;

const StyledLi = styled.li`
  font-size: calc(3vw);
  margin: 1vh 0;
`;

const StyledLink = styled(Link)`
  padding: 1vh 1vw;
  text-decoration: none;
  font-size: calc(2px + 1vw);
  color: rgb(0, 0, 0);
  background-color: #ffe5c6;
  border-radius: 6vh 3vw;

  &:active,
  &:visited {
    color: rgb(0, 0, 0);
  }
`;


export default function Nav() {
return (
    <StyledNav>
        <StyledUl>
                 <StyledLi>
                     <StyledLink to="/">Home</StyledLink>
                 </StyledLi>
                <StyledLi>
                    <StyledLink to="/work">Work Experience</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to="/education">Education</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to="/projects">Projects</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to="/personal">Personal</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to="/contact">Contact Me</StyledLink>
                </StyledLi>
        </StyledUl>
    </StyledNav>
);
}
