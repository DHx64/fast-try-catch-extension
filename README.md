# Fast TryCatch - Visual Studio Code Extension

**Fast TryCatch** is a Visual Studio Code extension that simplifies adding try-catch blocks to your JavaScript or TypeScript code, making error handling faster and more convenient.

## Features

- Wrap selected code in a custom try-catch block with just a few clicks.
- Customize the exception variable name and error handling code to match your coding style.

## Installation

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side.
3. Search for "Fast TryCatch" and install the extension authored by "YourPublisherName".

## Usage

1. Select the code you want to wrap in a try-catch block.
2. Right-click and choose "Fast-TryCatch: Wrap in custom trycatch" from the context menu, or use the assigned keybinding (if set).
3. Enter your preferred exception variable name and error handling code in the input dialogs.
4. The selected code will be enclosed in a try-catch block with the specified configuration.

## Commands

- **Fast-TryCatch: Wrap in custom trycatch**: Wrap selected code in a custom try-catch block.
- **Fast-TryCatch: Set Configuration**: Configure the exception variable and error handling code.

To use the commands, you can:

- Right-click on the selected code and choose the appropriate command.
- Use assigned keybindings for quicker access.

## Configuration

You can configure the extension by going to the VS Code settings (`File > Preferences > Settings`), and under "Fast-TryCatch" settings, you can customize:

- `fast-trycatch.exceptionVariable`: The variable name for the caught exception.
- `fast-trycatch.errorHandlingCode`: Custom error handling code.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests on [GitHub](https://github.com/DHx64/fast-try-catch-extension).

## License

Copyright (c) 2023 Denis Harambasic

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
