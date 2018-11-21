import React from 'react';
import Aux from '../../../hoc/_Aux/_Aux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const analysis = props => {
	return (
		<Aux>
			<Helmet>
				<title>UX Pt. 3: UX Product Analysis</title>
				<meta content="Dan Beltramo - About Me" name="description" />
			</Helmet>
			<section className="uxDefinition m-t-150 l-w1">
				<h2 className="m-projTitleGroup">UX Part 3</h2>
				<h1 className="m-b-10">UX Product Analysis</h1>
				<p>May 3, 2018</p>
			</section>
			<section className="l-w1 m-b-90">
				<p className="m-projCopy">
					Draw insights from results of the User/Product Research phases, and either reinforce or disregard
					previous assumptions. Create detailed user flows, based on this research, for each of the product’s
					features (including all possible interactions users can have).
				</p>
			</section>
			<div className="l-w0 m-mobileProjLink">
				<h2 className="t-center-all">Next Up:</h2>
				<Link className="m-projLink" to="/ux/design">
					UX Design
				</Link>
			</div>
		</Aux>
	);
};

export default analysis;
