import styled from "styled-components";

export const Container = styled.div`
    top: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    `;
export const Infos = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    margin-top: 5%;
    margin-bottom: 2%;
    width: 100%;
`;
export const imgPerfil = styled.img`
    width: 10%;
    height: auto;
    border-radius: 50%;
    margin-left: 10%;
    margin-right: 10%;
    @media (max-width: 768px) {
        width:15% /* Para tablets */
    }

    @media (max-width: 480px) {
        width: 20% /* Para celulares */
    }
    `;
export const User = styled.h1`
    color: #000;
    font-family: Roboto;
    font-style: normal;
    line-height: normal;
    font-size: 36px; /* Tamanho padrão */

    @media (max-width: 768px) {
        font-size: 24px; /* Para tablets */
    }

     @media (max-width: 480px) {
        font-size: 20px; /* Para celulares */
    }
    `;
export const Name = styled.p`
    color: #000;
    font-family: Roboto;
    font-style: normal;
    font-size: 24px; /* Tamanho padrão */

    @media (max-width: 768px) {
        font-size: 16px; /* Para tablets */
    }

    @media (max-width: 480px) {
        font-size: 12px; /* Para celulares */
    }
    `;
export const ButtonEditar = styled.button`
    background-color: #135794;
    border: none;
    border-radius: 10px;
    width: 150px;
    height: 40px;
    margin-left: 10%;
    color: white;
    font-size: 20px;

    @media (max-width: 768px) {
        width: 20%;
        height: 30px;
        font-size: 16px; /* Para tablets */
    }

    @media (max-width: 480px) {
        width: 30%;
        height: 30px;
        font-size: 12px; /* Para celulares */
    }
    `;

export const ContainerC = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    `;
export const Title = styled.h1`
    color: #000;
    font-family: Roboto;
    font-size: 56px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 20%;
    margin-bottom: 2%;

    @media (max-width: 768px) {
        font-size: 42px; /* Para tablets */
    }

    @media (max-width: 480px) {
        font-size: 36px; /* Para celulares */
    }
    `;
export const Carrousel = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 10%;
    overflow-y: hidden;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    gap: 3%;
    padding: 5px;
    margin-left: 7%;

    &::-webkit-scrollbar {
        display: none; 
    }
    `;
export const Trilhas = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 15%;
    padding: 5px;
    gap: 3%;
    margin-left: 7%;
    `;