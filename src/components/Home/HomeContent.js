import React from 'react';
import { Link } from 'react-router-dom';

const homeContent = props => {
	const { item } = props;
	return (
		<div className="ng-scope">
			<div className={item.class}>
				<Link to={item.link}>
					<div className={item.height}>
						<img src={require(`../../assets/${item.imagesrc}`)} alt={item.alt} />
					</div>
				</Link>
				<div className="details">
					<Link className="projectDetails" to={item.link}>
						{item.description}
					</Link>
					<h3 className="projectName">{item.name}</h3>
				</div>
			</div>
		</div>
	);
};

export default homeContent;
