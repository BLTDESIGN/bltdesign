import React from 'react';
import Aux from '../../../hoc/_Aux/_Aux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { feltData } from '../../../data/app_data';
import { DoImages, DoImages24 } from '../DentalOptimzer/DOImages';

const felt = props => {
	let doImages = feltData.slice(0, 1).map((item, index) => {
		return <DoImages item={item} key={index} />;
	});

	let doImages13 = feltData.slice(1, 3).map((item, index) => {
		return <DoImages24 item={item} key={index} />;
	});

	let doImages35 = feltData.slice(3, 5).map((item, index) => {
		return <DoImages24 item={item} key={index} />;
	});

	let doImages57 = feltData.slice(5, 7).map((item, index) => {
		return <DoImages24 item={item} key={index} />;
	});

	let doImages89 = feltData.slice(8, 9).map((item, index) => {
		return <DoImages item={item} key={index} />;
	});

	return (
		<Aux>
			<Helmet>
				<title>BLT - Felt Bicycles Website Design</title>
				<meta name="description" content="Felt Bicycles Website Design" />
			</Helmet>
			<div ng-controller="feltController as store">
				<div className="l-w1 m-projTitleGroup animated ">
					<h4 className="m-projTitle">Felt</h4>
					<h1 className="m-brandDescription"> Performance Bicycles from Irvine, California.</h1>
				</div>
				<div className="l-flexbox-grey animated delay l-w1">
					<div className="m-twoColumnCopy">
						<h2 className="m-projTitleGroup">The Company</h2>
						<p className="m-projCopy-top">
							Felt produces road, mountain, track, bmx, cyclocross, electric bicycles, and cruiser bikes.
							All design is completed in the USA and the majority of production comes from Asia. The
							company also has a strong reputation in the time trial/triathlon bike area.
						</p>
					</div>
					<div className="m-twoColumnCopy">
						<h2 className="m-projTitleGroup">The Challenge</h2>
						<p className="m-projCopy-top">
							To present a unified style for Felt's desktop and mobile sites, with a reduction in text on
							category pages. Storytelling was moved to the product pages to optimizer user flow.
						</p>
					</div>
				</div>
				<h2 className="l-w1 m-projTitleGroup  animated delay2">User Research</h2>
				<p className="l-w1 m-projCopy  animated delay2 l-2cl">
					Biking isn't for kids anymore: according to the Gluskin Townley Group, the number of children who
					ride bicycles declined more than 20% between 2000 and 2010. As well, enthusiasts are driving growth:
					the number of frequent cyclists increased 12 percent over the decade, with adult male enthusiast
					riders increasing even more, by 15%. Male adult infrequents have risen 21% during this same time
					period. High growth in age groups of 25-34, as well as 35-44. According to Consumer Behavior,
					consumers are buying bikes for not only for efficiency reasoning, but for personal style, status,
					and environmental reasons. This site was designed more towards adult enthusiast riders between ages
					25-44. According to Consumer Behavior, personal style, status, and the environment are primary
					considerations for this consumer segment, and these mockups place special focus on quality and style
					of Felt's cutting-edge bike lineup.
				</p>
				<div className="l-flexbox-alldevs l-w1">
					<div className="m-twoColumnCopy p-90">
						<h2 className="m-projTitleGroup">Involvement</h2>
						<div className="m-projCategories">
							<p className="m-projCopy-inline">Visual Design</p>
							<p className="m-projCopy-inline">Web</p>
							<p className="m-projCopy-inline">Mobile</p>
						</div>
					</div>
					<div className="m-twoColumnCopy p-90">
						<h2 className="m-projTitleGroup">Sector</h2>
						<p className="m-projCopy-inline">E-Commerce</p>
					</div>
				</div>

				{doImages89}
				{doImages}
				<div className="l-flexbox">{doImages13}</div>
				<div className="l-flexbox">{doImages35}</div>
				<div className="l-flexbox">{doImages57}</div>
			</div>
			<div className="l-w0 m-mobileProjLink">
				<h2 className="t-center-all">Next Up:</h2>
				<Link className="m-projLink" to="/shop">
					Shop Fashion
				</Link>
			</div>
		</Aux>
	);
};

export default felt;
