import React, { useState, useEffect } from 'react';

import MenuItem from '../menu-item/menu-item.component';

import SHOP_DATA from '../../data/shop.data';

import { DirectoryMenuStyled } from './directory-menu.styles';

const DirectoryMenu = () => {
	const [menuSections, setMenuSections] = useState([]);

	useEffect(() => {
		setMenuSections(SHOP_DATA);
	}, []);

	return (
		<DirectoryMenuStyled>
			{
				menuSections.map(({ id, ...sectionProps}) => (
					<MenuItem key={ id } { ...sectionProps } />
				))
			}
		</DirectoryMenuStyled>
	)
};

export default DirectoryMenu;
