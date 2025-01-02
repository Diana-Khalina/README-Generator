// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${data.title && `# ${data.title}`}
  ${
    data.license &&
    `
  [![License](https://img.shields.io/static/v1?label=Licence&message=${data.license}&color=green)](https://opensource.org/license/${data.license})
  \n\n`
  } 
${data.title && `## Table Of Content\n`}
${data.description && `- [Description](#description)`}
${data.installation && `- [Installation instructions](#installation)`}
${data.usage && `- [Usage information](#usage)`}
${data.contribution && `- [Contribution guidelines](#contribution)`}
${data.tests && `- [Test instructions](#test)`}
${data.github && `- [Questions](#questions)`}
${data.license && `- [License](#license)`}
\n\n
${data.description &&
    `## Description\n
  ${data.description}
\n\n`
    }
\n


${data.installation &&
    `## Installation\n
${data.installation}
\n\n`
    }


\n
${data.usage &&
    `## Usage\n
${data.usage}
\n\n`
    }


\n
${data.contribution &&
    `## Contribution\n
${data.contribution}
\n\n`
    }


\n
${data.tests &&
    `## Test\n
${data.tests}
\n\n`
    }


\n





${data.github &&
    `## Questions\n Feel free to contact me with any questions via the information below: \n\n My GitHub -
<a href="https://github.com/${data.github}"><strong>${data.github}</a></strong>
\n` }
${data.email && 
  `My e-mail -  ${data.email} \n\n`
}
    
${
  data.license &&
  `## License\n
[![License](https://img.shields.io/static/v1?label=Licence&message=${data.license}&color=green)](https://opensource.org/license/${data.license})
\n`
} 



`;
}

export default generateMarkdown;
