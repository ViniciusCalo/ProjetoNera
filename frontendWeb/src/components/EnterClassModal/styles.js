import styled from "styled-components";

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin: 10px 0;
  text-align: center;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
  width: 80%;
  text-align: center;
  font-size: 16px;
  margin-bottom: 20px;
  background-color: #e0e7ff; /* Tom azul claro */
  color: #5a5a5a;
  outline: none;

  &::placeholder {
    color: #7a7a7a;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  background-color: #1e3a8a; /* Azul escuro */
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #2c5282;
  }
`;
