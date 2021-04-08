import styled from "styled-components";

function Doing(){
    return(
        <div>
            <TitleHead>
                Who am I
            </TitleHead>
            <InfoCont>
                <Info>
                    Welcome to my personal page, I'm a 17 year old amature developer from Slovenske Konjice, that likes to play around with web development and 3D graphics.
                </Info>
                <Info>
                    I currently study at <Link href="https://sers.si/">SERŠ</Link>, the middle school for electronics and computer science in Maribor. I am currently attending the 3rd year of education.
                </Info>
                <Info>
                    I have also recently achieved 2nd place in the ACM web development compatition (<Link href="http://rtk.ijs.si/2021/rezultati.html#web">here</Link>)
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

const Info = styled.p`
    font-family: "Karla",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    font-color: #f2f2f2;
`;

const Link = styled.a`
    color: #58a6ff;

    &:hover{
        color: #58a6ff;
        text-decoration: underline;
    }
`;

export default Doing;