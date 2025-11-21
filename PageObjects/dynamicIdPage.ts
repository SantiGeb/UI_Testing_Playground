import { Page } from '@playwright/test'

export class DynamicIdPage {

    constructor(private readonly page: Page) {}

    async clickDynamicButton() {
        await this.page.getByRole('button', {name: 'Button with Dynamic ID'}).click();
    }
}