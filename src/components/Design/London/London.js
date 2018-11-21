import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Aux from '../../../hoc/_Aux/_Aux';
import { londonData } from '../../../data/app_data';
import Colors from '../Colors/Colors';

const london = props => {
	let photos = londonData.map((item, index) => {
		return (
			<div className={item.class} key={index}>
				<img src={require(`../../../assets/${item.imagesrc}`)} width="100%" alt={item.alt} />
				<div className="legend">
					<p>{item.name}</p>
					<Colors clr={item.colors} />
				</div>
			</div>
		);
	});

	return (
		<Aux>
			<Helmet>
				<title>BLT - GIS Research</title>
				<meta name="description" content="Dalston Music Collaborative - Building Design" />
			</Helmet>
			<div className="l-w1 m-projTitleGroup animated">
				<h4 className="title ">London</h4>
				<h1 className="m-brandDescription">Research into creative re-use of 1800's housing</h1>
			</div>
			<div className="l-flexbox-grey animated delay">
				<div className="m-twoColumnCopy">
					<h2 className="m-projTitleGroup">The Study</h2>
					<p className="m-projCopy ">
						The goal with this study was to challenge current technology and software to conduct a
						fast-paced study of three neihborhoods in London (totalling over 1600 buildings. Our team
						developed a useable survey through the KoBo phone app (including drop-down menus and camera
						integration), and physically surveyed buildings in NE London at a rate of three minutes per
						building. Our team then imported the data into Arc-GIS and produced infographics, presenting our
						findings within a final presentation document.
					</p>
				</div>
				<div className="m-twoColumnCopy">
					<h2 className="m-projTitleGroup">The Results</h2>
					<p className="m-projCopy">
						Our team, after, discovered that the terraced house, the traditional housing type of the area,
						has proven to be highly adaptable, now housing businesses above ground, below ground, and even
						shops within shops.
					</p>
				</div>
			</div>
			<h2 className="m-projTitleGroup l-w2">Involvement </h2>
			<div className="m-projCategories p-200 l-w2">
				<p className="m-projCopy-inline">ARC-GIS</p>
				<p className="m-projCopy-inline">Interviews</p>
				<p className="m-projCopy-inline">Field Research</p>
				<p className="m-projCopy-inline">Data Vis</p>
			</div>
			<div className="fluidDiv">
				<div ng-controller="londonController as store">
					<div ng-repeat="image in store.images">{photos}</div>
				</div>
			</div>
			<div className="l-w0 m-mobileProjLink">
				<h2 className="t-center-all">Next Up:</h2>
				<Link className="m-projLink" to="/design/orsq">
					OR SQ
				</Link>
			</div>
		</Aux>
	);
};

export default london;
