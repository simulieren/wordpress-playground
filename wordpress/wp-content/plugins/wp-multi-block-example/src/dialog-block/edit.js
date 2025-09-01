/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { triggerText, dialogTitle, dialogContent } = attributes;
	
	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Dialog Settings', 'wp-multi-block-example')}>
					<TextControl
						label={__('Trigger Button Text', 'wp-multi-block-example')}
						value={triggerText}
						onChange={(value) => setAttributes({ triggerText: value })}
					/>
					<TextControl
						label={__('Dialog Title', 'wp-multi-block-example')}
						value={dialogTitle}
						onChange={(value) => setAttributes({ dialogTitle: value })}
					/>
					<TextareaControl
						label={__('Dialog Content', 'wp-multi-block-example')}
						value={dialogContent}
						onChange={(value) => setAttributes({ dialogContent: value })}
						rows={4}
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<button type="button" className="wp-block-dialog-trigger">
					{triggerText || __('Open Dialog', 'wp-multi-block-example')}
				</button>
				<div className="dialog-preview">
					<strong>{dialogTitle}</strong>
					<p>{dialogContent}</p>
				</div>
			</div>
		</>
	);
}
