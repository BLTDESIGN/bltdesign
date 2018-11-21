import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Aux from '../_Aux/_Aux';

class ScrollToTop extends Component {
	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0);
		}
	}

	render() {
		return <Aux>{this.props.children}</Aux>;
	}
}

export default withRouter(ScrollToTop);
