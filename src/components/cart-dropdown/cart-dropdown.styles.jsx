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

export const EmptyMessage = styled('div')`
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
`;

export const CartItems = styled('div')`
	height: 260px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
