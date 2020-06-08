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
describe('RahulShetty', () => {
    function addItems(itemName) {
        protractor_1.element.all(protractor_1.by.tagName("app-card")).each(function (item) {
            item.element(protractor_1.by.css("h4 a")).getText().then(function (text) {
                if (text == itemName) {
                    item.element(protractor_1.by.className("btn btn-info")).click();
                }
            });
        });
    }
    it('Shop', () => __awaiter(void 0, void 0, void 0, function* () {
        //await helps to resolve async issue
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.get("https://rahulshettyacademy.com/angularpractice/shop");
        addItems("Samsung Note 8");
        addItems("iphone X");
        var eVal = 0;
        var aVal = 0;
        protractor_1.element(protractor_1.by.partialLinkText("Checkout")).getText().then(function (text) {
            console.log(text);
            var res = text.split("(");
            expect(res[1].trim().charAt(0)).toBe("2");
        });
        protractor_1.element(protractor_1.by.partialLinkText("Checkout")).click().then(() => {
            protractor_1.browser.sleep(5000);
        });
        protractor_1.element.all(protractor_1.by.tagName("tr")).each(function (item) {
            item.element(protractor_1.by.xpath("//tr//td[4]//strong")).getText().then(function (text) {
                var ePrice = text.split(".");
                eVal = eVal + Number(ePrice[1].trim());
            });
        });
        protractor_1.element(protractor_1.by.xpath("//td//h3//strong")).getText().then(function (text) {
            var aPrice = text.split(".");
            aVal = Number(aPrice[1].trim());
            console.log("Actual value is: " + aVal);
            console.log("Expected value is: " + eVal);
            if (aVal = eVal) {
                console.log("Pass");
            }
            else {
                console.log("Fail");
            }
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNTaG9wc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzU2hvcHNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBK0U7QUFFL0UsUUFBUSxDQUFDLGFBQWEsRUFBRSxHQUFFLEVBQUU7SUFFM0IsU0FBUyxRQUFRLENBQUMsUUFBUTtRQUV6QixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO2dCQUV4RCxJQUFHLElBQUksSUFBRSxRQUFRLEVBQ2hCO29CQUNBLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO2lCQUVqRDtZQUNELENBQUMsQ0FBQyxDQUFBO1FBRUwsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFPLEVBQUU7UUFDbkIsb0NBQW9DO1FBQ3BDLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUMxQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHFEQUFxRCxDQUFDLENBQUE7UUFDdkUsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDMUIsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3JCLElBQUksSUFBSSxHQUFDLENBQUMsQ0FBQTtRQUNWLElBQUksSUFBSSxHQUFDLENBQUMsQ0FBQTtRQUNWLG9CQUFPLENBQUMsZUFBRSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFDbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNqQixJQUFJLEdBQUcsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3ZCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzFDLENBQUMsQ0FBQyxDQUFBO1FBQ0Ysb0JBQU8sQ0FBQyxlQUFFLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUUsRUFBRTtZQUN4RCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNwQixDQUFDLENBQUMsQ0FBQTtRQUNGLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtnQkFDekUsSUFBSSxNQUFNLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDMUIsSUFBSSxHQUFDLElBQUksR0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7WUFHbkMsQ0FBQyxDQUFDLENBQUE7UUFFSCxDQUFDLENBQUMsQ0FBQTtRQUNELG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUNqRSxJQUFJLE1BQU0sR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQzFCLElBQUksR0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3ZDLElBQUcsSUFBSSxHQUFDLElBQUksRUFDWjtnQkFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2FBQ2xCO2lCQUNFO2dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7YUFDbkI7UUFDRCxDQUFDLENBQUMsQ0FBQTtJQUdKLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDSCxDQUFDLENBQUMsQ0FBQSJ9