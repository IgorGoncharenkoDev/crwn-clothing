import React from 'react';
import { Link } from 'react-router-dom';

import { ButtonStyled } from './button.styles';

const Button = ({ href, to, children, ...buttonProps }) => {
	if (href) {
		return (
			<ButtonStyled as="a" href={ href } { ...buttonProps }>
				{ children }
			</ButtonStyled>
		)
	}

	if (to) {
		return (
			<ButtonStyled as={ Link } to={ to } { ...buttonProps }>
				{ children }
			</ButtonStyled>
		)
	}

	return (
		<ButtonStyled as="button" { ...buttonProps }>
			{ children }
		</ButtonStyled>
	)
};

export default Button;
