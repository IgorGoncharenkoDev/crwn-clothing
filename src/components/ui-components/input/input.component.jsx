import React from 'react';

import { FormControl, Label, InputStyled, TextareaStyled } from './input.style';

const Input = ({ id, label, value, handleChange, ...inputProps }) => {
	return (
		<FormControl>
			{
				label && (
					<Label htmlFor={ id } shrink={ value.length }>
						{ label }
					</Label>
				)
			}
			<InputStyled
				id={ id }
				value={ value }
				onChange={ handleChange }
				{ ...inputProps }
			/>

			{/*<TextareaStyled/>*/}
		</FormControl>
	)
};

export default Input;
