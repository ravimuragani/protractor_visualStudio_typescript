import { Config } from 'protractor';
import * as reporter from "cucumber-html-report";
exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  //for direct run without running selenium
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  directConnect: true,
  specs: ['../features/cucumber.feature'],
  // Options to be passed to Jasmine-node.
  cucumberOpts: {
    // require step definitions
    format:'json:./test/report/cucumber_report.json',
    //format: 'json:./cucumberreport.json.json',
    tags: "@angularHomeTag",//tags to runspecific group of scenarios
    require: [
      '../JSFiles/stepDefinations/*.js' // accepts a glob
    ]/*,
    onComplete: () => {
      var reporter = require('cucumber-html-reporter');
      var options = {
        theme: 'bootstrap',
        //jsonFile: './cucumberreport.json',
        //output: './cucumber_report.html',
        jsonFile: 'test/report/cucumber_report.json',
        output: 'test/report/cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
          "App Version": "0.3.2",
          "Test Environment": "STAGING",
          "Browser": "Chrome  54.0.2840.98",
          "Platform": "Windows 10",
          "Parallel": "Scenarios",
          "Executed": "Remote"
        }
      };

      reporter.generate(options);


    }*/
  }
};