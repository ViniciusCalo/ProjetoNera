import styled from "styled-components";

export const Menu = styled.nav`
    position: fixed;
    height: 100%;
    background: #ffffff;
    border-radius: 0 20px 20px 0;
    width: 5%;
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
    overflow-x: hidden;
    transition: 0.5s;
    z-index: 1;
    &:hover {
        width: 20%;
    }
    `;

export const Lista = styled.ul`
    position: absolute;
    top: 5%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const Item = styled.li`
    list-style: none;
    width: 100%;
    margin-bottom: 15px;
    margin-left: 20px;

    &:hover {
        padding: 5%;
        margin-left: 10px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        background: rgba(3, 76, 140, 0.24);
    }
    `;
export const Item2 = styled.li`
    margin-left: 50%;
    list-style: none;
    width: 100%;
    margin-top: 60px;
    margin-bottom: 60px;
    `;


export const Link = styled.a`
    display: flex;
    align-items: center;
    width: 100%;
    text-decoration: none;
    color: #000000;
`;
export const Icone = styled.img`
    width: 45px;
    height: 45px;
    margin-right: 40px;
`;
export const Icone2 = styled.img`
    width: 35px;
    height: 35px;
`;
export const Texto = styled.p`
    color: #000;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
`;
