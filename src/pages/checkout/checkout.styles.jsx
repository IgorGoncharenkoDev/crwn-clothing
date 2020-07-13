import styled from 'styled-components';

export const CheckoutStyled = styled('div')`
	width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const Header = styled('header')`
	width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderCell = styled('div')`
	text-transform: capitalize;
	width: 23%;
	
	&:last-child {
		width: 8%;
	}
`;

export const Total = styled('div')`
	font-size: 36px;
`;

export const TestCreditCardMessage = styled('p')`
	font-size: 22px;
	color: red;
	text-align: center;
`;
