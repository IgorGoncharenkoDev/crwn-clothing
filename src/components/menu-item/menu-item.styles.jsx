import styled, { css } from 'styled-components';

export const Content = styled('div')`
	position: absolute;
	height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid black;
  opacity: .7;
`;

export const BackgroundImage = styled('div')`
	width: 100%;
	height: 100%;
  background-position: center;
  background-size: cover;
  transition-duration: 800ms;
`;

export const MenuItemStyled = styled('div')`
	position: relative;
	min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  cursor: pointer;
  overflow: hidden;
  
  ${({ size }) => size === 'large' && css`
		height: 380px;
	` }
  
  &:hover {
  	${ BackgroundImage } {
  		transform: scale(1.1);
  	}
  	
  	${ Content } {
  		opacity: .9;
  	}
  }
  
  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const Title = styled('h1')`
	margin-top: 0;
  margin-bottom: 6px;
	font-weight: bold;
  font-size: 22px;
  color: #4a4a4a;
  text-transform: uppercase;
`;

export const SubTitle = styled('h2')`
	margin: 0;
	font-weight: lighter;
  font-size: 16px;
  text-transform: uppercase;
`;
