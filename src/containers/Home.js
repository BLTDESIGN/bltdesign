import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Aux from '../hoc/_Aux/_Aux';

import data from '../data/app_home';
import HomeContent from '../components/Home/HomeContent';

class Home extends Component {
	state = {};
	render() {
		let content02 = data.slice(0, 2).map((item, index) => {
			return <HomeContent item={item} key={index} />;
		});

		let content24 = data.slice(2, 4).map((item, index) => {
			return <HomeContent item={item} key={index} />;
		});

		let content46 = data.slice(4, 6).map((item, index) => {
			return <HomeContent item={item} key={index} />;
		});

		let content68 = data.slice(6, 8).map((item, index) => {
			return <HomeContent item={item} key={index} />;
		});

		let content810 = data.slice(8, 10).map((item, index) => {
			return <HomeContent item={item} key={index} />;
		});

		return (
			<Aux>
				<Helmet>
					<title>BLT - Home</title>
					<meta
						name="description"
						content="Multi-disciplinary design work with a focus on visual communication and user experience design"
					/>
				</Helmet>
				<div className="m-indexText animated">
					<h1 className="m-textLarge">Dan Beltramo</h1>
					<h1 className="m-textSmall">UX Lead @ HealthyGrid</h1>
				</div>
				<div className="ng-scope">
					<div className="flexContainer">{content02}</div>
					<div className="flexContainer">{content24}</div>
					<div className="flexContainer">{content46}</div>
					<div className="flexContainer">{content68}</div>
					<div className="flexContainer">{content810}</div>
				</div>
			</Aux>
		);
	}
}

export default Home;
