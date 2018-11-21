import React from 'react';
import Aux from '../../../hoc/_Aux/_Aux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import imgPath from '../../../assets/images/diagrams/process.svg';

const process = props => {
	return (
		<Aux>
			<Helmet>
				<title>BLT - UX Theory</title>
				<meta name="description" content="Dan Beltramo - About Me" />
			</Helmet>
			<section className="uxDefinition m-t-150 l-w1">
				<h1 className="m-b-10">UX Process</h1>
				<p className="p-inline">by Dan Beltramo</p>
				<p className="p-inline l-grey">May 3, 2018</p>
			</section>
			<p className="m-projCopy l-w1">
				I'm beginning a project of documenting the UX process from start to finish, to maintain as a reference
				resource to maintain and visit for project guidance.
			</p>
			<section className="uxDefinition l-w1">
				<img src={imgPath} style={{ paddingBottom: '20px' }} alt="Discoverability Diagram" />
			</section>
			<section className="l-w1">
				<p className="m-projCopy ">1) Product Definition</p>
				<p className="m-projCopy"> 2) User Research</p>
				<p className="m-projCopy "> 3) Analysis</p>
				<p className="m-projCopy ">4) Design</p>
				<p className="m-projCopy "> 5) Validation / Testing</p>
			</section>
			<div className="l-w0 m-mobileProjLink">
				<h2 className="t-center-all">Next Up:</h2>
				<Link className="m-projLink" to="/ux/productDefinition">
					Defining the Product
				</Link>
			</div>
		</Aux>
	);
};

export default process;
