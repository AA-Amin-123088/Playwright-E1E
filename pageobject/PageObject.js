
import { HomeLocator } from "../pages/HomePage";

export class PageObject{
    constructor(page) {
        this.page=page;
        this.homeObj = new HomeLocator(page);
    }    
}