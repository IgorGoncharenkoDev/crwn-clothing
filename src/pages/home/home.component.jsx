import React from 'react';

import { Container, Grid } from '@material-ui/core';

import DirectoryMenu from '../../components/directory-menu/directory-menu.component';

import { HomePageStyled } from './home.styles';

const HomePage = () => (
	<HomePageStyled>
		<Container maxWidth="md">
			<Grid container spacing={ 0 }>
				<Grid item xs={ 12 }>
					<DirectoryMenu/>
				</Grid>
			</Grid>
		</Container>
	</HomePageStyled>
);

export default HomePage;
