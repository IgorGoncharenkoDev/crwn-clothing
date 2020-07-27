import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartDropdownHidden } from '../../redux/cart/cart.selectors';

import { toggleCartDropdown } from '../../redux/cart/cart.actions';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { auth } from '../../firebase/firebase.utils';

import { Container, Grid, Box } from '@material-ui/core';

import { HeaderStyled, LogoContainer, Options, Option } from './header.styles';

import { ReactComponent as Logo } from '../../assets/images/logos/crown.svg';

const Header = ({ currentUser, hidden, toggleCartDropdown }) => (
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
						<Option to="/" onClick={ () => { !hidden && toggleCartDropdown() } }>Home</Option>
						<Option to="/shop" onClick={ () => { !hidden && toggleCartDropdown() } }>Shop</Option>
						<Option to="/" onClick={ () => { !hidden && toggleCartDropdown() } }>Contact</Option>
						{
							currentUser ? (
								<Option
									as="span"
									onClick={ () => { auth.signOut(); !hidden &&  toggleCartDropdown(); } }>
									Log Out
								</Option>
							) : (
								<Option to="/log-in" onClick={ () => { !hidden && toggleCartDropdown() } }>
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

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartDropdownHidden
});

const mapDispatchToProps = dispatch => ({
	toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
