import React from 'react';
import Aux from '../../../hoc/_Aux/_Aux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const userResearch = props => {
	return (
		<Aux>
			<Helmet>
				<title>UX Pt. 2: UX Research</title>
				<meta content="Dan Beltramo - About Me" name="description" />
			</Helmet>
			<section className="uxDefinition m-t-150 l-w1">
				<h2 className="m-projTitleGroup">UX Part 2</h2>
				<h1 className="m-b-10">User Research</h1>
				<p>May 3, 2018</p>
			</section>
			<section className="l-w1 m-b-90">
				<p className="m-projCopy">
					This phase exists to help inform design, validate assumptions, and reduce the likelihood of missing
					the mark by gathering qualitative/quantitative information of the needs of the user groups. This
					phase includes the following research methods: Interviews - prepares a number of topics to cover,
					take notes on what was said in the interview, and systematically analyze the conversation after the
					interview <br />
					<br />
					Diary studies - A diary kept by one of the product’s future users - used to collect qualitative data
					about user behaviors, activities, and experiences over time.
					<br />
					<br />
					Contextual inquiry - a semi-structured interview method to obtain information about the context of
					use, where users are first asked a set of standard questions and then observed and questioned while
					they work with mockups.
					<br />
					<br />
					Card Sorting - users organize topics (on cards) into groupings, and create labels for these groups.
					This can be used to help the product’s structure, choose content for the homepage, and label
					categories and navigation
					<br />
					<br />
					Personas - a representation of a type of customer groups who will be using the product.
				</p>
			</section>
			<div className="l-w0 m-mobileProjLink">
				<h2 className="t-center-all">Next Up:</h2>
				<Link className="m-projLink" to="/ux/anlaysis">
					Analysis
				</Link>
			</div>
		</Aux>
	);
};

export default userResearch;
