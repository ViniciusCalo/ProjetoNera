import styled from "styled-components";

export const Container = styled.div`
    top: 30px;
    width: 90%;
    left: 6%;
    display: flex;
    flex-direction: column;
    `;
export const Infos = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    top: 2%;
    min-width: 100vh;
`;
export const imgPerfil = styled.img`
    width: 150px;
    height: 200px;
    border-radius: 50%;
    margin-left: 10%;
    margin-right: 10%;
    `;
export const User = styled.p`
    color: #000;
    font-family: Roboto;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    `;
export const Name = styled.p`
    position: absolute;
    top: 60%;
    color: #000;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    `;
export const ButtonEditar = styled.button`
    background-color: #135794;
    border: none;
    border-radius: 10px;
    width: 200px;
    height: 50px;
    margin-left: 10%;
    margin-right: 10%;
    color: white;
    font-size: 20px;
    `;

export const ContainerC = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 90%;
    top: 30%;
    left: 10%;
    `;
export const Title = styled.h1`
    color: #000;
    font-family: Roboto;
    font-size: 60px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 20%;
    margin-bottom: 2%;
    `;
export const Carrousel = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 150px;
    overflow-y: hidden;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none; 
    }
    `;
export const DivConquista = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;

export const Card = styled.article`
    scroll-snap-align: start;
    border-radius: 100%;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F29F05;
    `;
export const Card1 = styled.article`
scroll-snap-align: start;
border-radius: 100%;
width: 100px;
height: 100px;
display: flex;
align-items: center;
justify-content: center;
background-color: #F20574;
`;


export const textConquistado = styled.p`
    color: #888585;
    margin-top: 5%;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    width: 50%;
    `;

export const ContainerE = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 90%;
    top: 65%;
    left: 10%;
    `;
export const TitleE = styled.h1`
    color: #000;
    font-family: Roboto;
    font-size: 60px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 20%;
    margin-bottom: 5%;
    `;
export const InfoE = styled.div`
    position: absolute;
    min-height: 40vh;
    display: flex;
    width: 100%;
`;

export const CardE = styled.div`
    position: absolute;
    height: 75px;
    width: 25%;
    border: 2px solid #F29F05;
    border-radius: 10px;
    `;

export const CardE1 = styled(CardE)`
    left: 17%;
    top: 40%;
    `;
export const CardE2 = styled(CardE)`
    left: 55%;
    top: 40%;
    `;
export const CardE3 = styled(CardE)`
    left: 17%;
    top: 75%;
    `;
export const CardE4 = styled(CardE)`
    left: 55%;
    top: 75%;
    `;

export const DivIcon = styled.div`
    width: 56px;
    height: 53px;
    flex-shrink: 0;
    position: absolute;
    top: 10%;
    left: 5%;
    border-radius: 10px;
    background: #F29F05;
    display: flex;
    justify-content: center;
    align-items: center;
    `;

export const icon = styled.img`
    width: 36px;
    `;

export const DivText = styled.div`
    position: absolute;
    top: 10%;
    left: 30%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: start;
    `;
export const Text = styled.p`
    color: #F29F05;
    font-family: Roboto;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    `;
export const Text2 = styled.p`
    position: absolute;
    bottom: 40px;
    color: #888585;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    `;
