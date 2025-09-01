import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Accordion Block Save Function
 * 
 * Renders the final HTML markup for the accordion block on the frontend.
 * Converts block attributes into semantic HTML using <details> and <summary> elements.
 * Optionally includes FAQ schema.org structured data for SEO optimization.
 *
 * @since 1.0.0
 * @author WordPress Contributors
 * 
 * @param {Object} props - Save function properties
 * @param {Object} props.attributes - Block attributes from the editor
 * @param {Array} props.attributes.items - Array of accordion items with title, content, and open state
 * @param {boolean} props.attributes.enableFAQSchema - Whether to include FAQ schema markup
 * 
 * @return {JSX.Element} The final HTML structure for the frontend
 * 
 * @example
 * // Automatically called by WordPress when rendering the block
 * // Input attributes:
 * // {
 * //   items: [
 * //     { title: "What is WordPress?", content: "A content management system", open: false }
 * //   ],
 * //   enableFAQSchema: true
 * // }
 * 
 * // Output HTML:
 * // <div class="wp-block-accordion">
 * //   <script type="application/ld+json">{...schema...}</script>
 * //   <details class="accordion-item">
 * //     <summary class="accordion-summary">What is WordPress?</summary>
 * //     <div class="accordion-details">A content management system</div>
 * //   </details>
 * // </div>
 */
export default function save({ attributes }) {
	const { items, enableFAQSchema } = attributes;

	/**
	 * Generate FAQ Schema.org Structured Data
	 * 
	 * Creates JSON-LD structured data following schema.org FAQ specification.
	 * Maps accordion items to Question/Answer format with HTML tags stripped.
	 * Only generated when enableFAQSchema is true.
	 *
	 * @since 1.0.0
	 * 
	 * @type {Object|null} FAQ schema object or null if disabled
	 * 
	 * @example
	 * // Generated schema structure:
	 * // {
	 * //   "@context": "https://schema.org",
	 * //   "@type": "FAQPage",
	 * //   "mainEntity": [
	 * //     {
	 * //       "@type": "Question",
	 * //       "name": "Clean question text",
	 * //       "acceptedAnswer": {
	 * //         "@type": "Answer",
	 * //         "text": "Clean answer text"
	 * //       }
	 * //     }
	 * //   ]
	 * // }
	 */
	const faqSchema = enableFAQSchema ? {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": items.map(item => ({
			"@type": "Question",
			"name": item.title?.replace(/<[^>]+>/g, '') || '',
			"acceptedAnswer": {
				"@type": "Answer",
				"text": item.content?.replace(/<[^>]+>/g, '') || ''
			}
		}))
	} : null;

	return (
		<div {...useBlockProps.save()}>
			{enableFAQSchema && (
				<script type="application/ld+json">
					{JSON.stringify(faqSchema)}
				</script>
			)}
			<div className="wp-block-accordion">
				{items.map((item, index) => (
					<details key={index} className="accordion-item" open={item.open}>
						<summary className="accordion-summary">
							{item.emoji && (
								<span className="accordion-emoji">{item.emoji}</span>
							)}
							<RichText.Content
								tagName="span"
								value={item.title}
							/>
						</summary>
						<div className="accordion-details">
							<RichText.Content
								tagName="div"
								value={item.content}
							/>
						</div>
					</details>
				))}
			</div>
		</div>
	);
}