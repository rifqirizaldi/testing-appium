import { remote } from "webdriverio";

const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'gexwu4us5dirxskz',
  'appium:appPackage': 'com.android.settings',
  'appium:appActivity': '.Settings',
};

const wdOpts = {
  hostname: 'localhost',
  port:4723,
  logLevel: 'info',
  capabilities,
};

async function runTest() {
  const driver = await remote(wdOpts);
  try {
    const moreConnectionOption = await driver.$('//*[@text="Lebih banyak pilihan konektivitas"]');
    await moreConnectionOption.click();
    // const planeMode = await driver.$('//*[@text="Mode pesawat"]')
    // await planeMode.click()
    // const toggleNFC = await driver.$('//*[@resource-id,"com.android.settings:id/settingslib_main_switch_bar"]')
    const toggleNFC = await driver.$('//*[@index="9"]')
    await toggleNFC.click()
  } finally {
    await driver.pause(2000);
    await driver.deleteSession();
  }
}

runTest().catch(console.error)