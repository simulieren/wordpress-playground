# WordPress Multi-Block Example Plugin

A modern WordPress plugin demonstrating best practices for creating multiple custom blocks. Features a fully-functional accordion block with FAQ schema support and semantic HTML5 output.

## Features

### 🎯 Accordion Block
- **Multiple collapsible items** - Add/remove accordion sections dynamically
- **Rich text editing** - Full WordPress editor support for titles and content
- **Native HTML5** - Uses `<details>` and `<summary>` elements for accessibility
- **FAQ Schema** - Optional schema.org structured data for SEO
- **Responsive design** - Clean, mobile-friendly styling
- **Editor preview** - Live preview of accordion state in block editor

### 🛠️ Technical Features
- Multi-block architecture using blocks manifest
- Modern WordPress block development practices
- Comprehensive Laravel-style documentation
- SCSS styling with proper scoping
- TypeScript-ready with JSDoc annotations

## Installation

1. **Clone or download** this plugin to your WordPress installation:
   ```
   /wp-content/plugins/wp-multi-block-example/
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build the blocks**:
   ```bash
   npm run build
   ```

4. **Activate** the plugin in WordPress admin

## Development

### Quick Start
```bash
# Start development mode with hot reloading
npm run start

# Build for production
npm run build

# Lint JavaScript
npm run lint:js

# Lint CSS
npm run lint:css

# Format code
npm run format
```

### Project Structure
```
wp-multi-block-example/
├── build/                     # Compiled assets
│   ├── blocks-manifest.php    # WordPress blocks manifest
│   └── accordion-block/       # Compiled accordion block
├── src/                       # Source files
│   ├── wp-multi-block-example/ # Default example block
│   └── accordion-block/        # Accordion block source
│       ├── block.json          # Block configuration
│       ├── index.js           # Block registration
│       ├── edit.js            # Editor component
│       ├── save.js            # Frontend render
│       ├── style.scss         # Frontend & editor styles
│       └── editor.scss        # Editor-only styles
├── package.json               # NPM configuration
└── wp-multi-block-example.php # Main plugin file
```

## Usage

### Adding the Accordion Block

1. **Open WordPress editor** (Gutenberg)
2. **Click the + button** to add a new block
3. **Search for "Accordion"** or browse the Design category
4. **Add accordion items** using the interface
5. **Enable FAQ schema** in block settings (optional)

### Block Settings

**FAQ Schema Toggle**
- Located in the block settings panel (right sidebar)
- Adds structured data for search engine optimization
- Generates schema.org FAQPage markup
- Improves potential for rich snippets in search results

## Block Development

### Adding New Blocks

1. **Generate block structure**:
   ```bash
   npx @wordpress/create-block your-block-name --no-plugin
   ```

2. **Move to src directory**:
   ```bash
   mv your-block-name src/
   ```

3. **Update block registration** in `wp-multi-block-example.php`

4. **Build the plugin**:
   ```bash
   npm run build
   ```

### Code Standards

- **Documentation**: Laravel-style JSDoc comments
- **Styling**: SCSS with BEM methodology
- **JavaScript**: ES6+ with WordPress coding standards
- **Accessibility**: WCAG 2.1 AA compliance
- **SEO**: Schema.org structured data support

## API Reference

### Accordion Block Attributes

```javascript
{
  items: [
    {
      title: "string",    // Accordion item title
      content: "string",  // Accordion item content
      open: boolean       // Initial open state
    }
  ],
  enableFAQSchema: boolean  // FAQ schema toggle
}
```

### Block Editor Functions

**`addItem()`** - Add new accordion item
**`updateItem(index, field, value)`** - Update item property
**`removeItem(index)`** - Remove accordion item
**`toggleItem(index)`** - Toggle item open/closed state

## Browser Support

- **Modern browsers** (Chrome 60+, Firefox 55+, Safari 11+, Edge 79+)
- **Progressive enhancement** for older browsers
- **Mobile responsive** design
- **Accessibility** features included

## Contributing

1. **Fork** the repository
2. **Create** a feature branch
3. **Follow** WordPress coding standards
4. **Add** comprehensive documentation
5. **Test** thoroughly
6. **Submit** a pull request

### Development Guidelines

- Use `npm run start` for development
- Follow existing code patterns
- Add JSDoc documentation
- Test in multiple browsers
- Ensure accessibility compliance

## WordPress Compatibility

- **WordPress**: 6.7+
- **PHP**: 7.4+
- **Node.js**: 14+
- **NPM**: 6+

## License

This project is licensed under the GPL v2 or later - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions:

1. **Check documentation** in source files
2. **Review WordPress Block Editor Handbook**
3. **Browse WordPress developer resources**
4. **Test in WordPress admin**

## Changelog

### Version 1.0.0
- Initial release
- Accordion block with FAQ schema
- Multi-block architecture
- Comprehensive documentation
- Modern development workflow

---

**Built with** ❤️ **using WordPress Block Editor APIs and modern JavaScript**
