import * as vscode from 'vscode';
import { encode } from '@toon-format/toon';

export function activate(context: vscode.ExtensionContext) {
    console.log('TOON Converter extension is now active!');

    // Command: Convert entire JSON file to TOON
    const convertJsonToToon = vscode.commands.registerCommand(
        'toonConverter.convertJsonToToon',
        async () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                vscode.window.showWarningMessage('No active editor found.');
                return;
            }

            const document = editor.document;
            const fullText = document.getText();

            if (!fullText.trim()) {
                vscode.window.showWarningMessage('The document is empty.');
                return;
            }

            try {
                // Parse JSON
                let jsonObject: any;
                try {
                    jsonObject = JSON.parse(fullText);
                } catch (parseError) {
                    vscode.window.showErrorMessage('Invalid JSON format. Please check your JSON syntax.');
                    return;
                }
                
                // Convert to TOON
                let toonText: string;
                try {
                    toonText = encode(jsonObject);
                } catch (encodeError) {
                    const errorMessage = encodeError instanceof Error ? encodeError.message : 'Unknown encoding error';
                    vscode.window.showErrorMessage(`Failed to encode to TOON format: ${errorMessage}`);
                    return;
                }

                // Replace entire document
                const fullRange = new vscode.Range(
                    document.positionAt(0),
                    document.positionAt(fullText.length)
                );

                await editor.edit(editBuilder => {
                    editBuilder.replace(fullRange, toonText);
                });

                // Change language mode to plain text (or create a TOON language mode)
                await vscode.languages.setTextDocumentLanguage(document, 'plaintext');

                vscode.window.showInformationMessage('JSON converted to TOON successfully!');
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'Unknown error';
                vscode.window.showErrorMessage(`Unexpected error: ${errorMessage}`);
            }
        }
    );

    // Command: Convert selected JSON to TOON
    const convertSelectionToToon = vscode.commands.registerCommand(
        'toonConverter.convertSelectionToToon',
        async () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                vscode.window.showWarningMessage('No active editor found.');
                return;
            }

            const selection = editor.selection;
            if (selection.isEmpty) {
                vscode.window.showWarningMessage('Please select some JSON text to convert.');
                return;
            }

            const selectedText = editor.document.getText(selection);

            try {
                // Parse JSON
                let jsonObject: any;
                try {
                    jsonObject = JSON.parse(selectedText);
                } catch (parseError) {
                    vscode.window.showErrorMessage('Invalid JSON format. Please check your JSON syntax.');
                    return;
                }
                
                // Convert to TOON
                let toonText: string;
                try {
                    toonText = encode(jsonObject);
                } catch (encodeError) {
                    const errorMessage = encodeError instanceof Error ? encodeError.message : 'Unknown encoding error';
                    vscode.window.showErrorMessage(`Failed to encode to TOON format: ${errorMessage}`);
                    return;
                }

                // Replace selection
                await editor.edit(editBuilder => {
                    editBuilder.replace(selection, toonText);
                });

                vscode.window.showInformationMessage('Selection converted to TOON successfully!');
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'Unknown error';
                vscode.window.showErrorMessage(`Unexpected error: ${errorMessage}`);
            }
        }
    );

    context.subscriptions.push(convertJsonToToon, convertSelectionToToon);
}

export function deactivate() {
    console.log('TOON Converter extension is now deactivated.');
}
