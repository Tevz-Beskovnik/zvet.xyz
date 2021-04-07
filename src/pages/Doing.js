import styled from "styled-components";
import GlassCardWip from "../components/GlassCardWip";
import { Projects } from "../resources/Projects.json"
import 'bootstrap/dist/css/bootstrap.min.css';

function Doing(){
    let i = 0;

    return(
        <div>
            <TitleHead>
                What I'm working on
            </TitleHead>
            <InfoCont>
                <Info>
                    Here are the projects im currently working on:
                </Info>
                <GridContainer className="row">
                    {Projects.map(pr => { i++; if(i%2 === 0){
                        return (
                            <>
                                <GlassCardWip
                                    wdt="96%"
                                    high="100%"
                                    projTitl={pr.name}
                                    projDesc={pr.description}
                                    projCol={pr.color}
                                    projLink={pr.link}
                                    projLang={pr.lang}
                                />
                                <Separator className="w-100"></Separator>
                            </>
                        );
                    }else{
                        return (
                            <GlassCardWip
                                wdt="96%"
                                high="100%"
                                projTitl={pr.name}
                                projDesc={pr.description}
                                projCol={pr.color}
                                projLink={pr.link}
                                projLang={pr.lang}
                            />
                        )  
                    }
                    })}
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
    /*display: grid;
    grid-template-columns: 50% 50%;*/
    overflow-y: scroll;
    width: 100%;
    height: 70vh;
    padding-bottom: 10px;

    &::-webkit-scrollbar {
        width: 3px;
    }
`;

const Separator = styled.div`
    height: 0;
    margin: 0;
    padding: 0;
`;

const InfoCont = styled.div`
    padding-left: 12px;
`;

const Info = styled.p`
    font-family: "Karla",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    font-color: #f2f2f2;
`;

export default Doing;