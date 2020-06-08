var reporter = require('cucumber-html-reporter');
var options = {
    theme: 'bootstrap',
    jsonFile: './test/report/cucumber_report.json',
    output: './test/report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFFakQsSUFBSSxPQUFPLEdBQUc7SUFDTixLQUFLLEVBQUUsV0FBVztJQUNsQixRQUFRLEVBQUUsb0NBQW9DO0lBQzlDLE1BQU0sRUFBRSxvQ0FBb0M7SUFDNUMsc0JBQXNCLEVBQUUsSUFBSTtJQUM1QixpQkFBaUIsRUFBRSxJQUFJO0lBQ3ZCLFlBQVksRUFBRSxJQUFJO0lBQ2xCLFFBQVEsRUFBRTtRQUNOLGFBQWEsRUFBQyxPQUFPO1FBQ3JCLGtCQUFrQixFQUFFLFNBQVM7UUFDN0IsU0FBUyxFQUFFLHNCQUFzQjtRQUNqQyxVQUFVLEVBQUUsWUFBWTtRQUN4QixVQUFVLEVBQUUsV0FBVztRQUN2QixVQUFVLEVBQUUsUUFBUTtLQUN2QjtDQUNKLENBQUM7QUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDIn0=