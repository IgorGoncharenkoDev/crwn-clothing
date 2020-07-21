import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { Container, Grid } from '@material-ui/core';

import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import WithSpinner from '../../hocs/with-spinner/with-spinner.component';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import { ShopPageStyled } from './shop.styles';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match, isCollectionFetching, dispatch }) => {
	useEffect(() => {
		dispatch(fetchCollectionsStartAsync());
	}, [dispatch]);

	return (
		<ShopPageStyled>
			<Container maxWidth="lg">
				<Grid container spacing={ 0 }>
					<Grid item xs={ 12 }>
						<h1>Collections</h1>
					</Grid>
					<Grid item xs={ 12 }>
						<Route
							exact
							path={ `${ match.path }` }
							render={ props => <CollectionsOverviewWithSpinner isLoading={ isCollectionFetching } { ...props }/> }
						/>
						<Route
							path={ `${ match.path }/:collectionId` }
							render={ props => <CollectionPageWithSpinner isLoading={ isCollectionFetching } { ...props } /> }
						/>
					</Grid>
				</Grid>
			</Container>
		</ShopPageStyled>
	);
};

const mapStateToProps = createStructuredSelector({
	isCollectionFetching: selectIsCollectionFetching
});

export default connect(mapStateToProps)(ShopPage);
