import {styled} from "styled-components";
import { TextDiv } from "./HomePage";

export const WorkDiv = styled.div`
    width: 100%;
    margin: 0 auto;
    background-color: rgb(255, 229, 190);
    display: flex;
    flex-direction: column;
    height: 140vh;
`

export const Title=styled.h1`
    margin:auto;
    padding-top: 5vh;
    color: rgb(255, 123, 0);
`

export const MiniTitle=styled.h2`
    color: rgb(255, 123, 0);
    font-size: calc(2vw);
    padding-top: 3vh;
    padding-bottom: 2vh;

`

export const Caption=styled.h3`
    color: rgb(0, 0, 0);
    font-size: calc(1.3vw);
`

export default function WorkPage() {
    return (
        <WorkDiv>
            <TextDiv>

                <Title>Work Experience</Title>
                <MiniTitle>Red Hat Inc.</MiniTitle>
            <Caption>Software Engineering Intern, Research Team</Caption>
            <p>May 2024 - Present</p>
                <ul>
                    <li>Worked on a containerized textbook generation project, automating steps with a shell script to
                        reduce 20% of work required for the user.
                    </li>
                    <li>Developed and continuously deployed infrastructure to support over 500+ students who use the
                        containerized lab environment in their classes using Red Hat Openshift AI and Docker.
                    </li>
                    <li>Containerized large language models (LLM) tooling for teachers in containerized environments.
                    </li>
                    <li>Worked on a textbook to help support STEM education outside the classroom.</li>
                </ul>


                <MiniTitle>BigID</MiniTitle>
                <Caption>Financial Analyst Intern, Chief Data Office</Caption>
                <p className="date">June 2023 - August 2023</p>
                <ul>
                    <li>Developed on a ROI financial model in python that is now incorporated into all sales
                        interaction.
                    </li>
                    <li>Used Salesforce to analyze and visualize sales data.</li>
                    <li>Containerized large language models (LLM) tooling for teachers in containerized environments.
                    </li>
                    <li>Created technical education content that helped 4x enrollment in the new Data Leaders program,
                        and acted as subject matter expert on AI’s role in the data governance world.
                    </li>
                </ul>


                <MiniTitle>Aress Software</MiniTitle>
                <Caption>Front End Engineering, Digital Transformation Team </Caption>
                <p>June 2023 - August 2023</p>
                <ul>
                    <li>Worked on a React router to ensure more secure logins for administrators.</li>
                    <li>Improved accessibility by incorporating UX research into front-end design.</li>
                    <li>Ensured cross compatability between different devices.</li>
                </ul>
            </TextDiv>
        </WorkDiv>
);
}