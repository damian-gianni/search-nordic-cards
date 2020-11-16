import React, { lazy } from 'react';

/**
 * DYNAMIC IMPORTS
 */

const importCard = type => lazy(() => import(`./components/Card${type}View`));
const TYPES = ['Grid', 'Stack', 'Gallery', 'Mosaic'];

export default ({ type, onChange }) => {

	const CardComponent = importCard(type);
	const randomCard = () => TYPES[Math.floor(Math.random() * TYPES.length)];

	return (
		<React.Suspense fallback="Loading card...">
			<button onClick={() => onChange(randomCard())}>Change card</button>
			<CardComponent />
		</React.Suspense>
	)
}