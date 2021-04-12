import styled from "styled-components";

function GlassSoftwareCont({wdt, high, softIcon, softTitle, softDesc, softLink}){
    return (
        <CardShadowMargin>
            <CardShadow height={high} width={wdt}>
                <GlassContainer>
                    <FlexContainer>
                        <IconCont>
                            {softIcon}
                        </IconCont>
                        <TitleCont href={softLink}>
                            {softTitle}
                        </TitleCont>
                        <DescCont>
                            {softDesc}
                        </DescCont>
                    </FlexContainer>
                </GlassContainer>
            </CardShadow>
        </CardShadowMargin>
    )
}

const CardShadowMargin = styled.div`
    font-family: "Karla",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    margin: 0;
    padding: 0;
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
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    background: inhernt;
    z-index: 1;
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
    display: flex;
    flew-flow: row;
`;

const IconCont = styled.div`
    height: 100%;
    width: auto;
    margin-right: 20px;
`;

const TitleCont = styled.a`
    display: flex;
    border-left: 2px solid #f2f2f2;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 20%;
    hieght: 100%;
    font-size: 25px;
    text-decoration: none;
    color: #58a6ff;
    justify-content: center;

    &:hover{
        color: #58a6ff;
        text-decoration: underline;
        cursor: pointer;
    }

    &:focus{
        outline: none;
    }
`;

const DescCont = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    border-left: 2px solid #f2f2f2;
    padding-top: 13px;
    padding-bottom: 10px;
    width: 100%;
    font-size: 23px;
    color: #e0e0e0;
`;

export default GlassSoftwareCont;