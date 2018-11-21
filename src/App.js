import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Home from './containers/Home';
import Layout from './hoc/Layout/Layout';
import DentalOptimizer from './components/web/DentalOptimzer/DentalOptimizer';
import Crypto from './components/web/Crypto/Crypto';
import LRT from './components/web/LRT/LRT';
import SIGHTC from './components/web/SIGHTC/SIGHTC';
import Felt from './components/web/Felt/Felt';
import Shop from './components/web/Shop/Shop';
import Dashboard from './components/web/Dashboard/Dashboard';
import BlueBottle from './components/web/BlueBottle/BlueBottle';
import DLSTN from './components/Design/DLSTN/DLSTN';
import Finplan from './components/web/Finplan/Finplan';
import Analysis from './components/UX/Analysis/Analysis';
import Design from './components/UX/Design/Design';
import Process from './components/UX/Process/Process';
import ProductDefinition from './components/UX/ProductDefinition/ProductDefinition';
import ProductTesting from './components/UX/ProductTesting/ProductTesting';
import UserResearch from './components/UX/UserResearch/UserResearch';
import Portfolio from './components/web/Portfolio/Portfolio';
import About from './components/About/About';
import Sketches from './components/Design/Sketches/Sketches';
import RNDR from './components/Design/RNDR/RNDR';
import Photo from './components/Design/Photo/Photo';
import ORSQ from './components/Design/ORSQ/ORSQ';
import London from './components/Design/London/London';
import Aux from './hoc/_Aux/_Aux';

class App extends Component {
	render() {
		const routes = (
			<Switch>
				<Route exact path="/design/london" component={London} />
				<Route exact path="/design/orsq" component={ORSQ} />
				<Route exact path="/design/photo" component={Photo} />
				<Route exact path="/design/rndr" component={RNDR} />
				<Route exact path="/design/sketches" component={Sketches} />
				<Route exact path="/design/dlstn" component={DLSTN} />
				<Route exact path="/about" component={About} />
				<Route exact path="/portfolio" component={Portfolio} />
				<Route exact path="/ux/userResearch" component={UserResearch} />
				<Route exact path="/ux/productTesting" component={ProductTesting} />
				<Route exact path="/ux/productDefinition" component={ProductDefinition} />
				<Route exact path="/ux/process" component={Process} />
				<Route exact path="/ux/design" component={Design} />
				<Route exact path="/ux/anlaysis" component={Analysis} />
				<Route exact path="/finplan" component={Finplan} />
				<Route exact path="/bluebottle" component={BlueBottle} />
				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/shop" component={Shop} />
				<Route exact path="/felt" component={Felt} />
				<Route exact path="/sightc" component={SIGHTC} />
				<Route exact path="/lrt" component={LRT} />
				<Route exact path="/crypto" component={Crypto} />
				<Route exact path="/dentalOptimizer" component={DentalOptimizer} />
				<Route exact path="/" component={Home} />
				<Redirect to="/" />
			</Switch>
		);
		return (
			<Aux>
				<Layout>{routes}</Layout>
			</Aux>
		);
	}
}

export default withRouter(App);
