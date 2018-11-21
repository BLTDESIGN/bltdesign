import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Aux from '../../../hoc/_Aux/_Aux';
import { orsqData } from '../../../data/app_data';

const orsq = props => {
	let images = orsqData.map((item, index) => {
		return (
			<div ng-repeat="image in store.images" key={index}>
				<div className={item.class}>
					<img src={require(`../../../assets/${item.imagesrc}`)} width="100%" alt={item.alt} />
					<figure className="designFigure">{item.description}</figure>
				</div>
			</div>
		);
	});
	return (
		<Aux>
			<Helmet>
				<title>BLT - Dalston Music Collaborative - Building Design</title>
				<meta name="description" content="Dalston Music Collaborative - Building Design" />
			</Helmet>
			<div className="l-w1 m-projTitleGroup animated">
				<h4 className="title ">Or. Sq.</h4>
				<h1 className="m-brandDescription">Mixed-Use development in Portland, OR.</h1>
			</div>
			<div className="l-flexbox-grey animated delay">
				<div className="m-twoColumnCopy">
					<h2 className="m-projTitleGroup">The Context</h2>
					<p className="m-projCopy">
						Oregon Square is cited in the Lloyd District, a business district in NE Portland, Oregon. This
						area has long been percieved as a series of surface parking lots and office towers, with little
						life and use after business hours. This project looks to create a park public space and a
						variety of businesses to draw visitors to the area.
					</p>
				</div>
				<div className="m-twoColumnCopy">
					<h2 className="m-projTitleGroup">The Project</h2>
					<p className="m-projCopy">
						The Oregon Square development in Portland is set to bring four apartment buildings to the Lloyd
						Center, including a 30 story tower, a 21 story tower, and a pair of 11 story towers. The
						project's goal is to become Portland’s Family Room, on par with Portland’s Pioneer Square.
						Project while a Design Assist at GBD Architects.
					</p>
				</div>
			</div>
			<h2 className="m-projTitleGroup l-w2 animated delay2">Involvement</h2>
			<div className="m-projCategories l-w2 animated delay2">
				<p className="m-projCopy-inline">Facade Design</p>
				<p className="m-projCopy-inline">Presentation</p>
				<p className="m-projCopy-inline">Technical</p>
				<p className="m-projCopy-inline">3D Modeling</p>
			</div>
			<div className="fluidDiv">
				<div ng-controller="orsqController as store">{images}</div>
			</div>
			<div className="l-w0 m-mobileProjLink">
				<h2 className="t-center-all">Next Up:</h2>
				<Link className="m-projLink" to="/design/photo">
					Photography
				</Link>
			</div>
		</Aux>
	);
};

export default orsq;
