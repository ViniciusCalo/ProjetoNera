import styled from "styled-components";

export const BackButton = styled.button`
  align-self: flex-start;
  background: transparent;
  border: none;
  font-size: 20px;
  color: #333;
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const RoomTitle = styled.h2`
  color: #e63946;
  font-size: 24px;
  margin: 0;
`;

export const TeacherBadge = styled.span`
  background-color: #d7e3fc;
  color: #333;
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 14px;
  margin-top: 5px; /* Espaçamento entre título e nome do professor */
`;

export const Description = styled.p`
  font-size: 14px;
  color: #555;
  text-align: center;
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin: 10px 0;
`;

export const ModuleCard = styled.div`
  background: #f0f0f0;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
  width: 100%;
  text-align: center;
`;

export const ModuleInfo = styled.div`
  font-size: 14px;
  color: #333;
`;

export const StartButton = styled.button`
  padding: 10px 20px;
  background-color: #1e3a8a;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #2c5282;
  }
`;
