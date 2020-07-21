import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { Container, Grid } from '@material-ui/core';

import CollectionPageContainer from '../collection/collection.container';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import { ShopPageStyled } from './shop.styles';

const ShopPage = ({ match, dispatch }) => {
	useEffect(() => {
		dispatch(fetchCollectionsStartAsync());
	}, [dispatch]);

	return (
		<ShopPageStyled>
			<Container maxWidth="lg">
				<Grid container spacing={ 0 }>
					<Grid item xs={ 12 }>
						<Route exact path={ `${ match.path }` } component={ CollectionsOverviewContainer }/>
						<Route path={ `${ match.path }/:collectionId` } component={ CollectionPageContainer }/>
					</Grid>
				</Grid>
			</Container>
		</ShopPageStyled>
	);
};

export default connect()(ShopPage);
