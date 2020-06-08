import {Config} from 'protractor';
exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
      //for direct run without running selenium
      directConnect:true,
    specs: ['angularSpec.js'],
     // Options to be passed to Jasmine-node.
     jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
    }
  };