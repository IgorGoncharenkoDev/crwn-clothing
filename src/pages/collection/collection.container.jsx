import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import CollectionPage from './collection.component';
import WithSpinner from '../../hocs/with-spinner/with-spinner.component';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
	isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
