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
						'open' => false
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
