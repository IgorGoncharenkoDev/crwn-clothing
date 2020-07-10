import styled from 'styled-components';

export const CollectionPageStyled = styled('div')`
	display: flex;
  flex-direction: column;
`;

export const Title = styled('h2')`
	font-size: 38px;
  margin: 0 auto 30px;
  text-transform: uppercase;
`;

export const Items = styled('div')`
	display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;

export const CollectionItem = styled('div')`
	margin-bottom: 30px;
`;
