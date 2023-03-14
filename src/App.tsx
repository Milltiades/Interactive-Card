import { useState } from "react";
import { useForm } from "react-hook-form";
import styled, { createGlobalStyle } from "styled-components";
import InputMask from "react-input-mask";

function App() {

  const [isSubmited, setIsSubmited] = useState<boolean>(false);
  
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const CardHolder = watch("cardHolder");
  const CardNumber = watch("cardNumber");
  const MM = watch("mm");
  const YY = watch("yy");
  const CVC = watch("cvc");
  const onSubmit = () => {
    setIsSubmited(true)
  };
  const onContinue = () => {
    setIsSubmited(false);
    window.location.reload();
  }

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
            <BackP>{CVC ? CVC : "000"}</BackP>
          </ImgBack>
          <ImgFront>
            <Circles>
              <BigCircle />
              <LilCircle />
            </Circles>
            <FrontH1>{CardNumber ? CardNumber : "0000 0000 0000 0000"}</FrontH1>
            <NameDate>
              <FrontP> {CardHolder ? CardHolder : "Name Surname"}</FrontP>
              <FrontP>
                {MM ? MM : "00"}/{YY ? YY : "00"}
              </FrontP>
            </NameDate>
          </ImgFront>
        </MainCard>
        <MainContent display={isSubmited ? "none" : "flex"}>
         

          <form action="">
            <Label htmlFor="">
              Cardholder Name
              <Input
                border={errors.cardHolder && "1px solid #FF5050"}
                maxLength={30}
                type="text"
                placeholder="e.g. Jane Appleseed"
                {...register("cardHolder", {
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: "Wrong format, letters only",
                  },
                  required: {
                    value: true,
                    message: "Can’t be blank",
                  },
                })}
              />
            </Label>
            <ErrorText>
              {" "}
              {errors.cardHolder && errors.cardHolder.message}
            </ErrorText>
            <Label htmlFor="">
              Card Number
              <StyledInputMask
                border={errors.cardNumber && "1px solid #FF5050"}
                type="text"
                placeholder="e.g. 1234 5678 9123 0000"
                {...register("cardNumber", {
                  required: {
                    value: true,
                    message: "Can’t be blank",
                  },
                })}
                mask="9999 9999 9999 9999"
              />
            </Label>
            <ErrorText style={{top:window.innerWidth > 1199 ? "442px" :  "167px" }}>
              {" "}
              {errors.cardNumber && errors.cardNumber.message}
            </ErrorText>
            

            <DateLabel>
              <Label style={{ width: "100%" }} htmlFor="">
                EXP. Date MM/YY
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <SmallInput
                    maxLength={2}
                    minLentgh={1}
                    min={1}
                    max={12}
                    border={errors.mm && "1px solid #FF5050"}
                    style={{ marginRight: "8px" }}
                    type="text"
                    placeholder="MM"
                    {...register("mm", {
                      pattern: {
                        value: /^[0-9 ]+$/,
                        message: "numbers only",
                      },
                      required: {
                        value: true,
                        message: "Can’t be blank",
                      },
                    })}
                  />
                  <SmallInput
                    maxLength={2}
                    minLentgh={1}
                    min={23}
                    max={30}
                    border={errors.yy && "1px solid #FF5050"}
                    style={{ marginRight: "11px" }}
                    type="text"
                    placeholder="YY"
                    {...register("yy", {
                      pattern: {
                        value: /^[0-9 ]+$/,
                        message: "numbers only",
                      },
                      required: {
                        value: true,
                        message: "Can’t be blank",
                      },
                    })}
                  />
                </div>
              </Label>

              <Label style={{ width: "100%" }}>
                (CVC)
                <Input
                  border={errors.cvc && "1px solid #FF5050"}
                  maxLength={3}
                  minLentgh={3}
                  type="text"
                  placeholder="e.g. 123"
                  {...register("cvc", {
                    pattern: {
                      value: /^[0-9 ]+$/,
                      message: "numbers only",
                    },
                    required: {
                      value: true,
                      message: "Can’t be blank",
                    },
                  })}
                />
              </Label>
            </DateLabel>

            <ErrorTextMonth>
              {" "}
              {errors.mm || errors.yy || errors.cvc
                ? errors.mm && errors.mm.message ||
                  errors.yy && errors.yy.message ||
                  errors.cvc && errors.cvc.message
                  ? errors.mm && errors.mm.message || errors.yy && errors.yy.message || errors.cvc && errors.cvc.message
                  : "Can’t be blank"
                : null}
            </ErrorTextMonth>

            <Button onClick={handleSubmit(onSubmit)}>Confirm</Button>
          </form>
        </MainContent>
        <SubmitedDiv display={isSubmited ? "flex" : "none"}>
          <CompletedImg src="/assets/images/icon-complete.svg" alt="" />
          <CompletedH1>THANK YOU!</CompletedH1>
          <CompletedP>We’ve added your card details</CompletedP>
          <Button onClick={onContinue}>Continue</Button>
        </SubmitedDiv>

      </Main>
    </Full>
  );
}

export default App;

const CompletedH1 = styled.h1`
margin: 35px auto 0 auto;
font-size: 28px;
line-height: 36px;
text-align: center;
letter-spacing: 3.42222px;
color: #21092F;
`

const CompletedP = styled.p`
margin: 16px auto 33px auto;
  font-weight: 500;
font-size: 18px;
line-height: 23px;
text-align: center;
color: #8F8694;

`

const SubmitedDiv = styled.div<any>`
padding: 0 24px;
width: 100%;
display: ${(props) => props.display};
flex-direction: column;
position: relative;
top: -11px;
@media (width > 1200px) {
  width: 50%;
  padding: 305px 15.76% 0 103px;
}
  
`
const CompletedImg = styled.img`
  margin: 0 auto;
`
const ErrorText = styled.p<any>`
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: #ff5050;
  position: absolute;
  top: 77px;
  @media (width > 1200px) {
    top: 352px;
  }
`;
const ErrorTextMonth = styled(ErrorText)`
  top: 260px;
  @media (width > 1200px) {
    top: 535px;
  }
`;

const DateLabel = styled.div`
  display: flex;
  flex-direction: row;
`;

const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #21092f;
  position: relative;
`;
const StyledInputMask = styled(InputMask)<any>`
  margin-top: 9px;
  width: 100%;
  background: transparent;
  border-radius: 8px;
  border: 1px solid #dfdee0;
  border: ${(props) => props.border};
  padding: 11px 0 11px 16px;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;

  &::placeholder {
    color: #21092f;
    mix-blend-mode: normal;
    opacity: 0.25;
  }
`;

const ExpDateCVCH2 = styled.div`
  display: flex;
  flex-direction: row;
`;
const ExpDateCVCInputs = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 28px;
`;

const Button = styled.button`
  margin-top: 15px;
  width: 100%;
  border: none;
  background: #21092f;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  padding: 15px;
  cursor: pointer;
  margin-bottom: 45px;
`;

const Input = styled.input<any>`
  margin-top: 9px;
  width: 100%;
  background: transparent;
  border: 1px solid #dfdee0;
  border: ${(props) => props.border};
  border-radius: 8px;
  padding: 11px 0 11px 16px;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  &::placeholder {
    color: #21092f;
    mix-blend-mode: normal;
    opacity: 0.25;
  }
`;

const SmallInput = styled(Input)`
  width: 100%;
  margin-bottom: 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  &::placeholder {
    color: #21092f;
    mix-blend-mode: normal;
    opacity: 0.25;
  }
`;

const MainContent = styled.div<any>`
  display: ${(props) => props.display};
  flex-direction: column;
  width: 100%;
  padding: 0 24px 0 24px;
  position: relative;
  top: -25px;
  @media (width > 1200px){
    top: 0;
    width: 50%;
    padding: 275px 15.76% 0 103px;
  }
`;
const ContentH2 = styled.h2`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #21092f;
`;

const NameDate = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: flex-end;
`;
const FrontP = styled.p`
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  margin-top: 17px;
  color: white;
  @media (width > 1200px){
    font-weight: 500;
font-size: 14px;
line-height: 18px;
letter-spacing: 2px;
margin-top: 25.5px;
  }
`;

const FrontH1 = styled.h1`
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 2.2px;
  color: #ffffff;
  margin-top: 37px;
  @media (width > 1200px){
font-weight: 500;
font-size: 28px;
line-height: 36px;
letter-spacing: 3.42222px;
margin-top: 64px;

  }
`;

const Circles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 38px;
  
`;
const BigCircle = styled.div`
  width: 30.19px;
  height: 30px;
  border-radius: 50%;
  background: white;

  @media (width > 1200px){
    width: 46.96px;
    height: 47px;
  }
`;
const LilCircle = styled.div`
  width: 13.58px;
  height: 13.5px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid white;
  margin-left: 10.23px;
  @media (width > 1200px){
    width: 21.13px;
    height: 21.15px;
    margin-left: 15.91px;
  }
`;

const MainCard = styled.div`
  position: relative;
  padding: 32px 16px 0 17px;
  display: flex;
  flex-direction: column;
  @media (width > 1200px){
    width: 50%;
    padding: 187px 0 0 11.38888%;
    height: 100vh;
  }
`;

const ImgFront = styled.div`
  width: 285px;
  height: auto;
  border-radius: 6px;
  position: relative;
  top: -60px;
  background-image: url("/assets/images/bg-card-front.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 17.6px 20.89px 20.6px 19px;
  display: flex;
  flex-direction: column;
  @media (width > 1200px){
    width: 447px;
    height: 245px;
    padding: 28px 31.86px 26.5px 26.5px;
    top: 0;
    order: 1;
  }
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
  @media (width > 1200px){
    width: 447px;
    height: 245px;
    padding: 111px 0 0 351px;
    order: 2;
    margin-top: 37px;
  }
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

  @media (width > 1200px) {
    font-weight: 500;
font-size: 14px;
line-height: 18px;
text-align: right;
letter-spacing: 2px;
  }
`;

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: absolute;
   @media (width > 1200px){
    
  flex-direction:row;
  
  }
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
  @media (width > 1200px){
    width: 32%;
    height: 100vh;
  }
`;

const White = styled.div`
  width: 100%;
  height: 464px;
  background: white;
  @media (width > 1200px){
    width: 68%;
    height: 100vh;
  }
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: absolute;

  @media (width > 1200px){
    flex-direction: row;
  }
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
  /* overflow: hidden; */
  font-family: 'Space Grotesk', sans-serif;
}

body {
  min-width: 320px;
  min-height: 100vh;
}






`;
