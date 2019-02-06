import React from 'react';

const Header = ({ backgroundImage, sportLogo }) => {
	return (
		<div
			id="header"
			style={{
				background: `linear-gradient(rgba(27,52,63,0.41), #050708) ,url(${backgroundImage}) center center no-repeat`
				// backgroundSize: 'cover',
				// width: '100%'
			}}
		>
			<div className="header-logo">
				<img src={sportLogo} />
			</div>
		</div>
	);
};

export default Header;
