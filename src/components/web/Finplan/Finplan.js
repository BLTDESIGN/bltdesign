import React from 'react';
import Aux from '../../../hoc/_Aux/_Aux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { finplanData } from '../../../data/app_data';
import { DoImages, DoImages24 } from '../DentalOptimzer/DOImages';

const finplan = props => {
	let doImages = finplanData.slice(0, 1).map((item, index) => {
		return <DoImages item={item} key={index} />;
	});

	let doImages13 = finplanData.slice(1, 3).map((item, index) => {
		return <DoImages24 item={item} key={index} />;
	});
	let doImages35 = finplanData.slice(3, 5).map((item, index) => {
		return <DoImages24 item={item} key={index} />;
	});

	return (
		<Aux>
			<Helmet>
				<title>BLT - Finplan</title>
				<meta name="description" content="Sight-C Website Design" />
			</Helmet>
			<div ng-controller="finplanController as store">
				<div className="l-w1 m-projTitleGroup animated">
					<h4 className="m-projTitle">Finplan</h4>
					<h1 className="m-brandDescription">A concept for a self-serve budgeting and planning app</h1>
				</div>
				<div className="l-flexbox-grey animated delay l-w1">
					<div className="m-twoColumnCopy">
						<h2 className="m-projTitleGroup">The Company</h2>
						<p className="m-projCopy-top">
							Finplan is intended to be a technically-oriented yet intuitive financial plannig app. It is
							intended to automate and project out the performance of investments over time, to track how
							goals are being achieved, and optimize investments by making smart recommendations.
						</p>
					</div>
					<div className="m-twoColumnCopy">
						<h2 className="m-projTitleGroup">The Challenge</h2>
						<p className="m-projCopy-top">
							The challenge with the layout of all of these features was to group similar tools together,
							while maintaining the heirarchy of the site.
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
						<p className="m-projCopy-inline">Personal Finance</p>
					</div>
				</div>
				{doImages}
				<div className="l-flexbox">{doImages13}</div>
				<div className="l-flexbox">{doImages35}</div>
			</div>

			<div className="l-w0 m-mobileProjLink">
				<h2 className="t-center-all">Next Up:</h2>
				<Link className="m-projLink" to="/sightc">
					Travel
				</Link>
			</div>
		</Aux>
	);
};

export default finplan;
