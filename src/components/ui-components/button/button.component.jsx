import React from 'react';

import { ButtonStyled } from './button.styles';

const Button = ({ children, ...buttonProps }) => {
	return (
		<ButtonStyled { ...buttonProps }>
			{ children }
		</ButtonStyled>
	)
};

export default Button;
