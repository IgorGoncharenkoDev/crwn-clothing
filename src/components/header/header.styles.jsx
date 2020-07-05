import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled('header')`
	height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
	display: block;
  //width: 70px;
	//height: 100%;
  //padding: 25px;
`;

export const Options = styled('div')`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Option = styled (Link)`
	padding: 10px 20px;
  text-transform: uppercase;
  cursor: pointer;
`;
