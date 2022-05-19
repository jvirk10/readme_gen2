function renderLicenseBadge(license) {
    console.log(license);
    if (license === "No License") {
        return ``;
    } else {
        return `[![badge](https://img.shields.io/badge/license-${license}-brightgreen)](./LICENSE)`
    }
}

function renderLicenseLink(license) {
    if (license === "NO License") {
        return ``;
    } else {
        return `for additional licensing information - [LICENSE INFORMATION](https://opensource.org/licenses).`
    }
}

function renderLicenseSection(license) {
    if (license === "No License") {
        return `No License`;
    } else {
        return `${renderLicenseBadge(license)}
        This application is covered by the ${license} license.
        
        For more information on license types, please reference to this website ${ renderLicenseLink(license)}`
    }
}

function generateMarkdown(answers) {
    const { title, description, installation, usage, license, contributing, tests, questions, username, email } = answers;
    return `
        # ${title} ${renderLicenseBadge(license)}
        
        ## Description
        
        ${description}
        
        ## Table of Contents
        - [Description](#description)
        - [Installation](#installation)
        - [Usage](#usage)
        - [License](#license)
        - [Contributing](#contributing)
        - [Tests](#tests)
        - [Questions](#questions)
        
        ## Installation
        
        ${installation}
        
        ## Usage
        
        ${usage}
        
        ## License
        
        ${renderLicenseSection(license)}
        
        ## Contributing
        
        ${contributing}
        
        ## Tests
        
        ${tests}
        
        ## Questions?
        
        ${questions}
        * Find me on Github:[${username}](https://github.com/${username})
        * Email me with any questions: [${email}](mailto:${email})
        
        `;
}

module.exports = generateMarkdown;