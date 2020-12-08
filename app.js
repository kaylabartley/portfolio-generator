/*const profileDataArgs = process.argv.slice(2);

const printProfileData = profileDataArr => {

  profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);*/

/*const generatePage = () => 'Name: Jane, Github: janehub';

console.log(generatePage());*/

/*const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

console.log(generatePage('Jane', 'janehub'));*/

/*const generatePage = (userName, githubName) => {
  return `
    Name: ${userName}
    GitHub: ${githubName}
  `;
};*/


const fs = require('fs');

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});







