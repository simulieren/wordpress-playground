import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody, ToggleControl } from '@wordpress/components';
import './editor.scss';

/**
 * Accordion Block Editor Component
 * 
 * Provides an interactive accordion builder in the WordPress block editor.
 * Allows users to create multiple collapsible content sections with rich text editing.
 * Includes FAQ schema toggle for SEO optimization.
 *
 * @since 1.0.0
 * @author WordPress Contributors
 * 
 * @param {Object} props - Component properties
 * @param {Object} props.attributes - Block attributes containing items and settings
 * @param {Array} props.attributes.items - Array of accordion items with title, content, and open state
 * @param {boolean} props.attributes.enableFAQSchema - Whether FAQ schema markup is enabled
 * @param {Function} props.setAttributes - Function to update block attributes
 * 
 * @return {JSX.Element} The accordion editor component
 * 
 * @example
 * // Used automatically by WordPress when the block is added to editor
 * // Block attributes structure:
 * // {
 * //   items: [
 * //     { title: "Question 1", content: "Answer 1", open: false }
 * //   ],
 * //   enableFAQSchema: false
 * // }
 */
export default function Edit({ attributes, setAttributes }) {
	const { items, enableFAQSchema } = attributes;

	/**
	 * Add New Accordion Item
	 * 
	 * Creates a new accordion item with default title and content,
	 * then updates the block attributes with the expanded items array.
	 *
	 * @since 1.0.0
	 * 
	 * @return {void}
	 * 
	 * @example
	 * // Triggered when user clicks "Add Accordion Item" button
	 * addItem(); // Adds new item with auto-incremented number
	 */
	const addItem = () => {
		const newItems = [...items];
		newItems.push({
			title: `Item ${items.length + 1}`,
			content: `Content for item ${items.length + 1}`,
			open: false
		});
		setAttributes({ items: newItems });
	};

	/**
	 * Update Accordion Item Property
	 * 
	 * Updates a specific field of an accordion item at the given index.
	 * Commonly used to update title or content when user edits text.
	 *
	 * @since 1.0.0
	 * 
	 * @param {number} index - Zero-based index of the item to update
	 * @param {string} field - Property name to update ('title', 'content', or 'open')
	 * @param {string|boolean} value - New value for the specified field
	 * 
	 * @return {void}
	 * 
	 * @example
	 * // Update title of first accordion item
	 * updateItem(0, 'title', 'New Question Title');
	 * 
	 * // Update content of second accordion item
	 * updateItem(1, 'content', 'Updated answer content');
	 * 
	 * // Toggle open state
	 * updateItem(0, 'open', true);
	 */
	const updateItem = (index, field, value) => {
		const newItems = [...items];
		newItems[index][field] = value;
		setAttributes({ items: newItems });
	};

	/**
	 * Remove Accordion Item
	 * 
	 * Removes an accordion item at the specified index and updates
	 * the block attributes with the filtered items array.
	 *
	 * @since 1.0.0
	 * 
	 * @param {number} index - Zero-based index of the item to remove
	 * 
	 * @return {void}
	 * 
	 * @example
	 * // Remove the third accordion item
	 * removeItem(2);
	 */
	const removeItem = (index) => {
		const newItems = items.filter((_, i) => i !== index);
		setAttributes({ items: newItems });
	};

	/**
	 * Toggle Accordion Item Open State
	 * 
	 * Toggles the expanded/collapsed state of an accordion item in the editor.
	 * This provides a preview of how the item will appear on the frontend.
	 *
	 * @since 1.0.0
	 * 
	 * @param {number} index - Zero-based index of the item to toggle
	 * 
	 * @return {void}
	 * 
	 * @example
	 * // Toggle first accordion item
	 * toggleItem(0); // Opens if closed, closes if open
	 */
	const toggleItem = (index) => {
		const newItems = [...items];
		newItems[index].open = !newItems[index].open;
		setAttributes({ items: newItems });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('FAQ Schema', 'wp-multi-block-example')}>
					<ToggleControl
						label={__('Enable FAQ Schema', 'wp-multi-block-example')}
						help={__('Add structured data for better SEO when using as FAQ.', 'wp-multi-block-example')}
						checked={enableFAQSchema}
						onChange={(value) => setAttributes({ enableFAQSchema: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<div className="wp-block-accordion-editor">
				{items.map((item, index) => (
					<div key={index} className="accordion-item-editor">
						<div className="accordion-header">
							<button
								className="accordion-toggle"
								onClick={() => toggleItem(index)}
								aria-expanded={item.open}
							>
								<span className="accordion-arrow">{item.open ? '▼' : '▶'}</span>
							</button>
							<RichText
								tagName="div"
								className="accordion-title"
								value={item.title}
								onChange={(value) => updateItem(index, 'title', value)}
								placeholder={__('Enter title...', 'wp-multi-block-example')}
							/>
							<Button
								isDestructive
								size="small"
								onClick={() => removeItem(index)}
							>
								{__('Remove', 'wp-multi-block-example')}
							</Button>
						</div>
						{item.open && (
							<div className="accordion-content">
								<RichText
									tagName="p"
									value={item.content}
									onChange={(value) => updateItem(index, 'content', value)}
									placeholder={__('Enter content...', 'wp-multi-block-example')}
									allowedFormats={['core/bold', 'core/italic', 'core/link']}
								/>
							</div>
						)}
					</div>
				))}
				<Button
					variant="primary"
					onClick={addItem}
				>
					{__('Add Accordion Item', 'wp-multi-block-example')}
				</Button>
				</div>
			</div>
		</>
	);
}