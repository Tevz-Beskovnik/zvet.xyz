import styled from "styled-components";
import GlassSoftwareCont from "../components/GlassSoftwareCont";
import { ReactIco, VisualStuio, Cpp, JavaScript } from "../resources/Icons";

function Software(){
    return(
        <div>
            <TitleHead>
                Software I use
            </TitleHead>
            <InfoCont>
                <Info>
                    Here is the software i regularly use to create my projects                    
                </Info>
            </InfoCont>
            <GridContainer>
                <GlassSoftwareCont
                    wdt="100%"
                    high="auto"
                    softTitle="React"
                    softLink="https://reactjs.org/"
                    softIcon={<ReactIco width="70px" height="70px"/>}
                    softDesc="JavaScript libarary for building user interfaces"
                />
                <GlassSoftwareCont
                    wdt="100%"
                    high="auto"
                    softTitle="Visual studio"
                    softLink="https://visualstudio.microsoft.com/"
                    softIcon={<VisualStuio width="70px" height="70px"/>}
                    softDesc="IDE I use for my c++ projects"
                />
                <GlassSoftwareCont
                    wdt="100%"
                    high="auto"
                    softTitle="JavaScript"
                    softLink="https://www.javascript.com/"
                    softIcon={<JavaScript width="70px" height="70px"/>}
                    softDesc="Frontend coding language"
                />
                <GlassSoftwareCont
                    wdt="100%"
                    high="auto"
                    softTitle="C++"
                    softLink="https://isocpp.org/"
                    softIcon={<Cpp width="70px" height="70px"/>}
                    softDesc="General purpose coding language"
                />
            </GridContainer>
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
    padding-left: 12px;
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

export default Software;