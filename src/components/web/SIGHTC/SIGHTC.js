import React from 'react';
import Aux from '../../../hoc/_Aux/_Aux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { sightData } from '../../../data/app_data';
import { DoImages, DoImages24 } from '../DentalOptimzer/DOImages';

const sightc = props => {
	let doImages = sightData.slice(0, 1).map((item, index) => {
		return <DoImages item={item} key={index} />;
	});

	let doImages14 = sightData.slice(14, 15).map((item, index) => {
		return <DoImages item={item} key={index} />;
	});

	let doImages911 = sightData.slice(9, 11).map((item, index) => {
		return <DoImages24 item={item} key={index} />;
	});

	let doImages35 = sightData.slice(3, 5).map((item, index) => {
		return <DoImages24 item={item} key={index} />;
	});

	let doImages57 = sightData.slice(5, 7).map((item, index) => {
		return <DoImages24 item={item} key={index} />;
	});

	let doImages79 = sightData.slice(7, 9).map((item, index) => {
		return <DoImages24 item={item} key={index} />;
	});
	return (
		<Aux>
			<Helmet>
				<title>BLT - Sight-C</title>
				<meta name="description" content="Sight-C Website Design" />
			</Helmet>
			<div ng-controller="sightcController as store">
				<div className="l-w1 m-projTitleGroup animated">
					<h4 className="m-projTitle">Sight-C</h4>
					<h1 className="m-brandDescription">Home share concept with an imagery focus</h1>
				</div>
				<div className="l-flexbox-grey animated delay l-w1">
					<div className="m-twoColumnCopy">
						<h2 className="m-projTitleGroup">The Company</h2>
						<p className="m-projCopy-top">
							Sight-C, an international home sharing platform concept, is an example of collaborative
							consumption and sharing. Sight-C operates an online marketplace and hospitality service for
							people to lease or rent short-term lodging including holiday cottages, apartments,
							homestays, hostel beds, or hotel rooms.
						</p>
					</div>
					<div className="m-twoColumnCopy">
						<h2 className="m-projTitleGroup">The Challenge</h2>
						<p className="m-projCopy-top">
							Sight-C was a ground-up exercise to create a visual language and design mockups for a home
							share concept. This challenge included a need to keep the site fresh and unique from its
							competitors, a need for utilizing photography to promote engagmenent, as well as a concept
							for a site map.
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
						<p className="m-projCopy-inline">Real Estate</p>
					</div>
				</div>
				<div className="l-w1 animated delay2">
					<h2 className="m-projTitleGroup">User Research</h2>
					<p className="m-projCopy-bottom l-2cl">
						According to the Pew Research Center, the user group of home sharing services is quite diverse;
						nearly split equally between men and women, with an emphasis on urban users, and a majority of
						users below 50 years old. One interesting statistic in this research is that over half of adult
						Americans have not heard of this service before. Useage is especially high with college
						graduates, and households with annual income of $75,000 or more. Hosts often share their housing
						to supplement their income, and tenants often use home sharing service for vacation and business
						travel for both individuals and groups As the usergroup is especially diverse, it is important
						to use imagery and copy which don't preference any certain group. As over half of adult
						Americans have not heard of home sharing before, it is important to be especially clear on the
						homepage, and through all communication, what is being offered, and how Sight-C has crafted an
						home-sharing experience which is easy and efficient.
					</p>
				</div>
				{doImages14}
				{doImages}
				<h1 className="m-quote l-w2">
					The Sight-C image page was designed to be heavily imagery focused, with information overlaid with
					white backgrounds atop the image in a modern fashion.
				</h1>
				<div className="l-flexbox">{doImages35}</div>
				<div className="l-flexbox">{doImages57}</div>
				<div className="l-flexbox">{doImages79}</div>
				<div className="l-flexbox">{doImages911}</div>
			</div>
			<div className="l-w0 m-mobileProjLink">
				<h2 className="t-center-all">Next Up:</h2>
				<Link className="m-projLink" to="/felt">
					Bicycles
				</Link>
			</div>
		</Aux>
	);
};

export default sightc;
