// function to generate markdown for README
function generateMarkdown(data, ) {
  const { title, description, installInstruction, installCommand, usage, license, contributors, testInstruction, testCommand, email, github } = data;
  
  const licenses = ['MIT', 'Apache License 2.0', 'GNU General Public License v2.0', 'GNU General Public License v3.0'];
  const links = ['one', 'two', 'three', 'four']
  const licensesIndex = licenses.indexOf(license.toString());
  const badge = links[licensesIndex];



  return `# ${title} 
  ${badge};

  ## Description
  ${description} 

  ## Table of Contents
  - [Installation](#installation-instructions)
  - [Usage](#usage)
  - [License](#license)
      - [Contributors](#contributors)
      - [Tests](#tests)
      - [Questions](#questions)

  ## Installation Instructions
  ${installInstruction}

      ${installCommand}
  
  ## Usage
  ${usage}

  ## License
  ${license}

  ## Contributors
  ${contributors}

  ## Tests
  ${testInstruction}

      ${testCommand}
   
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at ${github}
`;
}




module.exports = generateMarkdown;
