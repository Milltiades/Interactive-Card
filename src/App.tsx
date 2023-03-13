import { useForm } from "react-hook-form";
import styled, { createGlobalStyle } from "styled-components";

function App() {
  const {} = useForm();

  return (
    <Full>
      <GlobalStyle />
      <Background>
        <Purple />
        <White />
      </Background>
      <Main>
        <MainCard>
          <ImgBack>
            <BackP>000</BackP>
          </ImgBack>
          <ImgFront>
            <Circles>
              <BigCircle />
              <LilCircle />
            </Circles>
            <FrontH1>0000 0000 0000 0000</FrontH1>
            <NameDate>
              <FrontP>Name Surname</FrontP>
              <FrontP>00/00</FrontP>
            </NameDate>
          </ImgFront>
        </MainCard>
        <MainContent></MainContent>
      </Main>
    </Full>
  );
}

export default App;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 24px 45px 24px;
`

const NameDate = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const FrontP = styled.p`
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  margin-top: 17px;
  color: white;
`;

const FrontH1 = styled.h1`
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 2.2px;
  color: #ffffff;
  margin-top: 37px;
`;

const Circles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const BigCircle = styled.div`
  width: 30.19px;
  height: 30px;
  border-radius: 50%;
  background: white;
`;
const LilCircle = styled.div`
  width: 13.58px;
  height: 13.5px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid white;
  margin-left: 10.23px;
`;

const MainCard = styled.div`
  position: relative;
  padding: 32px 16px 0 17px;
  display: flex;
  flex-direction: column;
`;

const ImgFront = styled.div`
  width: 285px;
  height: 156.21px;
  border-radius: 6px;
  position: relative;
  top: -72px;
  background-image: url("/assets/images/bg-card-front.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 17.6px 20.89px 20.6px 19px;
  display: flex;
  flex-direction: column;
`;

const ImgBack = styled.div`
  width: 286px;
  height: 157px;
  border-radius: 6px;
  align-self: flex-end;
  background-image: url("/assets/images/bg-card-back.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 73.64px 0 0 228.98px;
`;

const BackP = styled.p`
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  text-align: right;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: #ffffff;
  width: 20px;
`;

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: absolute;
`;

const Full = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const Purple = styled.div`
  width: 100%;
  height: 240px;
  background-image: url("/assets/images/bg-main-desktop.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

const White = styled.div`
  width: 100%;
  height: 464px;
  background: white;
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: absolute;
`;

const GlobalStyle = createGlobalStyle`
  :root {
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'Space Grotesk', sans-serif;
}

body {
  min-width: 320px;
  min-height: 100vh;
}





`;
