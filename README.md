# JSON to TOON Converter

A Visual Studio Code extension that converts JSON files to TOON format.

## Features

- **Convert entire JSON files** to TOON format
- **Convert selected JSON text** to TOON format
- Right-click context menu support for quick conversion
- Command Palette integration

## Usage

### Convert Entire File

1. Open a JSON file in VS Code
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) to open the Command Palette
3. Type "TOON: Convert JSON to TOON" and select it
4. The entire file will be converted to TOON format

### Convert Selection

1. Select the JSON text you want to convert
2. Right-click and select "Convert Selection to TOON"
   - OR use the Command Palette: "TOON: Convert Selection to TOON"
3. The selected text will be replaced with its TOON representation

## Requirements

- VS Code version 1.74.0 or higher

## Installation

### From Marketplace

1. Open VS Code
2. Go to Extensions view (`Ctrl+Shift+X`)
3. Search for "JSON to TOON Converter"
4. Click Install

### From VSIX

1. Download the `.vsix` file
2. Open VS Code
3. Go to Extensions view
4. Click the `...` menu and select "Install from VSIX..."
5. Select the downloaded `.vsix` file

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm

### Setup

```bash
# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Watch for changes
npm run watch
```

### Testing

1. Press `F5` to open a new Extension Development Host window
2. Open a JSON file
3. Test the conversion commands

### Packaging

```bash
# Install vsce globally
npm install -g vsce

# Package the extension
vsce package
```

This will create a `.vsix` file that can be installed or published to the marketplace.

## Publishing

1. Create a publisher account on the [VS Code Marketplace](https://marketplace.visualstudio.com/manage)
2. Update the `publisher` field in `package.json`
3. Run `vsce publish` to publish the extension

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Issues

If you encounter any issues, please report them on the [GitHub repository](https://github.com/yourusername/toon-converter-ext/issues).
