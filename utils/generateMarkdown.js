// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'none'){
    return '';
  }
  else {
    return `![license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}

  ${renderLicenseBadge(data.license)} 
  ## Description 
  ${data.description}

  ## Installation
  ${data.installation}

  ## Questions 
  If you have any questions contact me at ${data.email},
  or find my work at ${data.github}

  ## Usage
  Usage Information ${data.usage}

  ## Contribution
  ${data.contribution}
  
  ## Test
  ${data.test}

  ## License
  ${data.license}

`;
}



module.exports = generateMarkdown;
