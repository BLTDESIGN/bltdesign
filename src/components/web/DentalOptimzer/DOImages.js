import React from 'react';

export const DoImages = props => {
	const { item } = props;
	return (
		<div ng-repeat="image in store.images.slice(0, 1)">
			<div className={item.class}>
				<img
					className={item.border}
					src={require(`../../../assets/${item.imagesrc}`)}
					width="100%"
					alt={item.alt}
				/>
			</div>
		</div>
	);
};

// style={{ opacity: '1' }}

export const DoImages24 = props => {
	const { item } = props;

	return (
		<div ng-repeat="image in store.images.slice(2, 4)">
			<div className={item.class}>
				<img
					className={item.border}
					src={require(`../../../assets/${item.imagesrc}`)}
					width="100%"
					alt={item.alt}
				/>
			</div>
		</div>
	);
};
