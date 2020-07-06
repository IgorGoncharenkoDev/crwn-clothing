import React from 'react';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { Container, Grid } from '@material-ui/core';

import { HeaderStyled, LogoContainer, Options, Option } from './header.styles';

import { ReactComponent as Logo } from '../../assets/images/logos/crown.svg';

const Header = ({ currentUser }) => (
	<HeaderStyled>
		<Container>
			<Grid container spacing={ 4 }>
				<Grid item xs="auto">
					<LogoContainer to="/">
						<Logo/>
					</LogoContainer>
				</Grid>
				<Grid item xs="auto" style={{marginLeft: 'auto' }}>
					<Options>
						<Option to="/">Home</Option>
						<Option to="/shop">Shop</Option>
						<Option to="/contact">Contact</Option>
						{
							currentUser ? (
								<Option as="span" onClick={ () => auth.signOut() }>
									Log Out
								</Option>
							) : (
								<Option to="/log-in">
									Log In
								</Option>
							)
						}

					</Options>
				</Grid>
			</Grid>
		</Container>
	</HeaderStyled>
);

const mapStateToProps = state => ({
	currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
