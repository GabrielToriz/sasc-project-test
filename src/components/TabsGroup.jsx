import React, { useState } from 'react';
import styled from 'styled-components';
import Table from './Table'

const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: center;
`;
const types = ['Resumen', 'Indicadores', 'Datos', 'Acciones'];

export const TabsGroup = () => {
    const [active, setActive] = useState(types[0]);
    return (
        <>
        <ButtonGroup>
            {types.map(type => (
            <Tab
                key={type}
                active={active === type}
                onClick={() => setActive(type)}
            >
                {type}
            </Tab>
            ))}
        </ButtonGroup>
        <p />
        <p> Your payment selection: 
          {
            active
            
          } <Table x={20} y={500} /></p>
        </>
    );
};