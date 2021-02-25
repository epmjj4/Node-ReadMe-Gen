// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "None"){
    return `![License](https://img.shields.io/badge/license-${license}-yellow.svg)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "None"){
    return(`* [License] (#license)`)
}
return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "None"){
    return(`##License
    
    using the ${license} license`)
}
return ''
}
  

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description 
${data.description}

## Table of Contens
* [installation (#installation)]

*[usage] (#usage)
${renderLicenseLink (data.license)}

*[contributing] (#contributing)


*[Test] (#test)

*[Questions] (#questions)

## Installation
In order to install the dependencies, run: 
\`
${data.installation}
\`

##Usage
${data.usage}

${renderLicenseSection(data.license)}

##Contributing
${data.contribution}

# Tests

To run tests, use: 

\`
${data.test}
\`

in the terminal

## Questions

If you have any questions, contact me at ${data.email}.

Check my other repositories here: 
[${data.github}] (https://github.com/${data.github})

`;
}


module.exports = generateMarkdown;
