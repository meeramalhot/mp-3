import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  padding: 3vh 3vw;
  background-color: rgb(255, 204, 86);
  color: rgb(255, 123, 0);
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <h1>Meera Malhotra</h1>
            <p>My online resume</p>
        </HeaderWrapper>
    );
}





