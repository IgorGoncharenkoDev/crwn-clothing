import styled from 'styled-components';

export const CollectionItemStyled = styled('div')`
	width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled('img')`
	width: 100%;
  height: 350px;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const Footer = styled('footer')`
	width: 100%;
  min-height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled('p')`
	width: 85%;
	margin-top: 4px;
  margin-bottom: 0;
`;

export const Price = styled('p')`
	display: flex;
	justify-content: flex-end;
	width: 15%;
	margin-top: 4px;
  margin-bottom: 0;
`;
