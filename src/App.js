import { createGlobalStyle } from "styled-components";
import TopBar from "./Components/TopBar";
import Title from "./Components/Title";
import Comp from "./Components/Comp";
const GlobalStyles = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    box-sizing : border-box;
    background: #212529;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  html{
    font-size: 62.5%;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <TopBar />
      <Title />
      <Comp />
    </>
  );
}
