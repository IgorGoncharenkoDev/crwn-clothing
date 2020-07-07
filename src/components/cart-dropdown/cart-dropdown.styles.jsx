import styled from 'styled-components';

export const CartDropdownStyled = styled('div')`
	position: absolute;
  width: 240px;
  height: 360px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 60px;
  right: -10px;
  z-index: 5;
`;

export const CartItems = styled('div')`
	height: 260px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
