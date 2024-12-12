QR Generator

This project is a simple QR Code Generator built with HTML, CSS, and JavaScript. Users can input text or a URL to generate a QR code dynamically.

Features

Input field to enter any text or URL.

Button to generate a QR code.

Dynamically displays the generated QR code.

Files in the Project

index.html: The main HTML structure for the QR Code Generator.

style.css: The stylesheet for styling the page (linked in the index.html but not provided here).

script.js: JavaScript functionality to handle QR code generation (linked in the index.html but not provided here).

How to Use

Open index.html in a web browser.

Enter any data or URL in the input field.

Click the Generate QR button.

The generated QR code will appear below the input field.

Requirements

A modern web browser to run the application.

Future Enhancements

Add support for saving the QR code as an image.

Enhance the user interface for better usability.

Provide options for customizing the QR code (e.g., size, color).



This is a simple web-based QR Code Generator that allows users to input text or a URL and generate a corresponding QR code.

## Features
- User-friendly interface.
- Ability to input any text or URL.
- Generates a QR code instantly.

## Project Structure

The project consists of the following files:

- **index.html**: The main HTML file that contains the structure of the web application.
- **style.css**: The CSS file for styling the application (needs to be added).
- **script.js**: The JavaScript file that handles QR code generation (needs to be added).

## How to Use
1. Clone or download the repository.
2. Open `index.html` in your web browser.
3. Enter text or a URL in the input field.
4. Click the "Generate QR" button.
5. View the generated QR code in the designated area.

## Requirements
- A modern web browser.

## Future Enhancements
- Add error handling for invalid input.
- Improve the design with better styling.
- Support for downloading the generated QR code.

## License
This project is open-source and available under the [MIT License](LICENSE).


This project is a simple QR Code Generator that allows users to create a QR code by entering any data or URL. The project is built using HTML, CSS, and JavaScript.

Features

User-friendly interface.

Generates QR codes for any text or URL.

Displays the generated QR code on the page.

Utilizes a public API to generate QR codes dynamically.

Project Structure

The project consists of the following files:

index.html: The main HTML file that contains the structure of the application.

style.css: The CSS file for styling the application, providing:

A responsive and centered layout.

Stylish buttons with hover effects.

A visually appealing background and container design.

script.js: The JavaScript file for handling QR code generation and user interactions.

JavaScript Highlights

The script.js file includes:

Selectors:

References to the input field, button, and image element.

QR Code Generation:

Uses the https://api.qrserver.com/v1/create-qr-code/ API to dynamically generate QR codes based on user input.

Encodes the user input to ensure proper URL formatting.

Event Handling:

Listens for button clicks to trigger QR code generation.

Alerts the user if no input is provided.

Key Functions

genrateqr:

Validates the input.

Updates the src attribute of the image element to display the QR code.

Event Listener:

Attached to the button to call the genrateqr function when clicked.

Usage

Clone or download the repository.

Open the index.html file in any modern web browser.

Enter text or a URL in the input field.

Click the "Generate QR" button to generate a QR code.

The generated QR code will be displayed below the button.

Requirements

A modern web browser that supports HTML5, CSS3, and JavaScript.

Credits

This project was developed as a basic implementation of a QR code generator using web technologies and the https://api.qrserver.com API.