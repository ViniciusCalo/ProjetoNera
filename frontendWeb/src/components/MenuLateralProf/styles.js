import styled from "styled-components";

export const Menu = styled.nav`
    position: fixed;
    height: 100%;
    background: #ffffff;
    border-radius: 0 20px 20px 0;
    width: 6%;
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
    transition: 0.5s;
    z-index: 1;
    overflow-y: hidden;
    &:hover {
        width: 20%;
    }

    @media (max-width: 480px) {
        width: 100%;
        height: 6%;
        bottom:0;
        border-radius: 0 0 0 0;

        
        &:hover {
        width: 100%;
    }
    }
    @media (min-width: 1200px) {
     width: 5%
    }
    `;

export const Lista = styled.ul`
    position: absolute;
    top: 5%;
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
      
    @media (max-width: 480px) {
        width: 90%;
        flex-direction: row;
        justify-content: space-around;
        align-items: baseline;
    }
`;

export const Item = styled.li`
    list-style: none;
    width: 100%;
    margin-bottom: 10px;
    margin-left: 20px;
    display: flex;

    &:hover {
        padding: 5%;
        margin-left: 10px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        background: rgba(3, 76, 140, 0.24);
    }

    @media (max-width: 480px) {
        width: 18%;
            &:hover {
            justify-content: center;
            align-items: center;
            padding: 0;
            margin-left: 0;
            margin-radius: 0;
            border-radius: 0;
        }
    }
    `;
export const Item2 = styled.li`
    margin-left: 50%;
    list-style: none;
    width: 100%;
    margin-top: 60px;
    margin-bottom: 60px;

    @media (max-width: 480px) {
        display: none
    }
    `;

export const Item3 = styled.li`
    list-style: none;
    width: 100%;
    margin-left: 20px;
    display: flex;
    &:hover {
        padding: 5%;
        margin-left: 10px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        background: rgba(3, 76, 140, 0.24);
    }

    @media (max-width: 480px) {
        width: 0%;
        margin-bottom: 0;
        margin-left: 0;
            &:hover {
            justify-content: center;
            align-items: center;
            padding: 0;
            margin-left: 0;
            margin-radius: 0;
            border-radius: 0;
        }
    }
    `;

export const Link = styled.a`
    display: flex;
    align-items: center;
    width: 50%;
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
    @media (max-width: 480px) {
        display: none
    }
`;
export const Texto = styled.p`
    color: #000;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;

    @media (max-width: 480px) {
        display: none
    }
`;
