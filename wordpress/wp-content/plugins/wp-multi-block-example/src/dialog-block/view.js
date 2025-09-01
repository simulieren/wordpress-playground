/**
 * Frontend JavaScript for Dialog Block
 * Handles opening and closing of HTML dialog elements
 */
/** biome-ignore-all lint/complexity/useArrowFunction: <explanation> */

document.addEventListener('DOMContentLoaded', function() {
	// Handle dialog trigger buttons
	const dialogTriggers = document.querySelectorAll('.wp-block-dialog-trigger');

	dialogTriggers.forEach(trigger => {
		trigger.addEventListener('click', function() {
			const dialogId = this.getAttribute('data-dialog-target');
			const dialog = document.getElementById(dialogId);

			if (dialog) {
				dialog.showModal();
			}
		});
	});

	// Handle dialog close buttons
	const dialogCloseButtons = document.querySelectorAll('.wp-block-dialog-close');

	dialogCloseButtons.forEach(closeButton => {
		closeButton.addEventListener('click', function() {
			const dialog = this.closest('dialog');
			if (dialog) {
				dialog.close();
			}
		});
	});

	// Handle clicking outside dialog to close
	const dialogs = document.querySelectorAll('.wp-block-dialog');

	dialogs.forEach(dialog => {
		dialog.addEventListener('click', function(event) {
			// Check if click was on the dialog backdrop (not on dialog content)
			if (event.target === dialog) {
				dialog.close();
			}
		});

		// Handle ESC key to close dialog
		dialog.addEventListener('keydown', function(event) {
			if (event.key === 'Escape') {
				dialog.close();
			}
		});
	});
});
