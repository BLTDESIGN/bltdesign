import React from 'react';
import { Link } from 'react-router-dom';

import toggleImage from '../../assets/images/menu.svg';
import danImage from '../../assets/images/dan.svg';
import mailBlackImage from '../../assets/images/mail-black.svg';
import instagramImage from '../../assets/images/instagram-black.svg';
import linkedImage from '../../assets/images/linkedin-black.svg';
import pinterestImage from '../../assets/images/pinterest-black.svg';

const header = props => {
	return (
		<header>
			<Link to="/" className="m-brand">
				<img src={danImage} style={{ height: '38px', width: '38px' }} alt="logo" />
			</Link>
			<nav id="l-fixedMenu" onClick={props.handleToggle}>
				<ul className="l-mobileDropdown" id="llmobileDropdown">
					<li>
						<Link className="m-blackText" to="/">
							Design
						</Link>
					</li>
					<li>
						<Link className="m-blackText" to="/ux/process">
							UX Process
						</Link>
					</li>
					<li>
						<Link className="m-blackText" to="/about">
							About
						</Link>
					</li>
				</ul>
			</nav>
			<div className="l-iconGroup" id="lliconGroup">
				<li className="inline">
					<a href="mailto:beltramo.dan@gmail.com">
						<img src={mailBlackImage} style={{ height: '20px', width: '20px' }} alt="Instagram" />
					</a>
				</li>
				<li className="inline">
					<a href="https://www.instagram.com/therealcorndan/" target="_blank" rel="noopener noreferrer">
						<img src={instagramImage} style={{ height: '20px', width: '20px' }} alt="Instagram" />
					</a>
				</li>
				<li className="inline">
					<a href="https://www.linkedin.com/in/danielbeltramo/" target="_blank" rel="noopener noreferrer">
						<img src={linkedImage} style={{ height: '20px', width: '20px' }} alt="Linkedin" />
					</a>
				</li>
				<li className="inline">
					<a href="https://www.pinterest.com/Dblt1234/" target="_blank" rel="noopener noreferrer">
						<img src={pinterestImage} style={{ height: '20px', width: '20px' }} alt="Pinterest" />
					</a>
				</li>
			</div>

			<img
				id="m-menu-toggle"
				width="22px"
				src={toggleImage}
				alt="Toggle menu"
				style={{ cursor: 'pointer' }}
				onClick={props.handleToggle}
			/>
		</header>
	);
};

export default header;
