<?php
// This file is generated. Do not modify it manually.
return array(
	'accordion-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wp-multi-block-example/accordion',
		'version' => '0.1.0',
		'title' => 'Accordion',
		'category' => 'design',
		'icon' => 'list-view',
		'description' => 'A simple accordion with collapsible items using details and summary tags.',
		'example' => array(
			
		),
		'attributes' => array(
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Item 1',
						'content' => 'Content for item 1',
						'open' => false,
						'emoji' => ''
					)
				)
			),
			'enableFAQSchema' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			)
		),
		'textdomain' => 'wp-multi-block-example',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'dialog-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wp-multi-block-example/dialog-block',
		'version' => '0.1.0',
		'title' => 'Dialog Block',
		'category' => 'widgets',
		'icon' => 'format-chat',
		'description' => 'A block for creating modal dialogs using HTML dialog element.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'wp-multi-block-example',
		'attributes' => array(
			'triggerText' => array(
				'type' => 'string',
				'default' => 'Open Dialog'
			),
			'dialogTitle' => array(
				'type' => 'string',
				'default' => 'Dialog Title'
			),
			'dialogContent' => array(
				'type' => 'string',
				'default' => 'This is the dialog content.'
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'wp-multi-block-example' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/wp-multi-block-example',
		'version' => '0.1.0',
		'title' => 'Wp Multi Block Example',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'wp-multi-block-example',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
