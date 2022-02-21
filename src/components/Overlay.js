/**
 * External dependencies
 */
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import './Overlay.css';
import Button from './Button';
import { ReactComponent as CloseIcon } from '../assets/svg/close.svg';

const Overlay = ( { title, children, onClose } ) => {
	return (
		<div className="overlay animate-slide-in">
			<div className="overlay__container">
				<header>
					<h1>{ title }</h1>

					<Button onClick={ onClose } className="overlay__close">
						<CloseIcon width={ 24 } height={ 24 } />
					</Button>
				</header>
				<div className="overlay__content">{ children }</div>
			</div>
		</div>
	);
};

Overlay.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node,
	onClose: PropTypes.func.isRequired,
};

export default Overlay;
