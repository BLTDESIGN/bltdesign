import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Aux from '../../../hoc/_Aux/_Aux';
import { drawingData } from '../../../data/app_data';

const sketches = props => {
	let images = drawingData.map((item, index) => {
		return (
			<div ng-repeat="image in store.images" key={index}>
				<div className={item.class}>
					<img src={require(`../../../assets/${item.imagesrc}`)} width="100%" alt={item.alt} />
				</div>
			</div>
		);
	});

	return (
		<Aux>
			<Helmet>
				<title>BLT - Dalston Music Collaborative</title>
				<meta name="description" content="Dalston Music Collaborative - Building Design" />
			</Helmet>
			<div className="l-w1 m-projTitleGroup animated">
				<h4 className="m-projTitle">Sketches</h4>
				<h1 className="m-brandDescription">Urban Spaces + Facades.</h1>
			</div>
			<div className="animated delay">
				<h2 className="m-projTitleGroup l-w2">The Context</h2>
				<p className="m-projCopy l-w2">
					These hand sketches were created during a study abroad in Vicenza, Italy. During this study abroad,
					our group would travel between Italian cities and study the proportions and characteristics of
					public spaces, building facades, and other urban features.
				</p>
			</div>
			<h2 className="m-projTitleGroup l-w2 animated delay2">Focus</h2>
			<div className="m-projCategories l-w2 animated delay2">
				<p className="m-projCopy-inline">Scale</p>
				<p className="m-projCopy-inline">Proportion</p>
				<p className="m-projCopy-inline">Italian Modern</p>
				<p className="m-projCopy-inline">Studies</p>
			</div>
			<div ng-controller="drawingController as store">{images}</div>
			<div className="l-w0 m-mobileProjLink">
				<h2 className="t-center-all">Next Up:</h2>
				<Link className="m-projLink" to="/">
					Back Home
				</Link>
			</div>
			<div className="l-footerLinks">
				<Link className="m-projLink" to="/sightc">
					Sight-C Travel
				</Link>
				<Link className="m-projLink" to="/felt">
					Felt Bicycles
				</Link>
				<Link className="m-projLink" to="/shop">
					SHOP Fashion
				</Link>
				<Link className="m-projLink" to="/dashboard">
					Murata Sushi
				</Link>
				<Link className="m-projLink" to="/bluebottle">
					Blue Bottle
				</Link>
				<Link className="m-projLink" to="/portfolio">
					Portfolio
				</Link>
				<Link className="m-projLink" to="/design/dlstn">
					Dalston Collab
				</Link>
				<Link className="m-projLink" to="/design/rndr">
					Render
				</Link>
				<Link className="m-projLink" to="/design/london">
					London Research
				</Link>
				<Link className="m-projLink" to="/design/photo">
					Photography
				</Link>
			</div>
		</Aux>
	);
};

export default sketches;
