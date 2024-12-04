import styled from 'styled-components';
import Modal from 'react-modal';

export const StyledModal = styled(Modal).attrs({
  contentLabel: 'Modal de Dica',
  style: {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
})`
  position: relative;
  inset: auto;
  border-radius: 20px;
  width: 400px;
  max-width: 90%;
  height: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: none;
  background: #fff;
  text-align: center;
`;

export const BackButton = styled.button`
  align-self: flex-start;
  background: transparent;
  border: none;
  padding: 5px;
  cursor: pointer;
`;

export const IconButton = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
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

export const Icon = styled.img`
  width: 60px;
  height: 60px;
`;

export const RoomTitle = styled.h2`
  color: black;
  font-size: 24px;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #555;
  text-align: center;
  margin-bottom: 20px;
`;

export const ImageContainer = styled.div`
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  height: 160px;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 350px;
  height: 150px;
  margin-bottom: 5px;
`;

