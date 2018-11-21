import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Aux from '../../../hoc/_Aux/_Aux';
import { cryptoData } from '../../../data/app_data';
import { DoImages, DoImages24 } from '../DentalOptimzer/DOImages';

const crypto = props => {
	let doImages = cryptoData.slice(0, 1).map((item, index) => {
		return <DoImages item={item} key={index} />;
	});

	let doImages24 = cryptoData.slice(1, 3).map((item, index) => {
		return <DoImages24 item={item} key={index} />;
	});

	return (
		<Aux>
			<Helmet>
				<title>BLT - Crypto</title>
				<meta name="description" content="Sight-C Website Design" />
			</Helmet>
			<div ng-controller="cryptoController as store">
				<div class="l-w1 m-projTitleGroup animated">
					<h4 class="m-projTitle">Crypto</h4>
					<h1 class="m-brandDescription">A concept for a crypto currency exchange</h1>
				</div>
				<div class="l-flexbox-grey animated delay l-w1">
					<div class="m-twoColumnCopy">
						<h2 class="m-projTitleGroup">The Company</h2>
						<p class="m-projCopy-top">
							The company, "$", is intended at creating a technically-oriented yet easy-to-use toolset.
							This toolset is intended for users to be able to analyze the crypto currency market
							performance between various lengths of time, isolate and study performance of individual
							currencies, trade to and from a portfolio, and send and receive currency from the user's
							account.
						</p>
					</div>
					<div class="m-twoColumnCopy">
						<h2 class="m-projTitleGroup">The Challenge</h2>
						<p class="m-projCopy-top">
							The challenge with the layout of all of these features was to group similar tools together,
							while maintaining the heirarchy of the site.
						</p>
					</div>
				</div>
				<div class="l-w1 l-flexbox-alldevs animated delay2">
					<div class="m-twoColumnCopy">
						<h2 class="m-projTitleGroup">Involvement</h2>
						<div class="m-projCategories">
							<p class="m-projCopy-inline">Creative Direction</p>
							<p class="m-projCopy-inline">UX</p>
							<p class="m-projCopy-inline">Mobile</p>
						</div>
					</div>
					<div class="m-twoColumnCopy">
						<h2 class="m-projTitleGroup">Sector</h2>
						<p class="m-projCopy-inline">Currency Exchange</p>
					</div>
				</div>
				{doImages}
				<div class="l-flexbox">{doImages24}</div>
			</div>
			<div class="l-w0 m-mobileProjLink">
				<h2 class="t-center-all">Next Up:</h2>
				<Link class="m-projLink" to="/lrt">
					Living Room Theaters
				</Link>
			</div>
		</Aux>
	);
};

export default crypto;
