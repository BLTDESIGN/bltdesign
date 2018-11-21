import React from 'react';
import Aux from '../../../hoc/_Aux/_Aux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { lrtData } from '../../../data/app_data';
import { DoImages, DoImages24 } from '../DentalOptimzer/DOImages';

const lrt = props => {
	let doImages = lrtData.slice(0, 1).map((item, index) => {
		return <DoImages item={item} key={index} />;
	});

	let doImages13 = lrtData.slice(1, 3).map((item, index) => {
		return <DoImages24 item={item} key={index} />;
	});

	let doImages35 = lrtData.slice(3, 5).map((item, index) => {
		return <DoImages24 item={item} key={index} />;
	});

	let doImages57 = lrtData.slice(5, 7).map((item, index) => {
		return <DoImages24 item={item} key={index} />;
	});

	let doImages79 = lrtData.slice(7, 9).map((item, index) => {
		return <DoImages24 item={item} key={index} />;
	});

	return (
		<Aux>
			<Helmet>
				<title>BLT - LRT</title>
				<meta name="description" content="Sight-C Website Design" />
			</Helmet>
			<div ng-controller="lrtController as store">
				<div className="l-w1 m-projTitleGroup animated">
					<h4 className="m-projTitle">Living Room Theaters</h4>
					<h1 className="m-brandDescription">
						A Portland-based theater with unique movie offerings and food and wine service.{' '}
					</h1>
				</div>
				<div className="l-w1 l-flexbox m-projCopy animated delay">
					<div className="m-twoColumnCopy">
						<h2 className="m-projTitleGroup">The Company</h2>
						<p className="m-projCopy-top">
							Living Room Theater is an incredibly popular theater in Portland, often serving up
							controversial or under-rated movies hand-picked by the staff. to allow seat reservation
							online; this proves difficult, as it's irregular building footprint in Downtown Portland,
							leading to a grouping of more intimate theaters in a variety of configurations.
						</p>
					</div>
					<div className="m-twoColumnCopy">
						<h2 className="m-projTitleGroup">The Challenge</h2>
						<p className="m-projCopy-top">
							A complete re-design of their public website, with ability to book seats and food for
							multiple theaters, refund or exchange tickets, use gift cards, and purchase gift cards.
						</p>
					</div>
				</div>
				<div className="l-w2 animated delay2">
					<h2 className="m-projTitleGroup">Involvement</h2>
					<div className="m-projCategories">
						<p className="m-projCopy-inline">Creative Direction</p>
						<p className="m-projCopy-inline">UX</p>
						<p className="m-projCopy-inline">Visual Design</p>
					</div>
				</div>
				<h2 className="l-w2 m-projTitleGroup">User Research</h2>
				<p className="l-w2 m-projCopy-bottom l-2cl">
					Early user research showed that users were having difficulty with selecting theater locations;
					Living Room Theaters currently operates in two cities (Portland, Oregon and Boca Raton, Florida). As
					well user research showed that around half of the site's current users access the site from a
					desktop, with the other half accessing from a mobile device (tablet users accounted for around 10%
					of the user group). As well, users have had a difficult time with exchanging or cancelling tickets,
					and have defaulted to calling theater offices, putting extra pressure on that staff.
				</p>
				{doImages}
				<h2 className="l-w2 m-projTitleGroup">The Takeaway</h2>
				<p className="l-w2 m-projCopy">
					The takeaway is to bring clarity to the currently selected theater location on each page, as well as
					on the ticket cards throughout the checkout process. As well, and streamlining the process for
					changing or cancelling tickets to make a majority of the process available online.
				</p>
				<div className="l-flexbox">{doImages13}</div>
				<h1 className="m-quote l-w2">
					One of the keys for the ticket checkout flow was to reduce the number of clicks to the least
					possible; this meant selecting a movie and showtime with a single click on the homepage, meaning the
					second page of the user experience was simply selecting seats (with opportunity to change showtime
					with another click if seating availability isn't satisfactory).
				</h1>
				<div className="l-flexbox">{doImages35}</div>
				<h1 className="m-quote l-w2">
					Within the checkout flow, we worked to incorporate a spreadsheet-like look into the layout, with
					opportunities to change seat type, or even to select a different movie. One of the goals of the
					client was to include food and drink ordering into the web experience; since seats can only be
					reserved during the checkout process for a 10-minute window, food and drink can be ordered once a
					ticket is confirmed, and linked to the original order.
				</h1>
				<div className="l-flexbox">{doImages57}</div>
				<h1 className="m-quote l-w2">
					Throughout the entire site, we worked to develop a simple styleguide and clear heirarchy of type
					treatment to help clarify the various packets of information which need to be shared with customers
					simultaneously.
				</h1>
				<div className="l-flexbox">{doImages79}</div>
				<h1 className="m-quote l-w2">
					With the redesign of the Living Room Theater site, the team added gift card functionality, with
					ability to purchase gift cards, check balance, and apply multiple gift cards towards orders.
				</h1>
			</div>
			<div className="l-w0 m-mobileProjLink">
				<h2 className="t-center-all">Next Up:</h2>
				<Link className="m-projLink" to="/finplan">
					Finplan
				</Link>
			</div>
		</Aux>
	);
};

export default lrt;
