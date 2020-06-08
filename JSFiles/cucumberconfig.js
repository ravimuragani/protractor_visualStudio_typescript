"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        format: 'json:./test/report/cucumber_report.json',
        //format: 'json:./cucumberreport.json.json',
        tags: "@angularHomeTag",
        require: [
            '../JSFiles/stepDefinations/*.js' // accepts a glob
        ] /*,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLE9BQU8sQ0FBQyxNQUFNLEdBQUc7SUFDZixrREFBa0Q7SUFDbEQseUNBQXlDO0lBQ3pDLFNBQVMsRUFBRSxRQUFRO0lBQ25CLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBQy9ELGFBQWEsRUFBRSxJQUFJO0lBQ25CLEtBQUssRUFBRSxDQUFDLDhCQUE4QixDQUFDO0lBQ3ZDLHdDQUF3QztJQUN4QyxZQUFZLEVBQUU7UUFDWiwyQkFBMkI7UUFDM0IsTUFBTSxFQUFDLHlDQUF5QztRQUNoRCw0Q0FBNEM7UUFDNUMsSUFBSSxFQUFFLGlCQUFpQjtRQUN2QixPQUFPLEVBQUU7WUFDUCxpQ0FBaUMsQ0FBQyxpQkFBaUI7U0FDcEQsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBd0JFO0tBQ0o7Q0FDRixDQUFDIn0=