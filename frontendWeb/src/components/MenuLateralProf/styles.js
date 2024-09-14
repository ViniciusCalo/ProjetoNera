import styled from "styled-components";

export const Menu = styled.nav`
    position: fixed;
    height: 100%;
    background: #ffffff;
    border-radius: 0 20px 20px 0;
    width: 2%;
    padding: 2%;
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
    overflow-x: hidden;
    transition: 0.5s;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &:hover {
        width: 15%;
    }
    `;

export const Lista = styled.ul`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-left: 5px;
    padding-top: 5px;
`;

export const Item = styled.li`
    list-style: none;
    width: 100%;
    margin-bottom: 15px;
    margin-left: 20px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;

    &:hover {
        width: 80%;
    border-radius: 20px;
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
