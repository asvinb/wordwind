/**
 * External dependencies
 */
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelect } from '@wordpress/data';
import { ENTER, BACKSPACE } from '@wordpress/keycodes';

/**
 * Internal dependencies
 */
import './Keyboard.css';
import Key from './Key';
import { STORE_NAME } from '../datastore/constants';
import { ReactComponent as BackspaceIcon } from '../assets/svg/backspace.svg';

const Keyboard = () => {
	const { addLetter, submitAttempt, eraseLetter } = useDispatch( STORE_NAME );

	const activeAttemptIndex = useSelect( ( select ) =>
		select( STORE_NAME ).getActiveAttemptIndex()
	);
	const canAddLetter = useSelect( ( select ) =>
		select( STORE_NAME ).canAddLetter()
	);

	const handleKeyDown = useCallback(
		( event ) => {
			const { ctrlKey, key, keyCode } = event;

			if ( ctrlKey ) {
				return;
			}

			if ( keyCode === ENTER ) {
				submitAttempt( activeAttemptIndex );
				return;
			}

			if ( keyCode === BACKSPACE ) {
				eraseLetter( activeAttemptIndex );
			}

			if ( keyCode >= 65 && keyCode <= 90 && canAddLetter ) {
				addLetter( key, activeAttemptIndex );
			}
		},
		[
			activeAttemptIndex,
			submitAttempt,
			eraseLetter,
			addLetter,
			canAddLetter,
		]
	);

	useEffect( () => {
		window.addEventListener( 'keydown', handleKeyDown );

		return () => {
			window.removeEventListener( 'keydown', handleKeyDown );
		};
	} );

	return (
		<div className="keyboard">
			<div className="keyboard__row">
				<Key value="q">q</Key>
				<Key value="w">w</Key>
				<Key value="e">e</Key>
				<Key value="r">r</Key>
				<Key value="t">t</Key>
				<Key value="y">y</Key>
				<Key value="u">u</Key>
				<Key value="i">i</Key>
				<Key value="o">o</Key>
				<Key value="p">p</Key>
			</div>
			<div className="keyboard__row">
				<Key value="a">a</Key>
				<Key value="s">s</Key>
				<Key value="d">d</Key>
				<Key value="f">f</Key>
				<Key value="g">g</Key>
				<Key value="h">h</Key>
				<Key value="j">j</Key>
				<Key value="k">k</Key>
				<Key value="l">l</Key>
			</div>
			<div className="keyboard__row">
				<Key value="enter">enter</Key>
				<Key value="z">z</Key>
				<Key value="x">x</Key>
				<Key value="c">c</Key>
				<Key value="v">v</Key>
				<Key value="b">b</Key>
				<Key value="n">n</Key>
				<Key value="m">m</Key>
				<Key value="backspace">
					<BackspaceIcon width={ 24 } height={ 24 } />
				</Key>
			</div>
		</div>
	);
};

export default Keyboard;
