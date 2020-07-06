import styled from 'styled-components';

import { ReactComponent as Logo } from '../../assets/images/icons/shopping-bag.svg';

export const CartIconStyled = styled('div')`
	width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(Logo)`
	width: 24px;
	height: 24px;
`;

export const ItemCount = styled('div')`
	position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
