import { TextDiv, Title } from "./HomePage";
import { WorkDiv} from "./WorkPage";
import {styled} from "styled-components";

export const Mini = styled.h2`
    margin: auto;
    font-size: calc(1.2vw);
    padding-bottom: 3vh;
    color: rgb(255, 123, 0);
`;

const Para = styled.p`
    padding-top: 5vh;
    margin: auto;
`;

const StyledLink = styled.a`
    padding-top: 3vh;
    margin: auto;
`;


export default function HomePage() {
    return (
        <WorkDiv>
            <TextDiv>
                <Title>Contact Me</Title>
            <Mini>Reach out and say hi!</Mini>
            <Para>For business inquiries you can message me on Linkedin.</Para>
            <StyledLink href="https://www.linkedin.com/in/meera-malhotra/">Reach out here!</StyledLink>

            <Para>For more detailed inquiries reach out on email.</Para>
            <StyledLink href="mailto:meeram@bu.edu">Reach out here!</StyledLink>

            <Para>Wanna see what I've been programming? Check out my github.</Para>
            <StyledLink href="https://github.com/meeramalhot">Stalk me here!</StyledLink>

            <Para>Check out what I've been reading!</Para>
            <StyledLink href="https://www.goodreads.com/user/show/172407113-meera-m">Get some book recs here!</StyledLink>
            </TextDiv>
        </WorkDiv>
    );
}