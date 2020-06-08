"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const angularHomePage_1 = require("../pageObjects/angularHomePage");
let pg = new angularHomePage_1.AngularPageObjects;
cucumber_1.Given('I will navigate to landing page', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.get("https://angularjs.org/");
}));
cucumber_1.When('I will click on page link', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield pg.link.click();
}));
cucumber_1.When('I will naviagate to other site', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.sleep(3000);
}));
cucumber_1.Then('I will enter {string}" in search field', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        yield pg.search.sendKeys(string);
        const screenshot = yield protractor_1.browser.takeScreenshot();
        yield this.attach(screenshot, "image/png");
        //var expect = chai.expect;
        //expect(string).to.be.a('number');
    });
});
cucumber_1.Given('I will navigate to landing page2', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'success';
});
cucumber_1.When('I will click on page2 link', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'success';
});
cucumber_1.When('I will naviagate to other site2', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'success';
});
cucumber_1.Then('I will enter  in search field', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'success';
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluYXRpb25zL3N0ZXBzMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLHVDQUEyQztBQUMzQywyQ0FBK0U7QUFDL0Usb0VBQW9FO0FBR3BFLElBQUksRUFBRSxHQUFDLElBQUksb0NBQWtCLENBQUE7QUFDN0IsZ0JBQUssQ0FBQyxpQ0FBaUMsRUFBRSxHQUFRLEVBQUU7SUFDL0Msb0VBQW9FO0lBQ3BFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUM5QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLDJCQUEyQixFQUFFLEdBQVEsRUFBRTtJQUMxQyxvRUFBb0U7SUFDcEUsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3hCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsZ0NBQWdDLEVBQUUsR0FBUSxFQUFFO0lBQy9DLG9FQUFvRTtJQUNwRSxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsd0NBQXdDLEVBQUUsVUFBZ0IsTUFBTTs7UUFDbkUsb0VBQW9FO1FBQ3BFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsTUFBTSxVQUFVLEdBQUUsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBQ2hELE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUMsV0FBVyxDQUFDLENBQUE7UUFDekMsMkJBQTJCO1FBQzNCLG1DQUFtQztJQUVyQyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBR0gsZ0JBQUssQ0FBQyxrQ0FBa0MsRUFBRTtJQUN4QyxvRUFBb0U7SUFDcEUsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsNEJBQTRCLEVBQUU7SUFDakMsb0VBQW9FO0lBQ3BFLE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUMsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLGlDQUFpQyxFQUFFO0lBQ3RDLG9FQUFvRTtJQUNwRSxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQywrQkFBK0IsRUFBRTtJQUNwQyxvRUFBb0U7SUFDcEUsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyxDQUFDLENBQUMifQ==