import React from 'react';
import { Route } from 'react-router-dom';

import { Container, Grid } from '@material-ui/core';

import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import { ShopPageStyled } from './shop.styles';

const ShopPage = ({ match }) => {
	return (
		<ShopPageStyled>
			<Container maxWidth="lg">
				<Grid container spacing={ 0 }>
					<Grid item xs={ 12 }>
						<h1>Collections</h1>
					</Grid>
					<Grid item xs={ 12 }>
						<Route exact path={ `${ match.path }` } component={ CollectionsOverview }/>
						<Route path={ `${ match.path }/:collectionId` } component={ CollectionPage }/>
					</Grid>
				</Grid>
			</Container>
		</ShopPageStyled>
	);
};

export default ShopPage;
