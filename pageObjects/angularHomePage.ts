import {browser, element, by, By, $, $$, ExpectedConditions, ElementFinder} from 'protractor';
export class AngularPageObjects
{
    link:ElementFinder
    search:ElementFinder
    constructor()
    {
        this.link=element(by.linkText("angular.io"))
        this.search=element(by.css("input[type='search']"))
    }

}