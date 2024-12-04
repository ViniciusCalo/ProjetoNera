import styled from "styled-components";

export const BtnVoltar = styled.button`
  background: transparent;
  border: none;
  padding: 5px;
`;

export const iconButton = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

export const EditNameInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 200px;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  outline: none;

  &:focus {
    border-color: #135794;
  }
`;

export const UserName = styled.p`
  color: #000;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 400;
  margin: 0;
`;

export const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 15px;
  color: #333;
  border-bottom: 2px solid #f29f05;
  padding-bottom: 5px;
`;

export const NotificationText = styled.p`
  font-size: 16px;
  color: #555;
  font-family: 'Roboto', sans-serif;
  margin: 0;
`;

export const NotificationButton = styled.button`
  margin-top: 10px;
  color: #007bff;
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`;
