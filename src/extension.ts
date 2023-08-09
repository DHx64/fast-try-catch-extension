import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let wrap = vscode.commands.registerCommand("fast-trycatch.wrapCustomTryCatch", () => {
    const config = vscode.workspace.getConfiguration("fast-trycatch");

    const exceptionVariable = config.get("exceptionVariable");
    const errorHandlingCode = config.get("errorHandlingCode");

    const editor = vscode.window.activeTextEditor;
    if (editor) {
      const selection = editor.selection;
      const selectedText = editor.document.getText(selection);

      const wrappedCode = `try {
  ${selectedText}
} catch (${exceptionVariable || "error"}) {
  ${errorHandlingCode || "console.log(error);"}
}`;

      editor.edit((editBuilder) => {
        editBuilder.replace(selection, wrappedCode);
      });
    }
  });

  let setConfig = vscode.commands.registerCommand("fast-trycatch.setConfig", async () => {
    const exceptionVariable = await vscode.window.showInputBox({
      placeHolder: "Enter the exception variable name",
      prompt: "Enter the variable name used for the caught exception in the catch block",
    });

    const errorHandlingCode = await vscode.window.showInputBox({
      placeHolder: "Enter the error handling code",
      prompt: "Enter the code you want to execute in the catch block",
    });

    if (exceptionVariable !== undefined && errorHandlingCode !== undefined) {
      vscode.workspace.getConfiguration().update("fast-trycatch.exceptionVariable", exceptionVariable, true);
      vscode.workspace.getConfiguration().update("fast-trycatch.errorHandlingCode", errorHandlingCode, true);

      vscode.window.showInformationMessage("Fast TryCatch configuration updated.");
    } else {
      vscode.window.showErrorMessage("Invalid input or operation canceled.");
    }
  });

  context.subscriptions.push(wrap, setConfig);
}

export function deactivate() {}
