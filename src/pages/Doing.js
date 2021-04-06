import styled from "styled-components";
import GlassCardWip from "../components/GlassCardWip";
import { Projects } from "../resources/Projects.json"

function Doing(){
    return(
        <div>
            <TitleHead>
                What I'm working on
            </TitleHead>
            <InfoCont>
                <Info>
                    Here are the projects im currently working on:
                </Info>
                <GridContainer>
                    {Projects.map(pr => (
                        <GlassCardWip
                            wdt="96%"
                            high="230px"
                            projTitl={pr.name}
                            projDesc={pr.description}
                            projCol={pr.color}
                            projLink={pr.link}
                            projLang={pr.lang}
                        />
                    ))}
                </GridContainer>
            </InfoCont>
        </div>
    );
}

const TitleHead = styled.h1`
    font-family: "Karla",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    font-size: 40px;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    overflow-y: scroll;
    width: 100%;
    height: 70vh;
    padding-bottom: 10px;

    &::-webkit-scrollbar {
        width: 3px;
    }
`;

const InfoCont = styled.div`
    padding-left: 12px;
`;

const Info = styled.p`
    font-family: "Karla",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    font-color: #f2f2f2;
`;

export default Doing;