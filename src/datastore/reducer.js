/**
 * External dependencies
 */
import produce from 'immer';

export const initialState = {
	word: 'react',
	attempts: [],
	maximumAttempts: 6,
};

export const reducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case 'START_GAME':
			return produce( state, ( draft ) => {
				for ( let i = 0; i < state.maximumAttempts; i++ ) {
					draft.attempts.push( {
						submitted: false,
						letters: [],
					} );
				}
			} );
		case 'ADD_LETTER':
			return produce( state, ( draft ) => {
				draft.attempts[ action.index ].letters.push( action.letter );
			} );
		case 'ERASE_LETTER':
			return produce( state, ( draft ) => {
				draft.attempts[ action.index ].letters.pop();
			} );
		case 'SUBMIT_ATTEMPT':
			return produce( state, ( draft ) => {
				draft.attempts[ action.index ].submitted = true;
			} );
		default:
			return state;
	}
};
