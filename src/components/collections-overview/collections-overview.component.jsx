import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPriew } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { CollectionsOverviewStyled } from './collections-overview.styles';

const CollectionsOverview = ({ collections }) => (
	<CollectionsOverviewStyled>
		{
			collections.map(({ id, ...collectionPreviewProps}) => (
				<CollectionPreview key={ id } {...collectionPreviewProps} />
			))
		}
	</CollectionsOverviewStyled>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPriew
});

export default connect(mapStateToProps)(CollectionsOverview);
