import styled from "styled-components";
import GlassCard from "../components/GlassCardRepo";
import { Done } from "../resources/Done.json"

function Doing(){
    return(
        <div>
            <TitleHead>
                What I have done
            </TitleHead>
            <InfoCont>
                <Info>
                    Here are some of the projects I've finished
                </Info>
                <GridContainer>
                    {Done ?
                        <>
                           {Done.map((repo) => (
                                <GlassCard 
                                    wdt="96%"
                                    high="100%"
                                    repoTitl={repo.name}
                                    repoDesc={repo.description}
                                    repoCol={repo.color}
                                    repoLang={repo.lang}
                                    repoLink={repo.link}
                                />
                            ))}
                        </> :
                        <></>
                    }
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