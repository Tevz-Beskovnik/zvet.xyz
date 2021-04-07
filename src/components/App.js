import { BrowserRouter as Router } from "react-router-dom";
import MainContainer from "./PageBody";
import NavBar from "./NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";

function App() {
  return (
    <Container className="row">
      <Router>
        <NavBar/>
        <MainContainer/>
      </Router>
    </Container>
  );
}

const Container = styled.div`
    overflow: hidden;
    /*display: grid;
    grid-template-columns: 22% 78%;*/
    background: linear-gradient(300deg, #C85549, #B63277, #751F83);
    height: 100%;
    width: 100%;
    max-height: 200vh;
    margin: 0;
    padding: 0;
`;

export default App;