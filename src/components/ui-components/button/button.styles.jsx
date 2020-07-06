import styled, { css } from 'styled-components';

const colorGoogleBlue = '#4285f4';
const colorGoogleBlueOnHover = '#357ae8';

export const ButtonsContainer = styled('div')`
	display: flex;
	align-items: flex-start;
`;

export const ButtonStyled = styled('button')`
  display: flex;
  justify-content: center;
  align-items: center;
	min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  
  ${ ({ uppercase }) => uppercase && css`
    text-transform: uppercase;
  `}
  
  ${ ({ googleSignIn }) => googleSignIn && css`
    background-color: ${ colorGoogleBlue };
    
    &:hover {
    	color: #fff;
    	background-color: ${ colorGoogleBlueOnHover };
    	border-color: ${ colorGoogleBlueOnHover };
    }
  `}
  
  ${ ({ inverted }) => inverted && css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
  `}
`;
