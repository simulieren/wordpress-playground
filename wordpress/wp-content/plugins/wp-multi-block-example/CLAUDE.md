# Multi-Block WordPress Plugin Development Guide

This file provides guidance for developing a multi-block WordPress plugin following best practices from the WordPress developer guidelines.

## Project Structure

```
wp-multi-block-example/
├── build/                     # Compiled assets (git-ignored)
│   ├── blocks.json            # Block manifest for WordPress
│   ├── index.js               # Compiled JavaScript bundle
│   ├── index.css              # Compiled editor styles
│   ├── style-index.css        # Compiled frontend styles
│   └── index.asset.php        # WordPress dependencies & version
├── node_modules/              # NPM dependencies (git-ignored)
├── src/                       # Source files
│   └── blocks/                # All block source files
│       ├── block-one/         # First block
│       │   ├── block.json     # Block metadata & configuration
│       │   ├── index.js       # Block registration & setup
│       │   ├── edit.js        # Editor component
│       │   ├── save.js        # Frontend render function
│       │   ├── editor.scss    # Editor-only styles
│       │   ├── style.scss     # Frontend & editor styles
│       │   └── view.js        # Frontend JavaScript (optional)
│       └── block-two/         # Second block (same structure)
├── .editorconfig              # Editor configuration
├── .gitignore                 # Git ignore rules
├── package.json               # NPM dependencies & scripts
├── package-lock.json          # Locked dependency versions
├── readme.txt                 # WordPress plugin readme
└── wp-multi-block-example.php # Main plugin file & block registration
```

## Block Registration Pattern

Use dynamic array-based registration in the main plugin file:

```php
function multiblock_register_blocks() {
    $custom_blocks = array(
        'block-one',
        'block-two',
        // Add new blocks to this array
    );

    foreach ( $custom_blocks as $block ) {
        register_block_type( __DIR__ . '/build/blocks/' . $block );
    }
}
add_action( 'init', 'multiblock_register_blocks' );
```

## Build Configuration

### Scripts in package.json
- `npm run build` - Build all blocks with blocks manifest
- `npm run start` - Development mode with watch and blocks manifest
- `npm run format` - Format code
- `npm run lint:js` - Lint JavaScript
- `npm run lint:css` - Lint styles

### Build Commands
```bash
# Build with blocks manifest (required for multi-block)
npm run build

# Development mode
npm run start
```

## Creating New Blocks

1. Generate a new block without creating a new plugin:
```bash
npx @wordpress/create-block block-name --no-plugin
```

2. Move the generated block to `src/blocks/block-name/`

3. Add the block name to the `$custom_blocks` array in the main plugin file

4. Run build command to compile the new block

## Asset Management

### Combining Assets
For production, consider creating entry point files:
- `multi-block-editor.js` - Import all block editor scripts
- `multi-block-frontend.js` - Import all frontend scripts

### Enqueuing Combined Assets
```php
function multiblock_enqueue_assets() {
    wp_enqueue_script(
        'multiblock-editor',
        plugin_dir_url( __FILE__ ) . 'build/multi-block-editor.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'build/multi-block-editor.js' )
    );
}
add_action( 'enqueue_block_editor_assets', 'multiblock_enqueue_assets' );
```

## Best Practices

1. **Consistent Text Domain**: Use the same text domain across all blocks
2. **Modular Structure**: Keep blocks in separate directories under `src/blocks/`
3. **Dynamic Registration**: Use array-based registration for easy block management
4. **Build Optimization**: Use `--blocks-manifest` flag for proper multi-block builds
5. **Clean block.json**: Remove unnecessary file references when combining assets
6. **Performance**: Combine and minimize assets for production

## Development Workflow

1. Create or modify blocks in `src/blocks/`
2. Update the blocks array in the main plugin file if adding new blocks
3. Run `npm run build` to compile changes
4. Test in WordPress admin

## Important Notes

- The `--blocks-manifest` flag is crucial for multi-block plugins
- All blocks share the same `package.json` dependencies
- Block assets are compiled to `build/blocks/` directory
- Each block maintains its own `block.json` metadata file
