import { Page, Locator, expect } from '@playwright/test'
import { BasePage } from '../PageObjects/basePage'

export class ScrollbarsPage extends BasePage {

    private readonly buttonScrollToView: Locator;

    constructor(page: Page){
        super(page);
        this.buttonScrollToView = this.page.locator('#hidingButton');
    }

    async scrollAndClickHidingButton() {
        await this.buttonScrollToView.scrollIntoViewIfNeeded();
        await expect(this.buttonScrollToView).toBeVisible();
        await this.buttonScrollToView.click();
    }
}