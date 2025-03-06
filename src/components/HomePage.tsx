import {styled} from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: rgb(255, 229, 190);
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
`;

export const Title = styled.h2`
    padding-top: 5vh;
    margin: auto;
    font-size: calc(2vw);
    padding-bottom: 2vh;
    color: rgb(255, 123, 0);
`;

const StyledImage = styled.img`
    height: 60%;
    width: 28%;
    padding-top: 3.5vh;
    margin: auto;
`;

export default function HomePage() {
    return (
        <StyledDiv>
            <TextDiv>
                <Title>Welcome to My Site</Title>
                <p>
                    My name is Meera Malhotra, I'm a computer science senior at Boston University.
                    Post-graduation, I am joining Red Hat as a software engineer in their research
                    department, where I interned last summer. This website serves as a portfolio
                    where you can explore my work experience, education history, project portfolio,
                    and learn more about me.
                </p>
                <p>
                    As for my work history, I have experience in systems research, DevOps, and cloud
                    technologies. Outside  of my work, I also love playing with machine learning
                    techniques in financial contexts. You can check that out in my projects!
                    In my free time, I love to travel, hike, cook, and read.
                </p>
                <StyledImage src="./photo.jpg" alt="profile picture"></StyledImage>

            </TextDiv>

        </StyledDiv>
    );
}
