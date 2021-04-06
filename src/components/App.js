import { BrowserRouter as Router } from "react-router-dom";
import MainContainer from "./PageBody";
import NavBar from "./NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Router>
        <NavBar />
        <MainContainer />
      </Router>
    </Container>
  );
}

const Container = styled.div`
    font-family: 'Arial';
    display: grid;
    grid-template-columns: 22% 78%;
    background: linear-gradient(300deg, #C85549, #B63277, #751F83);
    height: 100vh;
`;

export default App;