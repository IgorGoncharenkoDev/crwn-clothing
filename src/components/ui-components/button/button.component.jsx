import React from 'react';

import { ButtonStyled } from './button.styles';

const Button = ({ children, ...buttonProps }) => {
	return (
		<ButtonStyled>
			{ children }
		</ButtonStyled>
	)
};

export default Button;
