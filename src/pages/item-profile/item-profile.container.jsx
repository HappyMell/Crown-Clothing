import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import ItemProfilePage from './item-profile.component'

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoaded(state)
})

const ItemProfilePageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(ItemProfilePage);

export default ItemProfilePageContainer