import React, { useReducer } from 'react';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import Input from '../ui-components/input/input.component';
import Button from '../ui-components/button/button.component';

import { Title, Subtitle, Form } from '../../pages/log-in/log-in.styles';
import { SignUpStyled } from './sign-up.styles';
import { ButtonsContainer } from '../ui-components/button/button.styles';

const SignUp = () => {
	const INITIAL_STATE = {
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	};

	const actionTypes = {
		CHANGE: 'CHANGE',
		RESET: 'RESET'
	};

	const formReducer = (state, action) => {
		switch (action.type) {
			case actionTypes.CHANGE:
				return {
					...state,
					[action.payload.name]: action.payload.value
				};
			case actionTypes.RESET:
				return {
					displayName: '',
					email: '',
					password: '',
					confirmPassword: ''
				};
			default:
				return state;
		}
	};

	const [formState, dispatch] = useReducer(formReducer, INITIAL_STATE);

	const { displayName, email, password, confirmPassword } = formState;

	const handleChange = e => {
		const { name, value } = e.target;

		dispatch({
			type: actionTypes.CHANGE,
			payload: { name, value, }
		});
	};

	const handleSubmit = async e => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return false;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);

			await createUserProfileDocument(user, { displayName });

			dispatch({ type: actionTypes.RESET });
		}
		catch (err) {
			console.log('Error when loggin in as an existing user:', err.message)
		}
	};

	return (
		<SignUpStyled>
			<Title>I do not have an account yet</Title>
			<Subtitle>Sign up with your email and password</Subtitle>

			<Form onSubmit={ handleSubmit }>
				<Input
					id="displayName"
					type="text"
					name="displayName"
					label="Name"
					value={ displayName }
					required
					handleChange={ handleChange }
				/>
				<Input
					id="email"
					type="email"
					name="email"
					label="Email"
					value={ email }
					required
					handleChange={ handleChange }
				/>
				<Input
					id="password"
					type="password"
					name="password"
					label="Password"
					value={ password }
					required
					handleChange={ handleChange }
				/>
				<Input
					id="confirmPassword"
					type="password"
					name="confirmPassword"
					label="Confirm password"
					value={ confirmPassword }
					required
					handleChange={ handleChange }
				/>
				<ButtonsContainer>
					<Button type="submit" uppercase>Sign Up</Button>
				</ButtonsContainer>
			</Form>
		</SignUpStyled>
	)
};

export default SignUp;
