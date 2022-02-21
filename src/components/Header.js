/**
 * External dependencies
 */
import { useState } from 'react';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './Header.css';
import Button from './Button';
import Overlay from './Overlay';
import { ReactComponent as HelpIcon } from '../assets/svg/help.svg';
import { ReactComponent as StatisticsIcon } from '../assets/svg/statistics.svg';
import { ReactComponent as SettingsIcon } from '../assets/svg/settings.svg';

const Header = () => {
	const [ isSettingsOverlayOpen, setSettingsOverlayOpen ] = useState( false );

	const handleOnSettingsClick = () =>
		setSettingsOverlayOpen( ! isSettingsOverlayOpen );

	return (
		<header className="header">
			<div className="menu">
				<Button>
					<HelpIcon width={ 24 } height={ 24 } />
				</Button>
			</div>
			<p>wordwind</p>
			<div className="menu">
				<Button>
					<StatisticsIcon width={ 24 } height={ 24 } />
				</Button>
				<Button onClick={ handleOnSettingsClick }>
					<SettingsIcon width={ 24 } height={ 24 } />
				</Button>
			</div>

			{ isSettingsOverlayOpen && (
				<Overlay
					title={ __( 'Settings', 'wordwind' ) }
					onClose={ handleOnSettingsClick }
				/>
			) }
		</header>
	);
};

export default Header;
