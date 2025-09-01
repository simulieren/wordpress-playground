/**
 * Accordion Block Registration
 * 
 * Main entry point for the Accordion block. Registers the block type with WordPress,
 * defines its behavior, and imports necessary dependencies for both editor and frontend.
 * 
 * This block creates collapsible content sections using native HTML5 <details> and 
 * <summary> elements with optional FAQ schema.org structured data for SEO.
 *
 * @since 1.0.0
 * @author WordPress Contributors
 * @version 1.0.0
 * 
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 * 
 * @package wp-multi-block-example
 * 
 * Features:
 * - Multiple collapsible accordion items
 * - Rich text editing for titles and content
 * - FAQ schema.org markup toggle
 * - Semantic HTML5 output
 * - Accessible design
 * - SEO optimized
 */

/**
 * WordPress Block Registration API
 * 
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Block Styles
 * 
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal Block Dependencies
 * 
 * Imports the Edit component for the block editor interface,
 * the save function for frontend rendering, and block metadata
 * configuration from block.json.
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Register Accordion Block Type
 * 
 * Registers the accordion block with WordPress using metadata from block.json
 * and custom Edit/save functions. This makes the block available in the 
 * block inserter under the "Design" category.
 *
 * @since 1.0.0
 * 
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 * 
 * @param {string} metadata.name - Block name from block.json (wp-multi-block-example/accordion)
 * @param {Object} config - Block configuration object
 * @param {Function} config.edit - Edit component for block editor interface
 * @param {Function} config.save - Save function for frontend HTML generation
 * 
 * @example
 * // Block will be available as:
 * // Name: wp-multi-block-example/accordion
 * // Title: Accordion
 * // Category: Design
 * // Icon: list-view
 * 
 * // Usage in editor:
 * // 1. Open block inserter
 * // 2. Search for "Accordion" or browse Design category
 * // 3. Add block and configure items
 * // 4. Optionally enable FAQ schema in block settings
 */
registerBlockType( metadata.name, {
	/**
	 * Edit Component
	 * 
	 * Defines the block's behavior in the editor interface.
	 * Provides interactive accordion builder with rich text editing.
	 * 
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * Save Function
	 * 
	 * Defines how the block renders on the frontend.
	 * Outputs semantic HTML with optional FAQ schema markup.
	 * 
	 * @see ./save.js
	 */
	save,
} );