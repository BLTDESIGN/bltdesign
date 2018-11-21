import React from 'react';
import Aux from '../../../hoc/_Aux/_Aux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { dashboardData } from '../../../data/app_data';
import { DoImages } from '../DentalOptimzer/DOImages';

const dashboard = props => {
	let doImages = dashboardData.slice(0, 3).map((item, index) => {
		return <DoImages item={item} key={index} />;
	});

	return (
		<Aux>
			<Helmet>
				<title>BLT - Delta Dashboard</title>
				<meta name="description" content="Sushi Murata Website Design" />
			</Helmet>
			<div ng-controller="deltaController as store">
				<div className="l-w1 m-projTitleGroup animated">
					<h4 className="m-projTitle">Analytics Dashboard</h4>
					<h1 className="m-brandDescription">Useage metrics at a glance</h1>
				</div>
				<div className="l-w1 l-flexbox-grey animated delay">
					<div className="m-twoColumnCopy">
						<h2 className="m-projTitleGroup">The Company</h2>
						<p className="m-projCopy-top">
							Delta Dental of Oregon and Alaska (Moda) developed a new suite of Dental Tools; this is the
							analytics dashboard for the new site.
						</p>
					</div>
					<div className="m-twoColumnCopy">
						<h2 className="m-projTitleGroup">The Challenge</h2>
						<p className="m-projCopy-top">
							The challenge with this dashboard was to present a long and complex set of data to be
							understandable at first glance.
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
						<p className="m-projCopy-inline">Insurance</p>
					</div>
				</div>
				<h1 className="m-quote l-w2">
					The mockups were designed to present a light-weight and vibrant experience; the layout of the home
					page alternates content between left and right to provide a pleasant scrolling experience. The
					imagery used on the homepage is chosen to reinforce Murata's care and craft in creating sushi
					pieces.
				</h1>
				{doImages}
			</div>
			<div className="l-w0 m-mobileProjLink">
				<h2 className="t-center-all">Next Up:</h2>
				<Link className="m-projLink" to="/bluebottle">
					Blue Bottle
				</Link>
			</div>
		</Aux>
	);
};

export default dashboard;
