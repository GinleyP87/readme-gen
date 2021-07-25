// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

//   // let badge;
//   // if (data.license === "MIT"){
//   //   badge = "🍕"
//   // } else {
//   //   badge = "";
//   // }


// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README

function generateMarkdown(data) {

  let badge
  if 
    (data.license === "MIT"){
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
  } else if 
      (data.license === "Mozilla"){
    badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]"
  } else if
    (data.license === "Open"){
      badge = "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)]"
  } else if
    (data.license === "Apache"){
      badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]"
  } else {
      badge = "";
  }

  let badgeLink
  if 
    (data.license === "Apache"){
      badgeLink = "https://opensource.org/licenses/Apache-2.0"
  } else if
    (data.license === "MIT"){
      badgeLink = "https://opensource.org/licenses/MIT"
  } else if 
    (data.license === "Mozilla"){
      badgeLink = "https://opensource.org/licenses/MPL-2.0"
  } else if
    (data.license === "Open"){
      badgeLink = "https://opendatacommons.org/licenses/by/"
  } else {
    badgeLink = "";
  }
  
      return `

# Title
    
${data.projectTitle}
<br />

## Description

${data.description}
<br />


## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Contact Me](#contactMe)

<br />


## Installation

${data.installation}

<br />

## Usage

${data.usage}

<br />


## License

${badge}
<br />
${badgeLink}

<br />

## Contributing

${data.credits}

<br />

## Tests

${data.tests}

<br />

## Questions

If you have any questions...
<br />
<br />
Check out my GitHub: [${data.username}](https://github.com/${data.username})<br />
E-mail me: ${data.email}

`;}

module.exports = generateMarkdown;
