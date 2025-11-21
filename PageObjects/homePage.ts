import { Page } from '@playwright/test'

export class HomePage {
    constructor(private readonly page: Page) {}

    async navigateToDynamicIdPage() {
        await this.page.getByRole('link', {name: 'Dynamic ID'}).click();
    }
}