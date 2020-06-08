Feature: angular page click on page link and navigate to home page

@dummyTag
Scenario: landing to angular page

Given I will navigate to landing page2
When I will click on page2 link
And I will naviagate to other site2
Then  I will enter  in search field
@angularHomeTag
Scenario Outline: landing to angular page

Given I will navigate to landing page
When I will click on page link
And I will naviagate to other site
Then  I will enter "<key>"" in search field

Examples:
| key    |
| Hello  |
| Ravi   |
| Prajju |