import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect} from 'react-redux';

import { Container, Grid } from '@material-ui/core';

import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

import { ShopPageStyled } from './shop.styles';

const ShopPage = ({ match, dispatch }) => {
	useEffect(() => {
		let unsubscribeFromSnapShot = null;

		const collectionRef = firestore.collection('collections');

		// whenever the collectionRef gets updated or
		// whenever this code runs for the first time
		// the collectionRef will send us the snapshot
		// representing the code of our 'collections'-objects array
		collectionRef.onSnapshot(async snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			dispatch(updateCollections(collectionsMap));
		});

		return () => {
			unsubscribeFromSnapShot();
		};
	}, []);

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

export default connect()(ShopPage);
