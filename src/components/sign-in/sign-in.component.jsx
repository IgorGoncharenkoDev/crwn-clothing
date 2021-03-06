import React, { useReducer } from 'react';
import { connect } from 'react-redux';

import Box from '@material-ui/core/Box';

import Input from '../ui-components/input/input.component';
import Button from '../ui-components/button/button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import { Title, Subtitle, Form } from '../../pages/log-in/log-in.styles';
import { ButtonsContainer } from '../ui-components/button/button.styles';
import { SignInStyled } from './sign-in.styles';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
	const INITIAL_STATE = {
		email: '',
		password: ''
	};

	const actionTypes = {
		CHANGE: 'CHANGE'
	};

	const formReducer = (state, action) => {
		switch (action.type) {
			case actionTypes.CHANGE:
				return {
					...state,
					[action.payload.name]: action.payload.value
				};
			default:
				return state;
		}
	};

	const [formState, dispatch] = useReducer(formReducer, INITIAL_STATE);

	const { email, password } = formState;

	const handleSubmit = async e => {
		e.preventDefault();

		emailSignInStart(email, password);
	};

	const handleChange = e => {
		const { name, value } = e.target;

		dispatch({
			type: actionTypes.CHANGE,
			payload: { name, value, }
		});
	};

	return (
		<SignInStyled>
			<Title>I already have an account</Title>
			<Subtitle>Sign in with your email and password</Subtitle>

			<Form onSubmit={ handleSubmit }>
				<Input
					id="signInEmail"
					type="email"
					name="email"
					label="Email"
					value={ email }
					required
					handleChange={ handleChange }
				/>
				<Input
					id="signInPassword"
					type="password"
					name="password"
					label="Password"
					value={ password }
					required
					handleChange={ handleChange }
				/>
				<ButtonsContainer>
					<Button type="submit" uppercase>Sign In</Button>
					<Box ml={ 2 }>
						<Button
							type="button"
							googleSignIn
							uppercase
							onClick={ googleSignInStart }
						>
							Sign In With Google
						</Button>
					</Box>
				</ButtonsContainer>
			</Form>
		</SignInStyled>
	)
};

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
