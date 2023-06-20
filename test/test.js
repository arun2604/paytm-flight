const {Builder,By,Key} = require('selenium-webdriver');
const fs = require('fs')
require('chromedriver')

async function sample() {
    let driver = await new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize()
    await driver.get("https://paytm.com");
    await driver.executeScript("window.scroll(0,1000)");
    let flight = await driver.findElement(By.xpath('//*[@id="app"]/section[4]/div/div/div/div[2]'));
    await flight.click();

    await driver.executeScript('window.scroll(0,220)')
    let from = await driver.findElement(By.id('text-box'))
    await from.click();
    await driver.findElement(By.xpath('//*[@id="flightsBookingForm"]/div[2]/div[2]/div[1]/div[2]/div/div/div[2]/div/div/div[1]/div[2]')).click()

    let to = await driver.findElement(By.xpath('/html/body/div/div/div[2]/div/div[2]/div/div[1]/div/div/div[2]/div[4]/div[1]/div[1]/input'))
    await to.click()
    await driver.findElement(By.xpath('//*[@id="flightsBookingForm"]/div[2]/div[4]/div[1]/div[2]/div/div/div[3]/div/div/div[1]/div[2]')).click()

    await driver.findElement(By.className('QbC4')).click()
    await driver.findElement(By.xpath('//*[@id="datePickerOnward"]/div[2]/div/div[3]/table/tbody/tr[4]/td[4]/div/div')).click()

    await driver.findElement(By.className('button')).click()
    await driver.sleep(3000)
    let stop = await driver.findElement(By.xpath('//*[@id="app"]/div/div[2]/div/div/div/div[2]/div/div[1]/div[3]/div[1]/div[6]/div[2]')).getText()
    let takeoff = await driver.findElement(By.xpath('//*[@id="app"]/div/div[2]/div/div/div/div[2]/div/div[1]/div[3]/div[1]/div[3]/div[1]')).getText();
    let reach = await driver.findElement(By.xpath('//*[@id="app"]/div/div[2]/div/div/div/div[2]/div/div[1]/div[3]/div[1]/div[5]/div')).getText();
    await driver.sleep(3000)
    await console.log('how many STOPS :'+stop);
    await console.log('Take Off time :'+takeoff);
    await console.log('Reach Time :'+reach);

    await driver.findElement(By.xpath('/html/body/div/div/div[2]/div/div/div/div[2]/div/div[1]/div[3]/div[1]')).click()
 
    let handles = await driver.getAllWindowHandles();
    await driver.switchTo().window(handles[1]);

    let screenshot =await driver.takeScreenshot();
    fs.writeFileSync('screen1.png',screenshot,'base64')

}
sample()