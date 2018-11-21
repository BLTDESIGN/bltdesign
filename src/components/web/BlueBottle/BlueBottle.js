import React from 'react';
import Aux from '../../../hoc/_Aux/_Aux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { blueBottleData, BBDescriptions } from '../../../data/app_data';
import { DoImages } from '../DentalOptimzer/DOImages';

const blueBottle = props => {
	let doImages010 = blueBottleData.slice(0, 6).map((item, index) => {
		return <DoImages item={item} key={index} />;
	});

	let writeup = BBDescriptions.slice(0, 1).map((item, index) => {
		return (
			<div ng-repeat="writeup in store.writeups.slice (0, 1)" class="animated delay l-w1" key={index}>
				<h2 class="m-projTitleGroup ">The Role</h2>
				<p class="m-projCopy l-2cl top">{item.text}</p>
			</div>
		);
	});

	return (
		<Aux>
			<Helmet>
				<title>BLT - Blue Bottle Visual Design</title>
				<meta name="description" content="Sushi Murata Website Design" />
			</Helmet>
			<div ng-controller="bluebottleController as store">
				<div class="l-w1 m-projTitleGroup animated">
					<h4 class="m-projTitle">Blue Bottle Coffee</h4>
					<h1 class="m-brandDescription">Masters of coffee preparation</h1>
				</div>
				{writeup}
				<div class="l-w1 l-flexbox-alldevs animated delay2 p-90">
					<div class="m-twoColumnCopy">
						<h2 class="m-projTitleGroup">Involvement</h2>
						<div class="m-projCategories">
							<p class="m-projCopy-inline">Visual Design</p>
							<p class="m-projCopy-inline">Web</p>
							<p class="m-projCopy-inline">Print</p>
							<p class="m-projCopy-inline">Email</p>
						</div>
					</div>
					<div class="m-twoColumnCopy">
						<h2 class="m-projTitleGroup">Sector</h2>
						<p class="m-projCopy-inline">E-Commerce</p>
					</div>
				</div>

				{doImages010}
			</div>
			<div class="l-w0 m-mobileProjLink">
				<h2 class="t-center-all">Next Up:</h2>
				<Link class="m-projLink" to="/design/dlstn">
					Community
				</Link>
			</div>
		</Aux>
	);
};

export default blueBottle;
