import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Aux from '../../hoc/_Aux/_Aux';
import resumePath from '../../assets/images/Dan Beltramo Resume 2017.pdf';

const about = props => {
	return (
		<Aux>
			<Helmet>
				<title>About | DB</title>
				<meta name="description" content="Dan Beltramo - About Me" />
			</Helmet>
			<div class="animated m-t-150 l-w1">
				<h1 class="m-textLarge"> Dan Beltramo</h1>
				<h1 class="m-textSmall">UX Lead @ HealthyGrid</h1>
			</div>
			<div class="animated delay">
				<h2 class="m-projTitleGroup l-w1">About</h2>
				<p class="aboutCopy blackText l-w1">
					I'm a UX/UI designer with a passion for building intuitive and enjoyable digital experiences. With a
					background in Architecture, I enjoy exploring how Web interfaces can emulate tactile experiences. I
					am well-versed in conceptual design, design strategy, print and digital layout, and communication
					design.
				</p>
				<h2 class="m-projTitleGroup l-w1">Skills</h2>
				<p class="m-projCopy l-w1">
					UX Design / Responsive Web / HTML / CSS / JS / React / Git / Gulp / Sketch / Pivotal / Trello
				</p>
				<br />
				<p class="m-projCopy l-w1 m-b-90">Photoshop / Indesign / Illustrator</p>
				<div class="resume l-w1 m-t-20 m-b-90">
					<a href={resumePath} target="_blank" rel="noopener noreferrer">
						<p class="pink">Resume</p>
					</a>
					<Link to="/ux/process">
						<p class="m-b-120 pink">UX Process</p>
					</Link>
				</div>
			</div>
		</Aux>
	);
};

export default about;
