import { TextDiv } from "./HomePage";
import { WorkDiv, Title} from "./WorkPage";
import styled from "styled-components";

const Content = styled.p`
padding-bottom: 5vh;
`
const StyledImage = styled.img`
    height: 80%;
    width: 50%;
    margin: auto;
`

export default function Personal() {
    return (
        <WorkDiv>
            <TextDiv>
                <Title>A Little About Me...</Title>
                <br></br>
                <Content>Hi! I'm Meera. I grew up in North New Jersey, which means I grew up going into NYC using NJ
                    Transit on weekends,
                    and that I love American-Italian food. In my free time, I like to hike around the garden state, with
                    my
                    favorite spot being
                    Round Valley Reservoir in Clinton. In my free time, you can find me reading books or talking about
                    books.
                    My favorites are War and Peace by Leo Tolstoy,
                    Kitchen by Bananana Yoshimoto, A Picture of Dorian Gray by Oscar Wilde, A Wild Sheep Chase by Haruki
                    Murakami, Slaughter House Five
                    by Kurt Vonnegut, and Giovanni's Room by James Baldwin. At least, these are my current favorites! If
                    you've read anything good recently,
                    let me know!</Content>
                <StyledImage src="./books.png" alt="book collage"/>

            </TextDiv>
        </WorkDiv>
    );
}