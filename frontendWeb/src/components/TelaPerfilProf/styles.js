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
    top: 30px;
    min-width: 100vh;
`;
export const imgPerfil = styled.img`
    width: 150px;
    height: 150px;
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
    font-size: 70px;
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

export const ContainerSalas = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    width: 100%;
    `;
export const Div = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;
export const Sala = styled.div`
    width: 50%;
    height: 200px;
    flex-shrink: 0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    `;
export const S1 = styled(Sala)`
    border: 7px solid #F20574;
    `;
export const S2 = styled(Sala)`
border: 7px solid #135794;
`;
export const S4 = styled(Sala)`
    border: 7px solid #F29F05;
    `;

export const SalaImg = styled.img`
    width: 50%;
    `;

export const SalaName = styled.p`
    color: #F20574;
    font-family: Roboto;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    `;
