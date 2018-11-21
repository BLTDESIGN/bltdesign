import React from 'react';

import mailBlackImage from '../../assets/images/mail-black.svg';
import instagramImage from '../../assets/images/instagram-black.svg';
import linkedInImage from '../../assets/images/linkedin-black.svg';
import pintrestImage from '../../assets/images/pinterest-black.svg';

const footer = props => {
	return (
		<footer>
			<ul className="footer">
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
						<img src={linkedInImage} style={{ height: '20px', width: '20px' }} alt="Linkedin" />
					</a>
				</li>
				<li className="inline">
					<a href="https://www.pinterest.com/Dblt1234/" target="_blank" rel="noopener noreferrer">
						<img src={pintrestImage} style={{ height: '20px', width: '20px' }} alt="Pinterest" />
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default footer;
