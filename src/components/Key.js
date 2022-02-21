/**
 * External dependencies
 */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useDispatch, useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import './Key.css';
import { STORE_NAME } from '../datastore/constants';

const Key = ( { value, children } ) => {
	const { addLetter, submitAttempt, eraseLetter } = useDispatch( STORE_NAME );
	const activeAttemptIndex = useSelect( ( select ) =>
		select( STORE_NAME ).getActiveAttemptIndex()
	);
	const canAddLetter = useSelect( ( select ) =>
		select( STORE_NAME ).canAddLetter()
	);
	const hasLetterBeenUsed = useSelect( ( select ) =>
		select( STORE_NAME ).hasLetterBeenUsed( value )
	);
	const isLetterInWord = useSelect( ( select ) =>
		select( STORE_NAME ).isLetterInWord( value )
	);
	const isLetterPositionedCorrectly = useSelect( ( select ) =>
		select( STORE_NAME ).isLetterPositionedCorrectly( value )
	);

	const onClick = useCallback( () => {
		if ( value === 'enter' ) {
			submitAttempt( activeAttemptIndex );
			return;
		}

		if ( value === 'backspace' ) {
			eraseLetter( activeAttemptIndex );
			return;
		}

		if ( canAddLetter ) {
			addLetter( value, activeAttemptIndex );
		}
	}, [
		addLetter,
		value,
		activeAttemptIndex,
		canAddLetter,
		submitAttempt,
		eraseLetter,
	] );

	const disabled =
		! canAddLetter && value !== 'backspace' && value !== 'enter';

	return (
		<button
			className={ classNames( 'keyboard__key', {
				'keyboard__key--is-correct': isLetterPositionedCorrectly,
				'keyboard__key--is-valid':
					isLetterInWord &&
					hasLetterBeenUsed &&
					! isLetterPositionedCorrectly,
				'keyboard__key--is-invalid':
					! isLetterInWord && hasLetterBeenUsed,
				'keyboard__key--is-larger':
					value === 'backspace' || value === 'enter',
			} ) }
			onClick={ onClick }
			disabled={ disabled }
		>
			{ children }
		</button>
	);
};

Key.propTypes = {
	value: PropTypes.string.isRequired,
	children: PropTypes.node,
};

export default Key;
