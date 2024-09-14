import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const IconHeader = styled.img`
    width: 5%;
    margin-right: 5%;
`;

export const TitleHeader = styled.h1`
    color: #135794;
    text-align: center;
    font-family: Roboto;
    font-size: 64px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    left: 5%;
`;

export const DivTrilha = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
`;

export const DivTrilha1 = styled(DivTrilha)`
    top: 80px;
    left: 15%;
`;
export const DivTrilha2 = styled(DivTrilha)`
    top: 150px;
    left: 40%;
`;
export const DivTrilha3 = styled(DivTrilha)`
    top: 80px;
    left: 65%;
`;
export const DivTrilha4 = styled(DivTrilha)`
    top: 300px;
    left: 55%;
`;
export const DivTrilha5 = styled(DivTrilha)`
    top: 300px;
    left: 25%;
`;

export const TitleTrilha = styled.h1`
    color: #888585;
    text-align: center;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const ImgTrilha = styled.img`
    width: 120px;
    height: 120px;
    right: 0%;
    top: 0%;
    border-radius: 10px;
`;
