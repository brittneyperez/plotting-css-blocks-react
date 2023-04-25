import GlobalStyles from "./components/styles/Global";
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { Main } from "./components/styles/Main.styled";
import Subcontent from "./components/Subcontent";
import Advertisement from "./components/Advertisement";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = { tablet: '775px', mobile: '675px' }
  
  return (
    <ThemeProvider theme={theme}>
      <>
        <div className="App">
          <GlobalStyles />
          <Container>
            <Header />
            <div className="body">
              <Navigation />
              <Main>
                <div className="subcontents">
                  <Subcontent />
                  <Subcontent />
                  <Subcontent />
                </div>
                <Advertisement />
              </Main>
            </div>
          </Container>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
