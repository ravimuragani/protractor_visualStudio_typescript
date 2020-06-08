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
const protractor_1 = require("protractor");
const angularHomePage_1 = require("./pageObjects/angularHomePage");
describe('AngularHomePage', () => {
    it('Angular home page title validation', () => __awaiter(void 0, void 0, void 0, function* () {
        let pg = new angularHomePage_1.AngularPageObjects;
        yield protractor_1.browser.get("https://angularjs.org/");
        yield pg.link.click();
        yield protractor_1.browser.sleep(3000);
        yield pg.search.sendKeys("hello");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhclNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9hbmd1bGFyU3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUErRTtBQUMvRSxtRUFBbUU7QUFFbkUsUUFBUSxDQUFDLGlCQUFpQixFQUFFLEdBQUUsRUFBRTtJQUV4QixFQUFFLENBQUMsb0NBQW9DLEVBQUUsR0FBUyxFQUFFO1FBQzVDLElBQUksRUFBRSxHQUFDLElBQUksb0NBQWtCLENBQUE7UUFDN0IsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFdEMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNkLENBQUMsQ0FBQyxDQUFBIn0=