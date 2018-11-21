import React from 'react';
import Aux from '../../../hoc/_Aux/_Aux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { dlstnData } from '../../../data/app_data';

const dlstn = props => {
	let images = dlstnData.map((item, index) => {
		return (
			<div className={item.class} key={index}>
				<img src={require(`../../../assets/${item.imagesrc}`)} width="100%" alt={item.alt} />
				<figure className="designFigure">{item.description}</figure>
			</div>
		);
	});

	return (
		<Aux>
			<Helmet>
				<title>BLT - Dalston Collaborative Building Design</title>
				<meta name="description" content="Dalston Music Collaborative - Building Design" />
			</Helmet>
			<div className="l-w1 m-projTitleGroup animated">
				<h4 className="m-projTitle">Music</h4>
				<h1 className="m-brandDescription"> Collaborative for sharing culture + musical style.</h1>
			</div>
			<div className="l-flexbox-grey l-w1 animated delay">
				<div className="m-twoColumnCopy">
					<h2 className="m-projTitleGroup">The Context</h2>
					<p className="m-projCopy">
						The site for this community center is in Dalston, London - one of the most diverse places in
						Europe, with an incredible number of languages spoken in a highly dense area. The center of
						Dalston is a newer civic space, Gillet Square, which was a Public revitalization project of an
						old parking lot. This project sought to re-define a building on the edge of this square, provide
						energy to the square, and promote community engagement with the place.
					</p>
				</div>
				<div className="m-twoColumnCopy">
					<h2 className="m-projTitleGroup">The Project</h2>
					<p className="m-projCopy">
						This Music Collaborative for Dalston (NE London) will be for the community to be immersed in
						music and collaborate. The Collaborative will host concerts, provide rentals of practice spaces
						and instruments, and offer a wide variety of public and private music lessons. The hopes with
						the Collaborative are that it can foster opportunities to blur the boundaries between groups,
						that culture and musical style can be easily shared.
					</p>
				</div>
			</div>
			<div className="l-w1 p-90">
				<h2 className="m-projTitleGroup animated delay2">Involvement</h2>
				<div className="m-projCategories animated delay2">
					<p className="m-projCopy-inline">Facade Design</p>
					<p className="m-projCopy-inline">Presentation</p>
					<p className="m-projCopy-inline">Rendering</p>
					<p className="m-projCopy-inline">Diagrams</p>
				</div>
			</div>
			<div className="fluidDiv">
				<div ng-controller="dlstnController as store">
					<div ng-repeat="image in store.images">{images}</div>
				</div>
			</div>
			<div className="l-w0 m-mobileProjLink">
				<h2 className="t-center-all">Next Up:</h2>
				<Link className="m-projLink" to="/">
					Back Home
				</Link>
			</div>
		</Aux>
	);
};

export default dlstn;
