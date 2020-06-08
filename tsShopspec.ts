import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('RahulShetty', ()=> {
	
	function addItems(itemName)
	{
		element.all(by.tagName("app-card")).each(function(item) {
			item.element(by.css("h4 a")).getText().then(function(text)
					{
				if(text==itemName)
					{
					item.element(by.className("btn btn-info")).click()
					
					}
					})
			
		})
	}
	
	it('Shop', async()=> {
		//await helps to resolve async issue
		await browser.manage().window().maximize()
		await browser.get("https://rahulshettyacademy.com/angularpractice/shop")
		 addItems("Samsung Note 8")
		 addItems("iphone X")
		var eVal=0
		var aVal=0
		element(by.partialLinkText("Checkout")).getText().then(function(text){
			console.log(text)
			var res=text.split("(")
			expect(res[1].trim().charAt(0)).toBe("2")
		})
		element(by.partialLinkText("Checkout")).click().then(()=>{
			browser.sleep(5000)
		})
		element.all(by.tagName("tr")).each(function(item) {
			item.element(by.xpath("//tr//td[4]//strong")).getText().then(function(text){
				var ePrice=text.split(".")
				eVal=eVal+Number(ePrice[1].trim())
						
					
			})	
			
		})
			element(by.xpath("//td//h3//strong")).getText().then(function(text){
				var aPrice=text.split(".")
				aVal=Number(aPrice[1].trim())
				console.log("Actual value is: "+aVal)
				console.log("Expected value is: "+eVal)
				if(aVal=eVal)
				{
				console.log("Pass")
				}
			else{
				console.log("Fail")
			}
			})
		
		
	})
})