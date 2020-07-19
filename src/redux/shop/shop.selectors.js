import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

// use COLLECTION_ID_MAP if data is not normalized
// const COLLECTION_ID_MAP = {
// 	hats: 1,
// 	sneakers: 2,
// 	jackets: 3,
// 	womens: 4,
// 	mens: 5
// };

const selectShop = state => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	shop => shop.collections
);

export const selectCollection = memoize(collectionUrlParam => {
	return createSelector(
		[selectCollections],
		collections => collections ?
			// IF DATA IS NORMALIZED:
			collections[collectionUrlParam]
			: null

			// IF DATA IS NOT NORMALIZED:
			// find the collection by:
			// the collection.id matching the url parameter of the COLLECTION_ID_MAP object
			// collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
	);
});

export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	collections => collections ? Object.keys(collections).map(
		collection => collections[collection])
		: []

	// collections => Object.values(collections)
);
