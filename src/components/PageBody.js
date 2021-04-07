import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import Home from "../pages/Home";
import Playlist from "../pages/Playlist";
import Done from "../pages/Done";
import Contacts from "../pages/Contacts";
import Doing from "../pages/Doing";

function MainContainer(){
    useEffect(() => {
        document.title = "Tevž Beškovnik";
    })

    return (
        <MainCont className="col-lg-9">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/done" component={Done}/>
                <Route exact path="/doing" component={Doing}/>
                <Route exact path="/playlist" component={Playlist}/>
                <Route exact path="/contacts" component={Contacts}/>
            </Switch>
        </MainCont>
    );
}

const MainCont = styled.main`
    max-height: 200vh;
    padding: 30px;
    margin: 0;
    padding-top: 60px;
    padding-bottom: 60px;
    padding-left: 40px;
    padding-right: 25px;
    max-height: 100vh;
    color: #e0e0e0;
    font-size: 22px;
    overflow: hidden;
    font-family: "Karla",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
`;

export default MainContainer;