import React, { useState, useEffect } from 'react';

import { Container, Grid } from '@material-ui/core';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import SHOP_DATA from '../../data/shop.data';

import { ShopPageStyled } from './shop.styles';

const ShopPage = () => {
	const [collections, setCollections] = useState([]);

	useEffect(() => setCollections(SHOP_DATA), []);

	return (
		<ShopPageStyled>
			<Container maxWidth="lg">
				<Grid container spacing={ 0 }>
					<Grid item xs={ 12 }>
						<h1>Collections</h1>
					</Grid>
					<Grid item xs={ 12 }>
						{
							collections.map(({ id, ...collectionPreviewProps}) => (
								<CollectionPreview key={ id } {...collectionPreviewProps} />
							))
						}
					</Grid>
				</Grid>
			</Container>
		</ShopPageStyled>
	);
};

export default ShopPage;
