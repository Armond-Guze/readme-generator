function generateMarkdown(data) {
  const generateReadme = `
    # ${data.title}
    [GitHub Repository](https://github.com/${data.username}/)
    
    ## ${data.description}
    
    ## Table Of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Usage
    ${data.usage}
    
    ## License
    ${data.license.join(", ")}
    
    ## Contributing
    ${data.contributing}
    
    ## Tests
    ${data.tests}
    
    ## Questions
    Contact: [${data.username}](https://github.com/${data.username})
    `;
  return generateReadme;
}

module.exports = generateMarkdown;
