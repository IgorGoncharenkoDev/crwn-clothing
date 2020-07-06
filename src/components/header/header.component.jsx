import React from 'react';
import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { auth } from '../../firebase/firebase.utils';

import { Container, Grid, Box } from '@material-ui/core';

import { HeaderStyled, LogoContainer, Options, Option } from './header.styles';

import { ReactComponent as Logo } from '../../assets/images/logos/crown.svg';

const Header = ({ currentUser, hidden }) => (
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
						<Option to="/">Contact</Option>
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
				<Grid item xs="auto">
					<Box position="relative">
						<React.Fragment>
							<CartIcon/>
							{
								hidden || <CartDropdown/>
							}
						</React.Fragment>
					</Box>
				</Grid>
			</Grid>
		</Container>
	</HeaderStyled>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser, hidden
});

export default connect(mapStateToProps)(Header);
