import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Aux from '../../../hoc/_Aux/_Aux';
import { rndrData } from '../../../data/app_data';

const rndr = props => {
	let images = rndrData.map((item, index) => {
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
				<title>BLT - Design Renderings - Collaborations</title>
				<meta name="description" content="Rendering Collaborations" />
			</Helmet>
			<div className="l-w1 m-projTitleGroup animated">
				<h4 className="m-projTitle">Render</h4>
				<h1 className="m-brandDescription ">Collaborations in Retail and Furniture Design </h1>
			</div>
			<div className="animated delay l-w1 ">
				<h2 className="m-projTitleGroup">About</h2>
				<p className="m-projCopy l-2cl">
					These renderings represent Architectural collaborations over the past two years. My involvement in
					these projects has included modeling, texturing, developing lighting schemes, rendering, and using
					Photoshop. Simulating materials has proven to be the most complicated tasks in developing these
					renderings, and requires special attention to customize textures and fine-tune material properties.
				</p>
			</div>
			<h2 className="m-projTitleGroup l-w2 animated delay2">Involvement</h2>
			<div className="m-projCategories l-w2 animated delay2 p-90">
				<p className="m-projCopy-inline">Photoshop</p>
				<p className="m-projCopy-inline">Lighting</p>
				<p className="m-projCopy-inline">Materials</p>
				<p className="m-projCopy-inline">3D Modeling</p>
			</div>
			<div className="fluidDiv" ng-controller="rndrController as store">
				{images}
			</div>
			<div className="l-w0 m-mobileProjLink">
				<h2 className="t-center-all">Next Up:</h2>
				<Link className="m-projLink" to="/design/sketches">
					Sketches
				</Link>
			</div>
		</Aux>
	);
};

export default rndr;
