const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
function init(){
    inquirer.prompt ([
        {
            type:"input",
            message:"Enter Project Title: ",
            name:"title"
        },
        {
            type:"input",
            message:"Enter Description: ",
            name:"Description"
        },
        {
            type:"input",
            message:"Enter Installation Instructions: ",
            name:"InstallationInstructions"
        },
        {
            type:"input",
            message:"Enter Usage information: ",
            name:"UsageInformation"
        },
        {
            type:"input",
            message:"Enter Contribution guidelines: ",
            name:"ContributionGuidelines"
        },
        {
            type:"input",
            message:"Test Instructions: ",
            name:"TestInstructions"
        },
        {
            type:"input",
            message:"Github Usename: ",
            name:"GithubUsename"
        },
        {
            type:"list",
            message:"Licence: ",
            name:"Licence",
            choices:["MIT","ISC","GPL","APACHE","None"]
        },
        
        
        
    ]).then(userResponse => {
        console.log(userResponse)
        return generateMarkdown(userResponse)
    }).then (markdownFile =>{
        console.log(markdownFile)
    })
}

init()