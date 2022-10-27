// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;

  switch (license) {
    case "GNU GPL v2":
    badge = { name: "GNU+GPLv2", color: "blue"};
    break;
    case "GNU GPL v3":
    badge = { name: "GNU+GPLv3", color: "blue"};
    break;
    case "Apache License 2.0":
      badge = { name: "Apache+2.0", color: "blue"};
    break;
    case "MIT License":
      badge = { name: "MIT", color: "blue"};
    break;
  }

  return `https://img.shields.io/static/v1?label=license&message=${badge.name}&color=${badge.color})`
}
  function renderLicenseLink(license) {
    let urL;

    switch(license) {
      case "GNU GPL v2":
        urL = "gpl-2.0";
        break;
        case "GNU GPL v3":
        urL = "gpl-3.0";
        break;
        case "Apache License 2.0":
          urL = "apache-2.0";
        break;
        case "MIT License":
          urL = "mit";
        break;
    }
    return `https://choosealicense.com/licenses/${urL}/`;
  }
  return `# ${data.title}
  ## Table of Contents:
  1. [Description](#description) 
  2. [Installation](#Installation)
  3. [Usage](#Usage)  
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [License](#License)
  7. [GitHub](#GitHub)
  8. [E-mail](#E-mail)

## Description
${data.description} 

## Installation
${data.instructions}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.testnstructions}

## License
${renderLicenseBadge(data.license)}
See ${renderLicenseLink(data.license)} for more information.

## GitHub
${data.github}

## E-mail
${data.email}`
}

module.exports = generateMarkdown;
