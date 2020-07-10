import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import { Container, Grid } from '@material-ui/core';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { CollectionPageStyled, Title } from './collection.styles';

const CollectionPage = ({ collection: { title, items } }) => (
	<CollectionPageStyled>
		<Container maxWidth="lg">
			<Grid container spacing={ 4 }>
				<Grid item xs={ 12 }>
					<Title>{ title }</Title>
				</Grid>
				<Grid item xs={ 12 }>
					<Grid container spacing={ 4 }>
						{
							items.map(item => (
								<Grid
									item
									xs={ 12 }
									sm={ 6 }
									md={ 4 }
									lg={ 3 }
									key={ item.id }
									style={{ marginBottom: '30px' }}
								>
									<CollectionItem item={ item } />
								</Grid>
							))
						}
					</Grid>
				</Grid>
			</Grid>
		</Container>
	</CollectionPageStyled>
);

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
