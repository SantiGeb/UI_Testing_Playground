import { Page, Locator, expect } from '@playwright/test'

export class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async safeClick(locator: Locator) {
        await locator.waitFor({state: 'visible'});
        await locator.click();
    }

    async scrollIntoView(locator: Locator) {
        await locator.scrollIntoViewIfNeeded();
    }

    async typeText(locator: Locator, text: string) {
        await locator.fill('');
        await locator.type(text);
    }

    async getText(locator: Locator){
        return locator.innerText();
    }
}