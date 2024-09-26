// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
return  `![GitHub license](https://img.shields.io/badge/license-${license.replace(' ', '_')}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license ==="MIT"){
    return `[License Information](https://choosealicense.com/licenses/agpl-3.0/)`

  }else if (license ==="ISC"){
    return `[License Information](https://choosealicense.com/licenses/agpl-3.0/)`
}else if (license ==="GPL"){
   return `[License Information](https://choosealicense.com/licenses/agpl-3.0/)`

}else if (license ==="GPL"){
   return `[License Information](https://choosealicense.com/licenses/agpl-3.0/)`
}else if (license ==="APACHE"){
  return `[License Information](https://choosealicense.com/licenses/agpl-3.0/)`
}
else {
  return `(None)`
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
return `
${renderLicenseBadge(license)}


${renderLicenseLink(license)}`
  
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test instructions](#test instructions)
  * [Github](#github)
  * [Licence](#licence)

  ### Description
  ${data.title}

  ### Installation
  ${data.InstallationInstructions}

  ### Usage
  ${data.UsageInformation}

  ### Contribution
  ${data.ContributionGuidelines}

  ### Test instructions
  ${data.TestInstructions}
  
  ### Github
  Feel free to check my other projects at 
 
  [Developer Profile](https://github.com/${data.GithubUsename})

  ### Licenc${renderLicenseSection(data.Licence)}`;


}
  //export default generateMarkdown;