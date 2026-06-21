export class HomeLocator{

    constructor(page) {
      this.page = page;
    }
    home_title_header(){
        return this.page.locator("//div[@class='app_logo']");
    }
    product_link(){
        return this.page.locator("//div[normalize-space()='Sauce Labs Fleece Jacket']");
    }
    add_to_cart_button(){
        return this.page.locator("//button[@id='add-to-cart']");
    }
    view_cart_link(){
        return this.page.locator("//a[@class='shopping_cart_link']");
    }
    proceed_to_checkout_button(){
        return this.page.locator("//button[@id='checkout']");
    }
    f_name_input_field(){
        return this.page.locator("//input[@id='first-name']");
    }
    l_name_input_field(){
        return this.page.locator("//input[@id='last-name']");
    }
    zip_code_input_field(){
        return this.page.locator("//input[@id='postal-code']");
    }
    continue_button(){
        return this.page.locator("//input[@id='continue']");
    }
    finish_button(){
        return this.page.locator("//button[@id='finish']");
    }


}
