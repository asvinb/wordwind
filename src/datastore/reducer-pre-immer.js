export const initialState = {
	word: 'bread',
	attempts: [],
	maximumAttempts: 6,
};

export const reducer = ( state = initialState, action ) => {
	const attempts = [ ...state.attempts ];

	switch ( action.type ) {
		case 'START_GAME':
			const possibleAttempts = [];
			for ( let i = 0; i < state.maximumAttempts; i++ ) {
				possibleAttempts.push( {
					submitted: false,
					letters: [],
				} );
			}

			return {
				...state,
				attempts: possibleAttempts,
			};
		case 'ADD_LETTER':
			attempts[ action.index ] = {
				...attempts[ action.index ],
				letters: [
					...attempts[ action.index ]?.letters,
					action.letter,
				],
			};

			return {
				...state,
				attempts: [ ...attempts ],
			};
		case 'ERASE_LETTER':
			const letters = [ ...attempts[ action.index ]?.letters ];

			if ( letters.length ) {
				letters.pop();
				attempts[ action.index ] = {
					...attempts[ action.index ],
					letters,
				};
			}

			return {
				...state,
				attempts: [ ...attempts ],
			};
		case 'SUBMIT_ATTEMPT':
			attempts[ action.index ] = {
				...attempts[ action.index ],
				submitted: true,
			};

			return {
				...state,
				attempts: [ ...attempts ],
			};
		default:
			return state;
	}
};
