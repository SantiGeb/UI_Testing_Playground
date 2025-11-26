import { Page } from '@playwright/test'
import { BasePage } from '../PageObjects/basePage'

export class DynamicIdPage extends BasePage {

    constructor(page: Page) {
      super(page);
    }

    async clickDynamicButton() {
        await this.page.getByRole('button', {name: 'Button with Dynamic ID'});
    }
}