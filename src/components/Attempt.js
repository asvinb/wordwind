/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import Tile from './Tile';
import { STORE_NAME } from '../datastore/constants';

const Attempt = ( { attempt } ) => {
	const wordOfTheDayLength = useSelect( ( select ) =>
		select( STORE_NAME ).getWordOfTheDayLength()
	);

	return (
		<div className="board__row">
			{ [ ...Array( wordOfTheDayLength ) ].map( ( _, index ) => (
				<Tile
					key={ index }
					index={ index }
					value={ attempt?.letters?.[ index ] || undefined }
					submitted={ attempt.submitted }
				/>
			) ) }
		</div>
	);
};

Attempt.propTypes = {
	attempt: PropTypes.shape( {
		letters: PropTypes.arrayOf( PropTypes.string ).isRequired,
		submitted: PropTypes.bool.isRequired,
	} ).isRequired,
};

export default Attempt;
