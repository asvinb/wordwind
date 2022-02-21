/**
 * WordPress dependencies
 */
import { createReduxStore, register } from '@wordpress/data';

/**
 * Internal dependencies
 */
import * as actions from './actions';
import * as controls from './controls';
import * as selectors from './selectors';
import * as resolvers from './resolvers';
import { reducer } from './reducer';
import { STORE_NAME } from './constants';

const store = createReduxStore( STORE_NAME, {
	actions,
	controls,
	reducer,
	resolvers,
	selectors,
} );

register( store );
