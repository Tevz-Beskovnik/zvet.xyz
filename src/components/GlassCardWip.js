import styled from "styled-components";
import { Helmet } from "../resources/Icons"

function GlassCardWip({wdt, high, projTitl, projDesc, projLang, projCol, projLink}){
    return(
        <CardShadowMargin>
            <CardShadow width={wdt} height={high}>
                <GlassContainer>
                    <FlexContainer>
                        <TitleLineWrapper>
                            <Icon>
                                <Helmet/>
                            </Icon>
                            <RepoTitle href={projLink}>
                                {projTitl}
                            </RepoTitle>
                        </TitleLineWrapper>
                        <RepoDescription>
                            {projDesc}
                        </RepoDescription>
                        <RepoLanguage>
                            <LangCircle circCol={projCol}/>
                            <RepoLangText>
                                {projLang}
                            </RepoLangText>
                        </RepoLanguage>
                    </FlexContainer>
                </GlassContainer>
            </CardShadow>
        </CardShadowMargin>
    );
}

const CardShadowMargin = styled.div`
padding-top: 9px;
padding-right: 7px;
padding-bottom: 9px;
`;

const CardShadow = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 10px;
    margin-bottom: 18px;
    box-shadow 5px 5px 20px rgba(0, 0, 0, .3);
`;

const GlassContainer = styled.div`
    border-radius: 10px;
    width: 100%;
    height: 100%;
    background: inhernt;
    z-index: 1;
    padding: 20px;
    border-top: 1px solid lightgray;
    border-left: 1px solid lightgray;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, .2);

    &::before {
        z-index: -1;
        background: inhernt;
        filter: blur(10px);
    }
`;

const FlexContainer = styled.div`
    overflow: hidden;
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%
    flex-wrap: wrap;
`;

const TitleLineWrapper = styled.span`
    display: flex;
    flex-flow: row;
    align-items: center;
    margin-bottom: 15px;
`;

const RepoTitle = styled.a`
    font-family: "Karla",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    margin-left: 15px;
    font-size: 21px;
    color: #58a6ff;
    
    &:hover{
        color: #58a6ff;
        text-decoration: underline;
        cursor: pointer;
    }
`;

const Icon = styled.div`
    float: left;
    padding-top: 3px;

    svg{
        float: left;
        fill: #e0e0e0;
        widht: 30px;
        height: 30px;
    }
`;

const RepoDescription = styled.div`
    font-family: "Karla",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    font-size: 18px;
    margin-left: 5px;
`;

const RepoLanguage = styled.div`
    margin-top: auto;
    margin-left: 5px;
    font-family: "Karla",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    font-size: 16px;
    display: flex;
    flex-flow: row;
    align-items: center;
`;

const LangCircle = styled.div`
    border-radius: 50%;
    width: 12px;
    height: 12px;
    margin-top: 2px;
    background-color: ${props => props.circCol}
`;

const RepoLangText = styled.div`
    margin-left: 5px;   
`;

export default GlassCardWip;