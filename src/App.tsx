import logo from "./logo.svg";
import "./App.css";
import image from './assets/ka.png';
import {
  AppBar,
  Button,
  Container,
  Footer,
  GridContainer,
  Main,
  Page,
  Spacer,
  Theme,
  GridItem,
  Card,
} from "@yakad/ui";

function App() {
  return (
    <Theme mode="dark">
      <Page>
        <Main>
          <AppBar>
            <h1>Practic</h1>
            <Spacer />
            <Button variant="link">Help</Button>
            <Button variant="link">About</Button>
            <Button variant="filled">Log in</Button>
          </AppBar>
          <h1 style={{textAlign:"center"}}>This site will be operational soon</h1>
          <Button variant="text">UK</Button>
          <Container style={{ background: "0" }} maxWidth="md">
            <GridContainer rowGap={1} columnGap={1}>
              <GridItem xl={4} sm={12}>
                <Card>
                  <h2>Card</h2>
                </Card>
              </GridItem>
              <GridItem xl={4} sm={12}>
                <Card>
                  <h2>Card</h2>
                </Card>
              </GridItem>
              <GridItem xl={4} sm={12}>

                <Card>
                  <h2>Card</h2>
                </Card>
              </GridItem>
            </GridContainer>
          </Container>
          <div style={{width:"100px"}}>
          <img src={image}/>
     </div>
        </Main>
      </Page>
         <footer
          style={{
            fontSize: "2.5rem",
            textAlign: "center",
            borderStyle: " double none",
            borderLeftStyle: "none",
            borderRightStyle: "none",
            background: "#7d7d7d7d",
          }}
        >
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.


        </footer>
    </Theme>
  );
}

export default App;
