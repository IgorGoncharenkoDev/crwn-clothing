import styled from 'styled-components';

export const CartItemStyled = styled('div')`
  display: flex;
	width: 100%;
  height: 80px;
  margin-bottom: 15px;
`;

export const Image = styled('img')`
	width: 30%;
`;

export const Details = styled('div')`
	width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const Name = styled('div')`
	font-size: 16px;
`;

export const Price = styled('div')`
	font-size: 16px;
`;
