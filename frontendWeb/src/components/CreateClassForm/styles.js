import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:15px;
`;

export const Form = styled.form`
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid #f29f05;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
  @media (max-width: 480px) {
    font-size: 24px;
    width: 100%;
  }
`;

export const DivInputs = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const DivInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 18px;
  color: #333;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 80%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 1px solid #135794;
  border-radius: 8px;
  &::placeholder {
    color: #135794;
    opacity: 0.5;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const TrackContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  gap: 5px;
  width: 80%;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const TrackCard = styled.div`
  flex: 1 1 calc(33.33% - 20px);
  max-width: calc(33.33% - 20px);
  height: 80%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ selected }) => (selected ? '2px solid #0056b3' : '1px solid #ddd')};
  border-radius: 10px;
  background-color: ${({ selected }) => (selected ? '#dbeaff' : '#fff')};
  cursor: pointer;
  transition: background-color 0.3s, border 0.3s;
  img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
  @media (max-width: 480px) {
    max-width: calc(33.33% - 1px);
    height: 50%;
    font-size: 12px;
    img {
      width: 16px;
      height: 16px;
      margin-right: 5px;
    }
  }
`;

export const Label2 = styled.label`
  font-size: 18px;
  color: #333;
  display: block;
  margin-top: 10%;
  margin-bottom: 10px;
`;

export const Select = styled.select`
  width: 50%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  color: #6296c4;
  option {
    color: #6296c4;
    background-color: #fff;
  }
  &:focus {
    color: #6296c4;
    outline: none;
    border-color: #6296c4;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
  width: 100%;
  padding-bottom: 20px;
`;

export const Button = styled.button`
  width: 20%;
  padding: 12px;
  font-size: 16px;
  color: #fff;
  border: none;
  border-radius: 8px;
  background-color: ${({ cancel }) => (cancel ? '#777' : '#0056b3')};
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ cancel }) => (cancel ? '#555' : '#003c8a')};
  }
  @media (max-width: 480px) {
    width: 40%;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-family: Roboto;
  font-size: 12px;
  margin: 4px 0;
  text-align: center;
  width: 100%;
`;
