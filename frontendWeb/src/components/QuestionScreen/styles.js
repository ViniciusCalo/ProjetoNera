import styled from "styled-components";

export const Header = styled.header`
    position: relative;
    display: flex;
    justify-content: right;
    align-items: end;
    height: auto;
    width: 100%;
    top: 10px;
    right: 5%;
    
`;

export const Titulo = styled.h1`
    color: #000;
    font-family: Roboto;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
`;

export const Questao = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    top: 10px;

`;

export const Enunciado = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100%;
    top: 10px;
    background: #FFFFFF;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 10px;
`;

export const TextoEnunciado = styled.h1`
    color: #000;
text-align: center;
font-family: Roboto;
font-size: 40px;
font-style: normal;
font-weight: 400;
line-height: 42px; /* 105% */
`;


export const DivImagem = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 100%;
    top: 80px;
    background: #FFFFFF;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 10px;
`;

export const Imagem = styled.img`
    width: 248px;
height: 249px;
flex-shrink: 0;
`;


export const Alternativas = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100%;
    top: 170px;
    background: #FFFFFF;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 10px;
`;

export const Alternativa = styled.button`
    position: relative;
    margin: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 10%;
    background: #FFFFFF;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 10px;
    border: none;
`;

export const AlternativaCorreta = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%;
    top: 10px;
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 10px;
`;

export const TextoAlternativa = styled.h1`
    color: #000;
    font-family: Roboto;
    font-size: 65px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    margin: 0;
`;
export const TextoLinha = styled(TextoAlternativa)`
    position: absolute;
    bottom: 40px;
`;

export const ContainerMenu = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    top: 250px;
    background: #FFFFFF;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 10px;
`;

export const Botao = styled.button`
display: flex;
justify-content: center;
align-items: center;
    margin: 20px;
    height: 70px;
    width: 200px;
    border-radius: 20px;
    background: rgba(92, 178, 235, 0.22);
    border: none;
    font-size: 20px;
    
`;

export const iconButton = styled.img`
    width: 25%;
    flex-shrink: 0;
    margin-right: 10px;
    padding: 5px;
    `;

export const IconTip = styled(iconButton)`
    width: 30%;
    `;

export const BtnReload = styled(Botao)`
`;

export const BtnNext = styled(Botao)`
`;

export const BtnTip = styled(Botao)`
`;

export const BtnVoltar = styled.button`
    background: transparent;
    border: none;
    width: 30%;
`;
export const CotainerModal = styled.div`
margin-top: -10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

`;

export const ImgModal = styled.img`
    width: 20%;
    height: 20%;
`;

export const TituloModal = styled.h1`
color: #000;
font-family: Roboto;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: 42px; /* 105% */
`;

export const TextoModal = styled.p`
color: #000;
font-family: Roboto;
font-size: 40px;
font-style: normal;
text-align: center;
font-weight: 400;
line-height: 42px;
`;










