import styled, { css } from 'styled-components';

export const CheckoutItemStyled = styled('div')`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
`;

export const ImageContainer = styled('div')`
	width: 23%;
	padding-right: 15px;
`;

export const Image = styled('img')`
	width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SharedStyles = css`
	width: 23%;
`;

export const Name = styled('span')`
	${ SharedStyles };
`;

export const Quantity = styled('span')`
	${ SharedStyles };
	display: flex;
	align-items: center;
	padding-left: 20px;
`;

export const Value = styled('span')`
	margin: 0 10px;
`;

export const ArrowButton = styled('button')`
	font-size: 18px;
	background-color: transparent;
	border: none;
	cursor:pointer;
	//background-color: coral;
`;

export const Price = styled('span')`
	${ SharedStyles };
`;

export const RemoveButton = styled('button')`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	padding: 0;
	font-size: 20px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;
