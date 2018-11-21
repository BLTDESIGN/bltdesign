import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Aux from '../_Aux/_Aux';

class Layout extends Component {
	handleToggle = () => {
		document.getElementById('l-fixedMenu').classList.toggle('m-fullHeight');
		document.getElementById('lliconGroup').classList.toggle('visible');
		document.getElementById('llmobileDropdown').classList.toggle('showed');
		document.getElementById('mainBody').classList.toggle('m-locked');
	};
	render() {
		return (
			<Aux>
				<Header handleToggle={this.handleToggle} />
				<Aux>{this.props.children}</Aux>
				<hr />
				<Footer />
			</Aux>
		);
	}
}

export default Layout;
