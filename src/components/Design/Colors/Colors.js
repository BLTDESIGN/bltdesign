import React from 'react';

const colors = props => {
	const { clr } = props;
	return clr.map((item, index) => {
		return (
			<div ng-repeat="color in image.colors" key={index}>
				<li>
					<div className="square-legend" style={{ background: `${item.tone}` }} />
					{item.title}
				</li>
			</div>
		);
	});
};

export default colors;
