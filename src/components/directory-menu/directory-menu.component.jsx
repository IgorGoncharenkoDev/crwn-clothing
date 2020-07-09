import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryMenuStyled } from './directory-menu.styles';

const DirectoryMenu = ({ sections }) => (
	<DirectoryMenuStyled>
		{
			sections.map(({ id, ...sectionProps }) => (
				<MenuItem key={ id } { ...sectionProps } />
			))
		}
	</DirectoryMenuStyled>
);

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
});

export default connect(mapStateToProps)(DirectoryMenu);
