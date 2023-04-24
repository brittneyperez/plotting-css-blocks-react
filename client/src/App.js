import GlobalStyles from "./components/styles/Global";
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { Main } from "./components/styles/Main.styled";
import Subcontent from "./components/Subcontent";
import Advertisement from "./components/Advertisement";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Container>
        <Header />
        <Navigation />
        <Main>
          Main
          <Subcontent />
          <Subcontent />
          <Subcontent />
          <Advertisement />
        </Main>
      </Container>
    </div>
  );
}

export default App;
