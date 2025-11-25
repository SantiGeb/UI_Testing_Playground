import { Page } from '@playwright/test'
import { BasePage } from '../PageObjects/basePage'

export class HomePage extends BasePage {
    
    constructor(page: Page) {
        super(page)
    }

    async navigateToDynamicIdPage() {
        await this.safeClick(
        this.page.getByRole('link', {name: 'Dynamic ID'})
        ) 
    }

     async navigateToClassAttribute() {
        await this.safeClick(
        this.page.getByRole('link', {name: 'Class Attribute'})
        )
    }
}