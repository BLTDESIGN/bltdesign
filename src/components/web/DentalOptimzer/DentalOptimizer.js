import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Aux from '../../../hoc/_Aux/_Aux';
import { DoImages, DoImages24 } from './DOImages';

import { dentalImages } from '../../../data/app_data';

class DentalOptimizer extends Component {
	render() {
		let doImages = dentalImages.slice(0, 2).map((item, index) => {
			return <DoImages item={item} key={index} />;
		});
		let doImages24 = dentalImages.slice(2, 4).map((item, index) => {
			return <DoImages24 item={item} key={index} />;
		});

		let doImages46 = dentalImages.slice(4, 6).map((item, index) => {
			return <DoImages24 item={item} key={index} />;
		});

		let doImages68 = dentalImages.slice(6, 8).map((item, index) => {
			return <DoImages24 item={item} key={index} />;
		});

		return (
			<Aux>
				<Helmet>
					<title>BLT - Dental</title>
					<meta name="description" content="Sight-C Website Design" />
				</Helmet>
				<div ng-controller="dentalController as store">
					<div className="l-w1 m-projTitleGroup animated">
						<h4 className="m-projTitle">Dental Optimizer</h4>
						<h1 className="m-brandDescription">
							Find a dentist, ask questions, estimate costs, and request appointments
						</h1>
					</div>
					<div className="l-flexbox l-w1 m-projCopy animated delay">
						<div className="m-twoColumnCopy">
							<h2 className="m-projTitleGroup">The Company</h2>
							<p className="m-projCopy-top">
								Dental Optimizer is a web based app which houses a suite of tools for dental patients:
								an insurance dashboard, ask a dentist, find a dentist, appointment request, cost
								calculator, risk assessments, and more.
							</p>
						</div>
						<div className="m-twoColumnCopy">
							<h2 className="m-projTitleGroup">The Challenge</h2>
							<p className="m-projCopy-top">
								The previous iteration of this site required a complete re-design to clarify the user
								experience and communication of information.
							</p>
						</div>
					</div>
					<div className="l-w1 animated delay2">
						<h2 className="m-projTitleGroup">User Research</h2>
						<p className="m-projCopy l-2cl">
							Deloitte conducted user research to understand user interactions within the site's previous
							iteration. Results revealed specific pain points while using the site. Our team began by
							mapping out the user journey for both providers and patients, and discovered non-relevant
							content within certain user flows. As well, content was commonly condensed on the site, with
							non-releated information being presented side-by-side, hindering usability.
						</p>
						<h2 className=" m-projTitleGroup">The Takeaway</h2>
						<p className="m-projCopy blackText l-2cl">
							The site update removed un-related content from user flows, and content was modified to fit
							a more vertically-oriented format (no longer presenting unrelated content side-by-side).
							Each page was simplified with a white background, and the type treatments and iconography
							were re-imagined, inspired by Google’s Material Design. Artistic illustrations were added to
							bring a soft and human feel to the otherwise technical site.
						</p>
						<h2 className="m-projTitleGroup">Involvement</h2>
						<div className="m-projCategories">
							<p className="m-projCopy-inline">Creative Direction</p>
							<p className="m-projCopy-inline">UX</p>
							<p className="m-projCopy-inline">Visual Design</p>
						</div>
					</div>

					{doImages}

					<div className="l-flexbox">{doImages24}</div>

					<h1 className="m-quote l-w2">
						Dentists claim their profile from a database of dentist listings, and add information, including
						photos and an about section, to personalize their profile. Having claimed their profile,
						Dentists can then be searched for in the Find a Dentist app, and appointments can be requested
						online with their office.
					</h1>
					<div className="l-flexbox">{doImages46}</div>

					<h1 className="m-quote l-w2">
						Dental Optimizer features dashboards for both patients and members; members can use their
						dashboard to analyze their current benefits, and view their recent activity, while Dentists can
						answer questions, add to their profile, and respond to appointment requests directly in their
						dashboard.
					</h1>
					<div className="l-flexbox">{doImages68}</div>
					<h1 className="m-quote l-w2">
						The in-app appointment request flow allows for a degree of back-and-forth between dentists and
						patients; originally, patients request a time, and if this is unavailable, dentists can provide
						three available time slots for the patient to choose from. Appointment notifications are served
						up in-browser as well as via email.
					</h1>
				</div>
				<div className="l-w0 m-mobileProjLink">
					<h2 className="t-center-all">Next Up:</h2>
					<Link className="m-projLink" to="/crypto">
						Crypto
					</Link>
				</div>
			</Aux>
		);
	}
}

export default DentalOptimizer;
