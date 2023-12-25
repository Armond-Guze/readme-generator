function generateMarkdown(data) {
    const generateReadme = `
    # ${data.title}
    https://github.com/${data.username}/
    
    ## ${data.description}
    # Table Of Contets
    # [installation](#installation)
    # [usage](#usage)
    # [license](#license)
    # [contributing](#contributing)
    # [tests](#tests)
    # [questions](#questions)
    ## ${data.usage}
    
    ## ${data.license.join(', ')}
    
    ## ${data.contributing}
    
    ## ${data.tests}
    
    ## ${data.username}
    `

    return generateReadme
}

module.exports = generateMarkdown;