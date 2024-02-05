// function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installInstruction, installCommand, usage, license, contributors, testInstruction, testCommand, email, github } = data;
 
  // Assign license badge link selected by user
  const licenseChoices = ['MIT', 'Apache License 2.0', 'GNU General Public License v2.0', 'GNU General Public License v3.0'];
  const licenseIndex = licenseChoices.indexOf(license.toString());
  const links = [
    '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 
    '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 
    '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)', 
    '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  ];
  const badge = links[licenseIndex];
  
  // Markdown structure
  return `# ${title} 
   ${badge}

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
  If you have any questions about the repo, open an issue or contact me directly at [${email}](mailto:${email}). You can find more of my work at [${github}](https://github.com/${github})
`;
}

module.exports = generateMarkdown;
