import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { MenuItemStyled, BackgroundImage, Content, Title, SubTitle } from './menu-item.styles';

const MenuItem = ({ title = 'Menu Item Title', imageUrl, size, routeName }) => {
	let history = useHistory(),
	    match   = useRouteMatch();

	return (
		<MenuItemStyled size={ size } onClick={ () => history.push(`${ match.url }${ routeName }`) }>
			<BackgroundImage style={ { backgroundImage: `url('${ imageUrl }')` } }/>
			<Content>
				<Title>{ title }</Title>
				<SubTitle>Shop now</SubTitle>
			</Content>
		</MenuItemStyled>
	)
};

export default MenuItem;
