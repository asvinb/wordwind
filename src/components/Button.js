/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import { useCallback } from 'react';

const Button = ( { value, children, onClick, className } ) => {
	const handleOnClick = useCallback( () => {
		if ( onClick && 'function' === typeof onClick ) {
			onClick( value );
		}
	}, [ value, onClick ] );

	return (
		<button className={ `button ${ className }` } onClick={ handleOnClick }>
			{ children }
		</button>
	);
};

Button.propTypes = {
	value: PropTypes.string,
	children: PropTypes.node,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	value: null,
	onClick: null,
};

export default Button;
