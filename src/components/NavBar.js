import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Discord, Github, Twitter } from "../resources/Icons";

function NavBar() {

    const { pathname } = useLocation();

    return (
        <ShadowContainer>
            <NavigationGlass>
                <Title>
                    Tevž Beškovnik
                </Title>
                    <FlexList>
                        <Page to="/" active={ pathname === "/" ? 1 : 0 }>
                            Who am I
                            <ExtendingBar active={ pathname === "/" ? 1 : 0 }></ExtendingBar>
                        </Page>
                        <Page to="/done" active={ pathname === "/done" ? 1 : 0 }>
                            What I have done
                            <ExtendingBar active={ pathname === "/done" ? 1 : 0 }></ExtendingBar>
                        </Page>
                        <Page to="/doing" active={ pathname === "/doing" ? 1 : 0 }>
                            What I'm working on
                            <ExtendingBar active={ pathname === "/doing" ? 1 : 0 }></ExtendingBar>
                        </Page>
                        <Page to="/playlist" active={ pathname === "/playlist" ? 1 : 0 }>
                            My dev playlist
                            <ExtendingBar active={ pathname === "/playlist" ? 1 : 0 }></ExtendingBar>
                        </Page>
                        <Page to="/contacts" active={ pathname === "/contacts" ? 1 : 0 }>
                            My contacts
                            <ExtendingBar active={ pathname === "/contacts" ? 1 : 0 }></ExtendingBar>
                        </Page>
                    </FlexList>
                    <Contacts>
                        <Icon href="/contacts"><Discord/></Icon>
                        <Icon href="https://github.com/Tevzi2"><Github/></Icon>
                        <Icon href="https://twitter.com/Tevzi2"><Twitter /></Icon>
                    </Contacts>
            </NavigationGlass>
        </ShadowContainer>
    );
}

const ShadowContainer = styled.div`
    height: 100%;
    width: 100%;
    box-shadow 0 3px 20px rgba(0, 0, 0, .2);
`;

const NavigationGlass = styled.nav`
    display: flex;
    flex-flow: column;
    width: 100%;
    height: 100%;
    background: inhernt;
    z-index: 1;
    padding-left: 30px;
    padding-top: 50px;
    padding-right: 30px;
    padding-bottom: 10px;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, .2);

    &::before {
        z-index: -1;
        background: inhernt;
        filter: blur(10px);
    }
`;

const Title = styled.h2`
    font-family: "Karla",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    letter-spacing: 1px;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #f2f2f2;
`;

const FlexList = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
`;

const Page = styled(Link)`
    font-family: "Karla",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    margin-left: 5px;
    padding-bottom: -10px;
    margin-bottom: 10px;
    letter-spacing: 1px;
    font-size: 18px;
    font-weight: normal;
    width: 100%;
    color: ${props => props.active === 0 ? "#e0e0e0" : "#f2f2f2"};
    transition: 0.5s;

    &:hover{
        text-decoration: none;
        color: #f2f2f2;
    }

    &:active{
        color: #f2f2f2;
        width: 200px;
    }

    ExtendingBar:hover{
        border-bottom: 2px solid #f2f2f2;
    }

    ExtendingBar:active{
        width: 70%;
        border-bottom: 2px solid #f2f2f2;
    }
`;

const ExtendingBar = styled.div`
    transition: 0.5s;
    heigth: 0;
    width: ${props => props.active === 0 ? "10px" : "70%"};
    border-bottom: 2px solid ${props => props.active === 0 ? "#e0e0e0" : "#f2f2f2"};
`;

const Contacts = styled.div`
    margin-top: auto;
    padding: 10px;
    display: flex;
    justify-content: center;
    flex-flow: row;
    border-top: 2px solid #f2f2f2;
`;

const Icon = styled.a`
    width: auto;
    height: auto;
    text-decoration: none;
    padding: 7.5px;
    color: #e0e0e0;

    svg {
        fill: #e0e0e0;
        width: 40px;
        height: 40px;

        &:hover {
            fill: #f2f2f2;
            cursor: pointer;
        }
    }
`;

export default NavBar;