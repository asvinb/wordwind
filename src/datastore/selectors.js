export const getAttempts = ( state ) => {
	return state.attempts;
};

export const getActiveAttemptIndex = ( state ) => {
	return state.attempts.findIndex( ( attempt ) => ! attempt.submitted );
};

export const getActiveAttemptLetters = ( state ) => {
	const activeAttemptIndex = getActiveAttemptIndex( state );
	return state.attempts[ activeAttemptIndex ]?.letters;
};

export const canAddLetter = ( state ) => {
	const activeAttemptIndex = getActiveAttemptIndex( state );
	return (
		activeAttemptIndex !== -1 &&
		state.attempts[ activeAttemptIndex ].letters.length < 5
	);
};

export const isLetterInWord = ( state, letter ) => {
	return state.word.includes( letter );
};

export const isLetterPositionedCorrectly = ( state, letter, index ) => {
	if ( index ) {
		return state.word[ index ] === letter;
	}

	for ( let i = 0; i < state.attempts.length; i++ ) {
		const { submitted, letters } = state.attempts[ i ];

		if ( submitted ) {
			const letterIndex = letters.indexOf( letter );

			if ( state.word[ letterIndex ] === letter ) {
				return true;
			}
		}
	}

	return false;
};

export const hasLetterBeenUsed = ( state, letter ) => {
	const allLetters = state.attempts
		.filter( ( attempt ) => attempt.submitted )
		.reduce( ( acc, attempt ) => [ ...acc, ...attempt.letters ], [] );

	return allLetters.includes( letter );
};

export const getWordOfTheDayLength = ( state ) => {
	return state.word?.length;
};
