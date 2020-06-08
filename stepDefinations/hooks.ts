import { Before, After, Status } from "cucumber";
import { browser } from "protractor";

Before({ tags: "@angularHomeTag" }, () => {

    console.log("this is first message from hooks with angularHomeTag ")
})

After({ tags: "@angularHomeTag" }, async (scenario) => {

    console.log("this is last message from hooks with angularHomeTag ")

})

After(async function (scenario) {
    // This hook will be executed before scenarios tagged with @foo
    console.log("Test is completed");
    if (scenario.result.status === Status.FAILED) {
        //code to take screesnhot
        const screenshot = await browser.takeScreenshot();

        this.attach(screenshot, "image/png");
    }


});
Before({ tags: "@dummyTag" }, () => {

    console.log("this is first message from hooks with tag dummy ")
})

After({ tags: "@dummyTag" }, () => {

    console.log("this is last message from hooks with tag dummy ")
})