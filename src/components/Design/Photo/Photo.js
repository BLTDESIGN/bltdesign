import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Aux from '../../../hoc/_Aux/_Aux';
import { photoData } from '../../../data/app_data';

const photo = props => {
	let images = photoData.map((item, index) => {
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
				<title>BLT - Image Photography</title>
				<meta name="description" content="Product Photography" />
			</Helmet>
			<div className="l-w1 m-projTitleGroup animated">
				<h4 className="m-projTitle">Photo</h4>
				<h1 className="m-brandDescription "> Beauty of everyday experiences.</h1>
			</div>
			<div className="animated delay l-w1">
				<h2 className="m-projTitleGroup">The Summary</h2>
				<p className="m-projCopy l-2cl">
					These photos are a broad range of photos I've taken over the past year; with each image, I've made
					an effort to post process the images to emphasize a palete of colors, and emphasize a certain simple
					composition.
				</p>
			</div>
			<h2 className="m-projTitleGroup l-w2 animated delay2">Involvement</h2>
			<div className="m-projCategories l-w2 animated delay2 p-90">
				<p className="m-projCopy-inline">Composition</p>
				<p className="m-projCopy-inline">Color</p>
				<p className="m-projCopy-inline">Post-Process</p>
				<p className="m-projCopy-inline">Perspective</p>
			</div>
			<div className="fluidDiv">
				<div ng-controller="photoController as store">{images}</div>
			</div>
			<div className="l-w0 m-mobileProjLink">
				<h2 className="t-center-all">Next Up:</h2>
				<Link className="m-projLink" to="/design/rndr">
					Render
				</Link>
			</div>
		</Aux>
	);
};

export default photo;
