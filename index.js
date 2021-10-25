const inquirer = require("inquirer");
const fs = require("fs");
const utill = require("utill");

const generatorMarkdown = require("./utill/generatorMarkdown");

//Question for users
const questions = [{
  type: "input",
  message: "title",
  name: "Title of project?",
}, {
  type: "input",
  message: "description",
  name: "Description of the project?",
}, {
  type: "input",
  message: "installation",
  name: "Installation requirements?",
}, {
  type: "input",
  message: "usage",
  name: "Useage Information",
  }, {
    type: "input",
  message: "contribution",
  name: "Contribution Guidelines",
  }, {
    type: "input",
  message: "test",
  name: "Test Instructions",
  }, {
    type: "list",
  message: "license",
  name: "License",
  choices: ['MIT License', 'GNU GPLv3', 'CC0-1.0', 'Mozilla Public License 2.0', 'Apache License 2.0']
  }, {
    type: "input",
    message: "username",
    name: "GitHup Username",
  }, {
    type: "input",
    message: "email",
    name: "What is your email address?",
  },]