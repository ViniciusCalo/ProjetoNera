import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SwitchProfile = ({ width = '200px', height = '40px', onClick, value }) => {
    const [flexDirection, setFlexDirection] = useState("row");

    useEffect(() => {
        if (value === 'teacher') {
            setFlexDirection("row-reverse");
        } else {
            setFlexDirection("row");
        }
    }, [value]);

    return (
        <ViewSwitch style={{ width, height, flexDirection }}>
            <Switch onClick={onClick}>
                <SwitchText>
                    {value === 'teacher' ? 'Professor' : 'Aluno'}
                </SwitchText>
            </Switch>
        </ViewSwitch>
    );
};

export default SwitchProfile;

// Estilos com styled-components
const ViewSwitch = styled.div`
    display: flex;
    background-color: white;
    border: 1px solid #BBBBBB;
    border-radius: 18px;
    margin-top: 2%;
`;

const Switch = styled.div`
    width: 55%;
    height: 100%;
    background-color: #135794;
    border: 2px solid #0F406B;
    border-radius: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const SwitchText = styled.span`
    font-size: 14px;
    font-weight: bold;
    color: white;
`;
