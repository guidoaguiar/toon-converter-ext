# Publishing Guide

## Prerequisites

1. **Create a Publisher Account**
   - Go to https://marketplace.visualstudio.com/manage
   - Sign in with your Microsoft account
   - Create a new publisher
   - Note your publisher ID

2. **Install vsce**
   ```bash
   npm install -g vsce
   ```

3. **Get a Personal Access Token**
   - Go to https://dev.azure.com
   - User Settings → Personal Access Tokens
   - Create a new token with "Marketplace (Manage)" scope

## Update package.json

Before publishing, update these fields in `package.json`:

- `publisher`: Your publisher ID (e.g., "your-publisher-name")
- `repository.url`: Your actual repository URL
- `version`: Update version number for each release

## Publishing Steps

1. **Login to vsce**
   ```bash
   vsce login <your-publisher-name>
   ```
   Enter your Personal Access Token when prompted.

2. **Package the Extension**
   ```bash
   vsce package
   ```
   This creates a `.vsix` file.

3. **Publish the Extension**
   ```bash
   vsce publish
   ```

   Or publish a specific version:
   ```bash
   vsce publish <version>
   ```

## Updating the Extension

1. Update the version in `package.json`
2. Update `CHANGELOG.md` with new changes
3. Run `vsce publish` again

## Alternative: Manual Upload

1. Package the extension: `vsce package`
2. Go to https://marketplace.visualstudio.com/manage
3. Select your publisher
4. Click "New extension" → "Visual Studio Code"
5. Upload the `.vsix` file

## Notes

- The extension will be available on the marketplace within a few minutes
- Make sure to test the extension thoroughly before publishing
- Follow the VS Code extension guidelines: https://code.visualstudio.com/api/references/extension-guidelines
