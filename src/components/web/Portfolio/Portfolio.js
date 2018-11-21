import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Aux from '../../../hoc/_Aux/_Aux';
import { portfolioData } from '../../../data/app_data';

const portfolio = props => {
	let doImages = portfolioData.slice(0, 1).map((item, index) => {
		return (
			<div ng-repeat="image in store.images.slice(0, 1)" key={index}>
				<h1 className="m-quote m-t-0 l-w2">{item.quote}</h1>
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
	});

	let doImages12 = portfolioData.slice(1, 2).map((item, index) => {
		return (
			<div ng-repeat="image in store.images.slice(0, 1)" key={index}>
				<h1 className="m-quote m-t-0 l-w2">{item.quote}</h1>
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
	});

	return (
		<Aux>
			<Helmet>
				<title>BLT - Design Portfolio</title>
				<meta name="description" content="Design Portfolio - Personal Website" />
			</Helmet>
			<div ng-controller="portfolioController as store">
				<div className="l-w1 m-projTitleGroup animated">
					<h4 className="m-projTitle">Site</h4>
					<h1 className="m-brandDescription ">Repository of personal design work</h1>
				</div>
				<div className="l-flexbox-grey animated delay l-w1">
					<div className="m-twoColumnCopy">
						<h2 className="m-projTitleGroup">The Site</h2>
						<p className="m-projCopy-top">
							This site was developed to showcase professional and independent Web and Design projects.
							Principles of Responsive Web Design were used to ensure the layout of the site would flex to
							a variety of screen sizes.
						</p>
					</div>
					<div className="m-twoColumnCopy">
						<h2 className="m-projTitleGroup">The Challenge</h2>
						<p className="m-projCopy-top">
							To create a repository for personal design work which emphasized story-telling, seamlessly
							adapts to all screen sizes, and utilized simple imagery to explain complex details.
						</p>
					</div>
				</div>
				<h2 className="m-projTitleGroup p-top-60 l-w2 animated delay2">Involvement</h2>
				<div className="m-projCategories l-w2">
					<p className="m-projCopy-inline">Visual Design</p>
					<p className="m-projCopy-inline">UX</p>
					<p className="m-projCopy-inline">Mobile</p>
				</div>
				{doImages}
				{doImages12}
			</div>
			<div className="l-w0 m-mobileProjLink">
				<h2 className="t-center-all">Next Up:</h2>
				<Link className="m-projLink" to="/design/dlstn">
					Community
				</Link>
			</div>
		</Aux>
	);
};

export default portfolio;
