// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

  // let badge;
  // if (data.license === "MIT"){
  //   badge = "🍕"
  // } else {
  //   badge = "";
  // }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {

  let badge
  if 
    (data.license === "MIT"){
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if 
      (data.license === "Mozilla"){
    badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]"
  } else if
    (data.license === "Open"){
      badge = "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)]"
  } else if
    (data.license === "Apache"){
      badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else {
      badge = "";
  }

  let badgeLink
  if 
    (data.license === "MIT"){
      badgeLink = ""
  } else if 
    (data.license === "Mozilla"){
      badgeLink = "(https://opensource.org/licenses/MPL-2.0)"
  } else if
    (data.license === "Open"){
      badgeLink = "(https://opendatacommons.org/licenses/by/)"
  } else if
  (data.license === "Apache"){
      badgeLink = ""
  } else {
    badgeLink = "";
  }
  
      return `

# Title
    
${data.projectTitle}


## Description

${data.description}

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Contact Me](#contactMe)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${badge}
${badgeLink}

${data.license}

## Contributing

${data.contributing}

## Contact Me

${data.contactMe}
<br />
<br />
Check out my GitHub: [${data.username}](https://github.com/${data.username})<br />
<br />
Email me: ${data.email}

`;}

module.exports = generateMarkdown;
