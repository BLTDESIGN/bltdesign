import React from 'react';
import Aux from '../../../hoc/_Aux/_Aux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const productTesting = props => {
	return (
		<Aux>
			<Helmet>
				<title>UX Pt. 5: Product Validation</title>
				<meta content="Dan Beltramo - About Me" name="description" />
			</Helmet>
			<section className="uxDefinition m-t-150 l-w1">
				<h2 className="m-projTitleGroup">UX Part 5</h2>
				<h1 className="m-b-10">Product Validation</h1>
				<p>May 3, 2018</p>
			</section>
			<section className="l-w1">
				<p className="m-projCopy">
					This phase reveals users’ pain points and gaps in user flows; it is important to test the validity
					of all perceptions from designers and stakeholders. After the testing sessions, UX researchers will
					analyse the findings thoroughly and will provide a full range of design solutions. Task analysis -
					Tasks are pre-determined, and a researcher will observe as a user is completing those tasks and ask
					questions to better understand pain points. This testing often reveals specific pain points as well
					as gaps in user flows. A/B testing - a controlled experiment to compare versions of a page or flow
					in order to optimize a single page (ex. increasing the number of sign ups by changing the color of a
					button in a website). The SUS rating scale - a questionnaire that the user completes to give an
					overall satisfaction score, and is a typical measures of usability (the official measure of user
					satisfaction).
				</p>
			</section>
			<div className="l-w0 m-mobileProjLink">
				<h2 className="t-center-all">Next Up:</h2>
				<Link className="m-projLink" to="/">
					Back Home
				</Link>
			</div>
		</Aux>
	);
};

export default productTesting;
