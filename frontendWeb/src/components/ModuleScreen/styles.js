import styled from "styled-components";

export const Header = styled.header`
    position: relative;
    display: flex;
    align-items: center;
    height: auto;
    width: 80%;
    top: 80px;
    left: 20%;
    
`;

export const IconHeader = styled.img`
    width: 100px;
    @media (max-width: 480px) {  
       width: 80px;
     }
`;

export const Title = styled.h1`
    color: #000;
    font-family: Roboto;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    margin-left: 2%;
        @media (max-width: 480px) {  
       font-size: 48px;
     }

`;

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 80%;
    top: 80px;
    left: 20%;
`;

export const Logo = styled.img`
    top: 30px;
    left: 70%;
    width: 178px;
    height: 199px;
    position: absolute;
     @media (max-width: 480px) {
       left: 50%;    
       width: 80px;
        height: 100px;
     }
`;

export const DivConquista = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 450px;
`;

export const Conquista = styled.img`    
    width: 10%;
    padding-bottom: 20px;
    @media (max-width: 480px) {  
       width: 20%;
     }
`;

export const textConquista = styled.p`
    color: #888585;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
    width: 15%;
        @media (max-width: 480px) {  
       width: 40%;
       font-size: 16px;
     }
`;

export const DivModulo = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 100px;
`;

export const Modulo = styled.img`
    position: absolute;
    width: 10%;
    padding-bottom: 20px;
    @media (max-width: 480px) {  
       width: 20%;
     }
`;

export const CaminhoModulo = styled.img`
    position: absolute;
    width: 20%;
    padding-bottom: 20px;
    @media (max-width: 480px) {  
       width: 40%;
     }
`;

export const M1 = styled(Modulo)`
    top: 0;
    left: 10%;
`;

export const C1 = styled(CaminhoModulo)`
    top: 60px;
    left: 20%;
`;

export const M2 = styled(Modulo)`
    top: 180px;
    left: 40%;
`;

export const C2 = styled(CaminhoModulo)`
    top: 250px;
    left: 50%;
`;

export const M3 = styled(Modulo)`
    top: 380px;
    left: 64%;
`;

export const C3 = styled(CaminhoModulo)`    
    top: 500px;
    left: 50%;
`;

export const M4 = styled(Modulo)`
    top: 640px;
    left: 42%;
`;

