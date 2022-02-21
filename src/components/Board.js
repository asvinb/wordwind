/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import './Board.css';
import Attempt from './Attempt';
import { STORE_NAME } from '../datastore/constants';

const Board = () => {
	const attempts = useSelect( ( select ) =>
		select( STORE_NAME ).getAttempts()
	);

	return (
		<div className="board__container">
			<div className="board">
				{ attempts.map( ( attempt, index ) => (
					<Attempt key={ index } attempt={ attempt } />
				) ) }
			</div>
		</div>
	);
};

export default Board;
