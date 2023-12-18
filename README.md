# Sauce Lab Automation with API Automation

## Web UI Automation 
 This is a sample project to test a web application using Cypress. In this project you will find the configuration required to write tests for the https://www.saucedemo.com/ website. To start with, the login part has already been implemented in the sample_test.spec.js file.Project has implemented with ```JavaScript``` using Page Object Model, and all verification values were used from ```fixtures``` folder.

## API Automation
 Also Basic API implementation was done on https://jsonplaceholder.typicode.com/ on three different sections. i.e. 
 
 1. Comments
 2. Photos
 3. Posts



## Requirements:

- Install NodeJs
- Install `npm`

#### Cloning and Navigation

Clone the project using following command:

```bash
git clone https://github.com/taimoorpashanbs17/SauceDemoCypress.git
```

Navigate to Directory:

```bash
cd SauceDemoCypress
```

- Install all dependencies using following command:
```bash
npm install
```

#### Execution 
- After installation of packages, open cypress runner, by running command:

```bash
./node_modules/cypress/bin/cypress run
```
In order to run test with `npm` command, go to `packages.json` file and go to `scripts` section, run the command using: 

```bash
npm run <script_name> 
```

or 

```bash
npm run cypress-regression-pack
```

and view `mochawesome` reports from `mochawesome-report` folder and get it from `mochawesome.html` file.

