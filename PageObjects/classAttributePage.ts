import { Page } from '@playwright/test'
import { BasePage } from '../PageObjects/basePage'

export class ClassAttributePage extends BasePage {

    constructor(page: Page) {
        super(page)
    }

    async clickBlueButton() {
    await this.page.locator('.btn-primary')
    }
}