import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const randomEmail = faker.internet.email();
import { PageObject } from '../pageobject/PageObject';
import { clearAndTypeInput } from '../utils/CustomCommands';

test.beforeEach(async({page}) => {
  await page.goto('/inventory.html',{waitUntil:'domcontentloaded'});
});
test.afterEach(async ({page})=>{
  await delay(2000);
  await page.close();
});
test('Add Product E2E Test1',async({page}) => {
  const ObjectManager=new PageObject(page);
  await expect(ObjectManager.homeObj.home_title_header()).toHaveText("Swag Labs");
  await ObjectManager.homeObj.product_link().click();
  await ObjectManager.homeObj.add_to_cart_button().click();
  await ObjectManager.homeObj.view_cart_link().click();
  await ObjectManager.homeObj.proceed_to_checkout_button().click();
  await ObjectManager.homeObj.f_name_input_field().fill("tania");
  await ObjectManager.homeObj.l_name_input_field().fill("doe");
  await ObjectManager.homeObj.zip_code_input_field().fill("12345");
  await ObjectManager.homeObj.continue_button().click();
  await ObjectManager.homeObj.finish_button().click();
});







