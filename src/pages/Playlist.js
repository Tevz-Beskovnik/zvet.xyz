import styled from "styled-components";

function Doing(){
    return(
        <div>
            <TitleHead>
                My dev playlist
            </TitleHead>
            <InfoCont>
                <Info>
                    Here are the songs I listen to on spotify while developing things
                </Info>
                <FlexContainer>
                    <CardShadow width="auto" height="auto">
                        <GlassContainer>
                            <iframe title="spotify" src="https://open.spotify.com/embed/playlist/7dpAigpoyoAl9HdkIxuRvw" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media">

                            </iframe>
                        </GlassContainer>
                    </CardShadow>
                </FlexContainer>
            </InfoCont>
        </div>
    );
}

//

const TitleHead = styled.h1`
    font-family: "Karla",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    font-size: 40px;
`;

const InfoCont = styled.div`
    padding-left: 12px;
`;

const Info = styled.p`
    font-family: "Karla",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    font-color: #f2f2f2;
`;

const FlexContainer = styled.div`
    height: 100%;
    display: flex;
    flex-flow: column;
`;

const CardShadow = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 10px;
    margin-bottom: 18px;
    margin-right: auto;
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

export default Doing;