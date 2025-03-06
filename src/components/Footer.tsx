import styled from "styled-components";
import { Link } from "react-router"

const StyledFooter = styled.footer`
        background-color: rgb(255, 204, 86);
        padding: 3vh 3vw;
        color: rgb(0, 0, 0);
        text-align: center;
    
    footer a {
        color: rgb(0, 0, 0);
        text-decoration: none;
    }

`
export default function Footer() {
    return(
    <StyledFooter>All Rights Reserved by Meera Malhotra &emsp; &emsp;<Link to="/">Credits</Link> &#169;</StyledFooter>
    );
}