import styled from 'styled-components';

export const Box = styled.div`
  margin-top: 5%;
  width: 90%;
  max-width: 1200px;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
  border-radius: 15px;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 95%;
    margin-top: 10%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const textEntrar = styled.p`
  color: #888585;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 300;
`;

export const ButtonEntrar = styled.a`
  text-decoration: none;
  width: 30%;
  height: 40px;
  margin-top: 5%;
  background-color: #034C8C;
  border-radius: 15px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  margin: 5%;
  width: 100%;
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  max-width: 400px;
  border-radius: 15px;
  background-color: #F2B705;
  padding: 40px 20px;
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const Tituloform = styled.h1`
  color: #FFF;
  font-family: Roboto;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const InputE = styled.input`
  width: 80%;
  height: 30px;
  padding: 2%;
  margin: 2%;
  border-radius: 15px;
  border: none;
  font-size: 10px;
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 8px;
`;

export const PasswordContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const InputS = styled.input`
  width: 100%;
  height: 30px;
  padding: 2%;
  border-radius: 15px;
  border: none;
  font-size: 10px;
`;

export const ShowPasswordIcon = styled.span`
  position: absolute;
  right: 10px;
  font-size: 18px;
  cursor: pointer;
  color: #A9A9A9;
  &:before {
    content: ${({ showPassword }) => (showPassword ? "'🙈'" : "'👁️'")};
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-family: Roboto;
  font-size: 12px;
  margin: 4px 0;
  text-align: left;
  width: 80%;
`;

export const Button = styled.button`
  width: 80%;
  height: 40px;
  margin-top: 5%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: none;
  background-color: #034C8C;
  border-radius: 15px;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

export const ButtonG = styled.button`
  width: 80%;
  height: 40px;
  margin-top: 5%;
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
  margin-right: 10px;
`;

export const Text = styled.p`
  color: #000000B2;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 300;
  margin-top: 20px;
  width: 80%;
  @media (max-width: 480px) {
    width: 90%;
    font-size: 12px;
  }
`;

export const Link = styled.a`
  color: #000;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  text-decoration: underline;
`;

export const linha1 = styled.hr`
  width: 40%;
  height: 1px;
  margin: 2%;
  border: none;
  background-color: black;
  border-radius: 15px;
`;

export const linha2 = styled.hr`
  height: 1px;
  margin: 2%;
  width: 40%;
  border: none;
  background-color: black;
  border-radius: 15px;
`;

export const DivLinha = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-top: 10px;
`;
