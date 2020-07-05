import styled, { css } from 'styled-components';

const colorPrimary = 'black';
const colorSecondary = 'grey';

const srinkLabel = css`
	top: -18px;
  font-size: 12px;
  color: ${ colorPrimary};
`;

export const FormControl = styled('div')`
	position: relative;
  margin: 45px 0;
`;

export const Label = styled('label')`
	color: ${ colorSecondary };
	font-size: 16px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 5px;
	top: 10px;
	transition: 300ms ease all;
	
	${({ shrink }) => shrink && css`
		${ srinkLabel };
	`}
`;

export const InputStyled = styled('input')`
	background: none;
  background-color: white;
  color: ${ colorSecondary };
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${ colorSecondary };
  margin: 25px 0;
  
  &:focus {
  	outline: none;
  	
  	& ~ ${ Label } {
  		${ srinkLabel };
  	}
  }
  
  ${({ type }) => type === 'password' && css`
		letter-spacing: 0.3em;
	`}
`;

export const TextareaStyled = styled('textarea')`

`;
