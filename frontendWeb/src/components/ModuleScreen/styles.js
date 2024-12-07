import styled from "styled-components";

export const Header = styled.header`
    position: relative;
    display: flex;
    align-items: center;
    height: auto;
    width: 80%;
    top: 80px;
    left: 20%;
        @media (max-width: 480px) {  
       top: 40px
     }
    
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
    @media (max-width: 480px) {  
        width: 80%;
        left: 0;
        top: 40px;
     }
`;

export const Logo = styled.img`
    top: 30px;
    left: 70%;
    width: 178px;
    height: 199px;
    position: absolute;
     @media (max-width: 480px) {
       right: 0;  
       top: 50px;
       width: 80px;
       height: 80px;
     }
`;

export const DivConquista = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 450px;
     @media (max-width: 480px) {
         top: 300px;
         left: 40px
     }
`;

export const Conquista = styled.img`    
    width: 10%;
    margin: 10px;
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
        @media (max-width: 480px) {  
       width: 100%;
     }
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
       width: 60%;
     }
`;

export const M1 = styled(Modulo)`
    top: 0;
    left: 10%;
`;

export const C1 = styled(CaminhoModulo)`
    top: 60px;
    left: 20%;
        @media (max-width: 480px) {  
            left: 30%;
            top: 30px;
     }
`;

export const M2 = styled(Modulo)`
    top: 180px;
    left: 40%;
            @media (max-width: 480px) {  
            left: 90%;
            top: 140px;
     }
`;

export const C2 = styled(CaminhoModulo)`
    top: 250px;
    left: 50%;
     @media (max-width: 480px) {  
            left: 40%;
            top: 440px;
     }
`;

export const M3 = styled(Modulo)`
    top: 380px;
    left: 64%;
         @media (max-width: 480px) {  
            left: 30%;
            top: 360px;
     }
`;

export const C3 = styled(CaminhoModulo)`    
    top: 500px;
    left: 50%;
             @media (max-width: 480px) {  
            left: 40%;
            top: 220px;
     }
`;

export const M4 = styled(Modulo)`
    top: 640px;
    left: 42%;
     @media (max-width: 480px) {  
            left: 90%;
            top: 560px;
     }
`;

