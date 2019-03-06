/**
 * AMP Latest Stories block, mainly forked from the Gutenberg 'Latest Posts' block.
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import edit from './edit';

export const name = 'amp/amp-latest-stories';

export const settings = {
	title: __( 'AMP Latest Stories', 'amp' ),
	description: __( 'See the latest AMP stories', 'amp' ),
	icon: 'list-view',
	category: 'widgets',
	keywords: [
		__( 'Recent stories', 'amp' ),
		__( 'AMP stories', 'amp' ),
	],

	supports: {
		html: false,
	},

	edit,

	/**
	 * Rendered in PHP as a dynamic block.
	 *
	 * @return {null} Renders in PHP.
	 */
	save() {
		return null;
	},
};

registerBlockType( name, settings );
