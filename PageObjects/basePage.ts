import { Page, Locator, expect } from '@playwright/test'

export class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async scrollIntoView(locator: Locator) {
        await locator.scrollIntoViewIfNeeded();
    }

    async validatePageTitle(expectedTitle: string) {
        const titleLocator = this.page.locator(`h3:has-text("${expectedTitle}")`);
        await expect(titleLocator).toBeVisible();
    }

}