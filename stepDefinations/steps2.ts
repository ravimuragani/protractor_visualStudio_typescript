
import {Given, When, Then} from "cucumber";
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import { AngularPageObjects } from '../pageObjects/angularHomePage';
import {chai} from "chai";

let pg=new AngularPageObjects
Given('I will navigate to landing page', async ()=> {
    // Write code here that turns the phrase above into concrete actions
    await browser.get("https://angularjs.org/");
  });
  When('I will click on page link', async ()=> {
    // Write code here that turns the phrase above into concrete actions
    await pg.link.click();
  });

  When('I will naviagate to other site', async ()=> {
    // Write code here that turns the phrase above into concrete actions
    await browser.sleep(3000);
  });
  Then('I will enter {string}" in search field', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    await pg.search.sendKeys(string);
    const screenshot= await browser.takeScreenshot()
    await this.attach(screenshot,"image/png")
    //var expect = chai.expect;
    //expect(string).to.be.a('number');

  });
  

  Given('I will navigate to landing page2', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'success';
  });

  When('I will click on page2 link', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'success';
  });
  When('I will naviagate to other site2', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'success';
  });
  Then('I will enter  in search field', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'success';
  });

  
