export const startGame = () => {
	return {
		type: 'START_GAME',
	};
};

export const addLetter = ( letter, index ) => {
	return {
		type: 'ADD_LETTER',
		letter,
		index,
	};
};

export const submitAttempt = ( index ) => {
	return {
		type: 'SUBMIT_ATTEMPT',
		index,
	};
};

export const eraseLetter = ( index ) => {
	return {
		type: 'ERASE_LETTER',
		index,
	};
};
