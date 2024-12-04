import styled from "styled-components";

export const Box = styled.div`
  margin-top: 5%;
  width: 80%;
  height: 80vh;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  bottom: 0;
  border-radius: 15px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 480px) {
    margin-top: 10%;
    width: 90%;
    height: 90vh;
    display: flex;
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 70vh;

  @media (max-width: 480px) {
    height: 50vh;
  }
`;

export const Logo = styled.img`
  margin: 5%;
  flex-shrink: 0;
  width: 40%;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -12%;
  width: 70%;
  height: 450px;
  z-index: 0;
  border-radius: 15px;
  background-color: #f2b705;
  padding-top: 20px;

  @media (max-width: 480px) {
    width: 80%;
  }
`;

export const InputE = styled.input`
  width: 80%;
  height: 30px;
  padding: 2%;
  margin: 10px 0;
  border-radius: 15px;
  border: none;
  font-size: 10px;
`;

export const PasswordContainer = styled.div`
  position: relative;
  width: 80%;
  margin: 10px 0;
`;

export const InputS = styled.input`
  width: 100%;
  height: 30px;
  padding: 2%;
  border-radius: 15px;
  border: none;
  font-size: 10px;
`;

export const ShowPasswordButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  width: 80%;
  height: 30px;
  margin: 2%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: none;
  background-color: #034c8c;
  border-radius: 15px;
  color: white;
`;

export const ButtonC = styled.a`
  text-decoration: none;
  width: 80%;
  height: 30px;
  margin: 2%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: none;
  background-color: #034c8c;
  border-radius: 15px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonG = styled.button`
  width: 80%;
  height: 30px;
  margin: 2%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: none;
  background-color: white;
  border-radius: 15px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const icon = styled.img`
  margin-right: 10%;
`;

export const div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  width: 70%;
`;

export const Text = styled.p`
  margin: 2%;
  font-size: 1.5em;
`;

export const Link = styled.a`
  color: #000;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
`;

export const linha1 = styled.hr`
  position: absolute;
  width: 40%;
  height: 1px;
  margin: 2%;
  right: 0;
  border: none;
  background-color: black;
  border-radius: 15px;
`;

export const linha2 = styled.hr`
  position: absolute;
  height: 1px;
  margin: 2%;
  width: 40%;
  border: none;
  background-color: black;
  border-radius: 15px;
  left: 0;
`;

export const DivLinha = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60%;
`;

export const DivButton = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  background-color: #f2b705;
  width: 70%;
  border-radius: 30px 30px 0px 30px;

  @media (max-width: 480px) {
    width: 80%;
  }
`;

export const ButtonProf = styled.a`
  color: #fff;
  font-family: Roboto;
  font-size: 150%;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 50%;
  height: 120px;
  bottom: 538px;
  text-decoration: none;
  cursor: pointer;
  background-color: #f29f05;
  border-radius: 30px 30px 0px 30px;
`;

export const ButtonAlu = styled.a`
  text-decoration: none;
  color: #fff;
  font-family: Roboto;
  font-size: 150%;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 50%;
  height: 120px;
  bottom: 538px;
  cursor: pointer;
  background-color: #f2b705;
  border-radius: 30px;
`;
