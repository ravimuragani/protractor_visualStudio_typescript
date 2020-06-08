"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('RahulShetty', function () {
    function addItems(itemName) {
        protractor_1.element.all(protractor_1.by.tagName("app-card")).each(function (item) {
            item.element(protractor_1.by.css("h4 a")).getText().then(function (text) {
                if (text == itemName) {
                    item.element(protractor_1.by.className("btn btn-info")).click();
                }
            });
        });
    }
    it('Shop', function () {
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.get("https://rahulshettyacademy.com/angularpractice/shop");
        addItems("Samsung Note 8");
        addItems("iphone X");
        var eVal = 0;
        var aVal = 0;
        protractor_1.element(protractor_1.by.partialLinkText("Checkout")).getText().then(function (text) {
            console.log(text);
            var res = text.split("(");
            expect(res[1].trim().charAt(0)).toBe("2");
        });
        protractor_1.element(protractor_1.by.partialLinkText("Checkout")).click().then(function () {
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
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNTaG9wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHNTaG9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQStFO0FBRS9FLFFBQVEsQ0FBQyxhQUFhLEVBQUU7SUFFdkIsU0FBUyxRQUFRLENBQUMsUUFBUTtRQUV6QixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO2dCQUV4RCxJQUFHLElBQUksSUFBRSxRQUFRLEVBQ2hCO29CQUNBLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO2lCQUVqRDtZQUNELENBQUMsQ0FBQyxDQUFBO1FBRUwsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsRUFBRSxDQUFDLE1BQU0sRUFBRTtRQUNWLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDcEMsb0JBQU8sQ0FBQyxHQUFHLENBQUMscURBQXFELENBQUMsQ0FBQTtRQUNsRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUMxQixRQUFRLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDcEIsSUFBSSxJQUFJLEdBQUMsQ0FBQyxDQUFBO1FBQ1YsSUFBSSxJQUFJLEdBQUMsQ0FBQyxDQUFBO1FBQ1Ysb0JBQU8sQ0FBQyxlQUFFLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2pCLElBQUksR0FBRyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDMUMsQ0FBQyxDQUFDLENBQUE7UUFDRixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDcEQsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDcEIsQ0FBQyxDQUFDLENBQUE7UUFDRixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7Z0JBQ3pFLElBQUksTUFBTSxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQzFCLElBQUksR0FBQyxJQUFJLEdBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO1lBR25DLENBQUMsQ0FBQyxDQUFBO1FBRUgsQ0FBQyxDQUFDLENBQUE7UUFDRCxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFDakUsSUFBSSxNQUFNLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUMxQixJQUFJLEdBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUMsSUFBSSxDQUFDLENBQUE7WUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBQyxJQUFJLENBQUMsQ0FBQTtZQUN2QyxJQUFHLElBQUksR0FBQyxJQUFJLEVBQ1o7Z0JBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTthQUNsQjtpQkFDRTtnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2FBQ25CO1FBQ0QsQ0FBQyxDQUFDLENBQUE7SUFHSixDQUFDLENBQUMsQ0FBQTtBQUNILENBQUMsQ0FBQyxDQUFBIn0=