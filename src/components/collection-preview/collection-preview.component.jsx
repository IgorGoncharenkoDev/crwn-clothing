import React from 'react';

import { Grid } from '@material-ui/core';

import CollectionItem from '../collection-item/collection-item.component';

import { CollectionPreviewStyled, Title } from './collection-preview.styles';

const CollectionPreview = ({ title = 'Collection Preview Title', items = [] }) => {
	return (
		<CollectionPreviewStyled>
			<Grid container spacing={ 4 }>
				<Grid item xs={ 12 }>
					<Title>{ title }</Title>
				</Grid>
				<Grid item xs={ 12 }>
					<Grid container spacing={ 4 }>
						{
							items.filter((item, i) => i < 4).map(({ id, ...collectionProps }) => (
								<Grid item xs={ 6 } md={ 3 } key={ id }>
									<CollectionItem { ...collectionProps }/>
								</Grid>
							))
						}
					</Grid>
				</Grid>
			</Grid>
		</CollectionPreviewStyled>
	);
};

export default CollectionPreview;
