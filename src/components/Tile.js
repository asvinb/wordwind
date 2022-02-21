/**
 * External dependencies
 */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import './Tile.css';
import { STORE_NAME } from '../datastore/constants';

const Tile = ( { value, index, submitted } ) => {
	const isLetterInWord = useSelect( ( select ) =>
		select( STORE_NAME ).isLetterInWord( value, index )
	);
	const isLetterPositionedCorrectly = useSelect( ( select ) =>
		select( STORE_NAME ).isLetterPositionedCorrectly( value, index )
	);

	return (
		<span
			className={ classNames( 'tile', {
				'tile--is-not-empty': value && ! submitted,
				'tile--is-valid':
					value &&
					isLetterInWord &&
					! isLetterPositionedCorrectly &&
					submitted,
				'tile--is-invalid': value && ! isLetterInWord && submitted,
				'tile--is-correct':
					value &&
					isLetterInWord &&
					isLetterPositionedCorrectly &&
					submitted,
				'animate-pop-in': ! submitted && value,
			} ) }
		>
			{ value }
		</span>
	);
};

Tile.propTypes = {
	value: PropTypes.string,
	index: PropTypes.number.isRequired,
	submitted: PropTypes.bool,
};

Tile.defaultProps = {
	value: null,
	submitted: false,
};

export default Tile;
