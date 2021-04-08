import { Link } from "react-router-dom";
import styled from "styled-components";

function Contacts(){
    return(
        <div>
            <TitleHead>
                My contacts
            </TitleHead>
            <InfoCont>
                <Info>
                    You can get in touch with me on my <Link href="mailto: tevz.beskovnik@gmail.com">email</Link> or add me on my <Contact onClick={() => {navigator.clipboard.writeText("Z V E T#0952")}}>discord</Contact> or reach out trough any of the other linked platforms in the navbar.
                </Info>
                <Info>
                    Here are some people that I, get advice from, collaborate with, and talk to:<br/>
                    <WLink href="https://quantumly.dev/presence">Nejc Drobnič</WLink>,<br/>
                    <WLink href="https://premlez.com/">Premlez</WLink>
                </Info>
            </InfoCont>
        </div>
    );
}

const TitleHead = styled.h1`
    font-family: "Karla",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    font-size: 40px;
`;

const InfoCont = styled.div`
    padding-left: 12px;
`;

const Contact = styled.button`
    color: #58a6ff;
    border: none;
    background: none;

    textarea{
        visibility: hidden;
        position: absolute;
    }

    &:focus{
        outline: none;
    }

    &:active{
        color: #5366ff;
    }

    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
`;

const WLink = styled.a`
    margin-left: 10px;
    color: #58a6ff;

    &:hover{
        color: #58a6ff;
        text-decoration: underline;
    }
`;

const Info = styled.p`
    font-family: "Karla",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    font-color: #f2f2f2;
`;

export default Contacts;