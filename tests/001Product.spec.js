import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const randomEmail = faker.internet.email();
import { PageObject } from '../pageobject/PageObject';
import { clearAndTypeInput } from '../utils/CustomCommands';

test.beforeEach(async({page}) => {
  await page.goto("https://automationexercise.com");
});
test.afterEach(async ({page})=>{
  await page.close();
});
test('Add Product E2E Test1',async({page}) => {
  const ObjectManager=new PageObject(page);
  await expect(ObjectManager.homeObj.home_text_header()).toHaveText("Home");
  await ObjectManager.homeObj.product_link().click();
  await ObjectManager.homeObj.add_to_cart_button().click();
  await ObjectManager.homeObj.view_cart_link().click();
  await ObjectManager.homeObj.proceed_to_checkout_button().click();
  await ObjectManager.homeObj.register_login_button().click();
  await ObjectManager.homeObj.name_input_field().fill("tania");
  await ObjectManager.homeObj.email_address_input_field().fill(randomEmail);
  await delay(5000);
  await clearAndTypeInput(ObjectManager.homeObj.email_address_input_field(),1+randomEmail);
  await delay(5000);
});







