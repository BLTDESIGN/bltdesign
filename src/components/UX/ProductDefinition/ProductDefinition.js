import React from 'react';
import Aux from '../../../hoc/_Aux/_Aux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const productDefinition = props => {
	return (
		<Aux>
			<Helmet>
				<title>UX Pt. 1: Defining the Product</title>
				<meta content="Dan Beltramo - About Me" name="description" />
			</Helmet>
			<section class="uxDefinition m-t-150 l-w1">
				<h2 class="m-projTitleGroup">UX Part 1</h2>
				<h1 class="m-b-10">Defining the Product</h1>
				<p>May 3, 2018</p>
			</section>
			<section class="l-w1 m-b-90">
				<p class="m-projCopy">
					The project should begin with defining the product: what it is, who it’s for, and how it will be
					used. Conduct stakeholder interviews to identify goals and values. This phase should conclude with a
					project kickoff meeting to define the product’s scope, identify teams, and set expectations for the
					project.
				</p>
			</section>
			<div class="l-w0 m-mobileProjLink">
				<h2 class="t-center-all">Next Up:</h2>
				<Link class="m-projLink" to="/ux/userResearch">
					User Research
				</Link>
			</div>
		</Aux>
	);
};

export default productDefinition;
