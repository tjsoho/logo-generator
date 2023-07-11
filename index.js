const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

// Prompt the user for logo text, text color, shape selection, and shape color
inquirer
  .prompt([
    {
      name: 'logoText',
      message: 'Enter up to three characters for the logo text:',
      validate: (input) => input.length <= 3 || 'Logo text should be up to three characters',
    },
    {
      name: 'textColor',
      message: 'Enter a color keyword or a hexadecimal number for the text color:',
    },
    {
      name: 'shape',
      type: 'list',
      message: 'Select a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      name: 'shapeColor',
      message: 'Enter a color keyword or a hexadecimal number for the shape color:',
    },
  ])
  .then(({ logoText, textColor, shape, shapeColor }) => {
    let shapeObj;

    // Create the appropriate shape object based on user selection
    switch (shape) {
      case 'Circle':
        shapeObj = new Circle(shapeColor);
        break;
      case 'Triangle':
        shapeObj = new Triangle(shapeColor);
        break;
      case 'Square':
        shapeObj = new Square(shapeColor);
        break;
      default:
        console.error('Invalid shape selection');
        return;
    }

    // Generate the SVG code for the shape and logo text
    const svgCode = `<svg width="300" height="200">
      ${shapeObj.draw()}
      <text x="50%" y="50%" text-anchor="middle" fill="${textColor}">${logoText}</text>
    </svg>`;

    // Write the SVG code to the logo.svg file
    fs.writeFile('logo.svg', svgCode, (err) => {
      if (err) {
        console.error('Error writing SVG file:', err);
        return;
      }
      console.log('Generated logo.svg');
    });
  })
  .catch((err) => {
    console.error('Error:', err);
  });
