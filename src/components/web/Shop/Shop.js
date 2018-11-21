import React from 'react';
import Aux from '../../../hoc/_Aux/_Aux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { shopData } from '../../../data/app_data';
import { DoImages, DoImages24 } from '../DentalOptimzer/DOImages';

const shop = props => {
	let doImages = shopData.slice(0, 1).map((item, index) => {
		return <DoImages item={item} key={index} />;
	});

	let doImages13 = shopData.slice(1, 3).map((item, index) => {
		return <DoImages24 item={item} key={index} />;
	});

	let doImages35 = shopData.slice(3, 5).map((item, index) => {
		return <DoImages24 item={item} key={index} />;
	});

	let doImages57 = shopData.slice(5, 7).map((item, index) => {
		return <DoImages24 item={item} key={index} />;
	});

	let doImages78 = shopData.slice(7, 9).map((item, index) => {
		return <DoImages item={item} key={index} />;
	});

	return (
		<Aux>
			<Helmet>
				<title>BLT - SHOP Fashion Website Design</title>
				<meta name="description" content="SHOP Fashion Website Design" />
			</Helmet>
			<div ng-controller="shopController as store">
				<div className="l-w1 m-projTitleGroup animated">
					<h4 className="m-projTitle">Shop</h4>
					<h1 className="m-brandDescription ">Fashion ecommerce for seasonal fashions</h1>
				</div>
				<div className="l-w1 l-flexbox-grey animated delay">
					<div className="m-twoColumnCopy">
						<h2 className="m-projTitleGroup">The Company</h2>
						<p className="m-projCopy-top">
							Shop, a seasonal men’s fashion blog concept, aims to engage a youthful generation with
							eye-catching natural textures, pops of color, and an abundance of white space. These mockups
							represent snippets from a user flow from landing page to checkout, and aim to add uniqueness
							to the shopping experience by including written historical and aesthetic blurbs related to
							the specific styles.
						</p>
					</div>
					<div className="m-twoColumnCopy">
						<h2 className="m-projTitleGroup">The Challenge</h2>
						<p className="m-projCopy-top">
							Shop was a ground-up exercise to create a visual language and design mockups for a
							season-based web fashion concept. This challenge included a need to keep the site fresh and
							unique from its competitors, consistency in photography language for all fashion items, and
							a concept for interaction for both mobile and desktop versions.
						</p>
					</div>
				</div>

				<div className="l-w1 l-flexbox-alldevs animated delay2">
					<div className="m-twoColumnCopy">
						<h2 className="m-projTitleGroup">Involvement</h2>
						<div className="m-projCategories">
							<p className="m-projCopy-inline">Creative Direction</p>
							<p className="m-projCopy-inline">UX</p>
							<p className="m-projCopy-inline">Mobile</p>
						</div>
					</div>
					<div className="m-twoColumnCopy">
						<h2 className="m-projTitleGroup">Sector</h2>
						<p className="m-projCopy-inline">E-Commerce</p>
					</div>
				</div>
				{doImages78}
				<h1 className="m-quote l-w2">
					Mockups were created which preferenced clarity and simplicity; image page copy and interface were
					simply black text on a white background, and homepage banners were full-width, and could be modular
					to incorporate as much content as necessary. Concept images were chosen to respond to the specific
					season - warm and playful images for summer, and muted images for fall and winter.
				</h1>

				{doImages}
				<div className="l-flexbox">{doImages13}</div>
				<div className="l-flexbox">{doImages35}</div>
				<div className="l-flexbox">{doImages57}</div>
			</div>

			<div className="l-w0 m-mobileProjLink">
				<h2 className="t-center-all">Next Up:</h2>
				<Link className="m-projLink" to="/dashboard">
					Dashboard
				</Link>
			</div>
		</Aux>
	);
};

export default shop;
