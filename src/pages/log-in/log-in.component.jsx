import React from 'react';

import { Container, Grid } from '@material-ui/core';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { LogInStyled } from './log-in.styles';

const LogInPage = () => {
	return (
		<LogInStyled>
			<Container maxWidth="lg" style={{ backgroundColor: '#eee'}}>
				<Grid container spacing={ 4 }>
					<Grid item xs={ 12 } md={ 6 }>
						<SignIn/>
					</Grid>
					<Grid item xs={ 12 } md={ 6 }>
						<SignUp/>
					</Grid>
				</Grid>
			</Container>

		</LogInStyled>
	)
};

export default LogInPage;
