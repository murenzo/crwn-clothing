import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import SHOPDATA from "./shop.data";

import "./shop-page.styles.scss";

class ShopPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collections: SHOPDATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop">
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;