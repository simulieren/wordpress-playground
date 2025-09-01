/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const { triggerText, dialogTitle, dialogContent } = attributes;
	const blockProps = useBlockProps.save();
	const dialogId = `dialog-${Math.random().toString(36).substr(2, 9)}`;
	
	return (
		<div { ...blockProps }>
			<button 
				type="button" 
				className="wp-block-dialog-trigger"
				data-dialog-target={dialogId}
			>
				{triggerText || 'Open Dialog'}
			</button>
			<dialog id={dialogId} className="wp-block-dialog">
				<div className="wp-block-dialog-content">
					<header className="wp-block-dialog-header">
						<h2>{dialogTitle}</h2>
						<button 
							type="button" 
							className="wp-block-dialog-close" 
							aria-label="Close dialog"
						>
							×
						</button>
					</header>
					<div className="wp-block-dialog-body">
						<p>{dialogContent}</p>
					</div>
				</div>
			</dialog>
		</div>
	);
}
