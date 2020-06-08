import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import { AngularPageObjects } from './pageObjects/angularHomePage';

describe('AngularHomePage', ()=> {
	
        it('Angular home page title validation', async () => {
                let pg=new AngularPageObjects
                await browser.get("https://angularjs.org/");
                await pg.link.click();
                await browser.sleep(3000);
                await pg.search.sendKeys("hello");
        
            })
})