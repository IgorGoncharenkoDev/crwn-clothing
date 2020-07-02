import React from 'react';

import { Title, Subtitle, Form } from '../../pages/log-in/log-in.styles';
import { SignUpStyled } from './sign-up.styles';
import { SignInStyled } from '../sign-in/sign-in.styles';

const SignUp = () => {
	return (
		<SignUpStyled>
			<Title>Sign In Component</Title>
			<Subtitle>Sign in with your email and password</Subtitle>
		</SignUpStyled>
	)
};

export default SignUp;
