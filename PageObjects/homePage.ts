import { Page } from '@playwright/test'
import { BasePage } from '../PageObjects/basePage'

export class HomePage extends BasePage {

    constructor(page: Page) {
        super(page)
    }

    async navigateToDynamicIdPage() {
        await this.page.getByRole('link', {name: 'Dynamic ID'}).click()
    }

     async navigateToClassAttribute() {
        await this.page.getByRole('link', {name: 'Class Attribute'}).click()

    }

     async navigateToHiddenLayers() {
        await this.page.getByRole('link', {name: 'Hidden Layers'}).click()

    }
}