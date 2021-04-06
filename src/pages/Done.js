import styled from "styled-components";
import GlassCard from "../components/GlassCardRepo";
import { useState } from "react";

async function waitForFetch(){
    const profileUrl = "https://api.github.com/repos/Tevzi2/";
    const data = Promise.all([
        fetch(profileUrl + "3DCubeRenderCMD", {method: "GET", headers: {'Accept': 'application/vnd.github.v3+json'}}).then((response) => response.json()),
        fetch(profileUrl + "file-scraper", {method: "GET", headers: {'Accept': 'application/vnd.github.v3+json'}}).then((response) => response.json()),
        fetch(profileUrl + "webglelectronproject", {method: "GET", headers: {'Accept': 'application/vnd.github.v3+json'}}).then((response) => response.json())
    ])


    //console.log(data);

    return data;
}

function Doing(){
    const [getItem, setItem] = useState([]);

    const finishedRepos = [
        "3DCubeRenderCMD",
        "file-scraper",
        "webglelectronproject"
    ];
    waitForFetch(finishedRepos).then(d => {setItem(d)});

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
                    {getItem ?
                        <>
                           {getItem.map((repo) => (
                                <GlassCard 
                                    wdt="96%"
                                    high="230px"
                                    repoTitl={repo.name}
                                    repoDesc={repo.description}
                                    repoCol="#f1e05a"
                                    repoLang={repo.language}
                                    repoLink={repo.svn_url}
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