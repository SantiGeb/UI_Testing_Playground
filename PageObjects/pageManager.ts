import { Page } from '@playwright/test';
import { HomePage } from '../PageObjects/homePage'
import { DynamicIdPage } from '../PageObjects/dynamicIdPage'

export class PageManager {

    private readonly homePage: HomePage;
    private readonly dynamicIdPage: DynamicIdPage;


    constructor(private readonly page: Page) {
        this.homePage = new HomePage(this.page);
        this.dynamicIdPage = new DynamicIdPage(this.page);

    }

    onHomePage() {
        return this.homePage;
    }

    onDynamicIdPage() {
        return this.dynamicIdPage;
    }
}