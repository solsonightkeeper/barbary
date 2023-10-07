import logo from "./logo.svg";
import "./App.css";
import image from './assets/ka.png';
import styles from "./svgIcon.module.css";
import { ReactComponent as LogoIcon } from "../src/assets/logoicon.svg";
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
  SvgIcon,
  Row,
  Stack,
} from "@yakad/ui";

function App() {
  return (
    <Theme mode="dark">
      <Page>
        <Main>
          <AppBar>
          <SvgIcon size={5}>
                    <LogoIcon />
                </SvgIcon>
                <h1>Natiq</h1>
            <Button variant="text">Quran</Button>
            <Button variant="text">About</Button>
            <Spacer />
            <Button icon={<Symbol icon="menu" />} />
            <Button variant="text">Search</Button>
          </AppBar>
          <Container maxWidth="lg">
            <GridContainer columnGap={12}>
              <GridItem>
            <Row>
          <SvgIcon size={40}>
                    <LogoIcon />
                </SvgIcon>
                </Row>
                </GridItem>
                <GridItem>
                  <Row>
                <h1 style={{fontSize:"5.0rem", color: "#AA8A59  "}}>النّاطِق</h1>
                <h1 style={{fontSize:"5.0rem"}}>الْقُرآنُ</h1>
                </Row>
                <Stack>
                  <p style={{fontSize: "1.7rem"}}>Natiq Quran, Multi mushaf easy to use quran app.
research and translate based.

</p>
<Button variant="filled" style={{margin: "auto"}}>GET START</Button>
<h3 style={{textAlign: "center"}}>or</h3>
<h2 style={{textAlign: "center"}}>Learn More!</h2>

                </Stack>
                </GridItem>
                </GridContainer>          
          </Container>
        </Main>
        <Footer></Footer>
      </Page>
    </Theme>
  );
}

export default App;
