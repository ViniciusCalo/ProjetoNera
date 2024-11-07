import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 170px;
    position: relative;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  `

  export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  `

  export const IconeSala = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid ${({ color }) => color};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const IconImage = styled.img`
  width: 50%;
  height: 50%;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  background: #f5f5f5;
  border-radius: 12px;
  padding: 5px 10px;
  width: 90%;
  justify-content: center;
`;

export const UserIcon = styled(FaUserAlt)`
  color: #135794;
  margin-right: 8px;
`;

export const TextoInfo = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

