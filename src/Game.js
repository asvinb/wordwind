/**
 * External dependencies
 */
import { useMount } from 'react-use';
import { useDispatch, useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import './Game.css';
import './datastore';
import Header from './components/Header';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { STORE_NAME } from './datastore/constants';

const Game = () => {
	const { startGame } = useDispatch( STORE_NAME );
	const attempts = useSelect( ( select ) =>
		select( STORE_NAME ).getAttempts()
	);

	useMount( () => {
		startGame();
	} );

	// If the game has not been started yet, do not show anything.
	if ( ! attempts.length ) {
		return null;
	}

	return (
		<div className="game">
			<Header />
			<Board />
			<Keyboard />
		</div>
	);
};

export default Game;
