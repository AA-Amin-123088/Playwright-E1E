import {Locator} from '@playwright/test'

export async function customMethod(page) {
  await page.locator("//div[normalize-space()='Sauce Labs Onesie']").click();
}
export async function clearAndTypeInput(inputField,value) {
  await inputField.click();
  await inputField.press('Control+A');
  await inputField.press('Backspace');
  await inputField.type(value);
}