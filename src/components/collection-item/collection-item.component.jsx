import React from 'react';

import { CollectionItemStyled, ImageContainer, Footer, Name, Price } from './collection-item.styles';

const CollectionItem = ({ name, price, imageUrl }) => (
	<CollectionItemStyled>
		<ImageContainer style={{ backgroundImage: `url(${ imageUrl })`}} />
		<Footer>
			<Name>{ name }</Name>
			<Price>{ price }</Price>
		</Footer>
	</CollectionItemStyled>
);

export default CollectionItem;
