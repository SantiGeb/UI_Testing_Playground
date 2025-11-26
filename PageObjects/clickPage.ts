import { Page, Locator, expect } from '@playwright/test'
import { BasePage } from '../PageObjects/basePage'

export class ClickPage extends BasePage {

    private readonly buttonClickEvent: Locator;

    constructor(page: Page){
        super(page);
        this.buttonClickEvent = this.page.getByRole('button', {name: 'Button That Ignores DOM Click Event'});
    }

    async clickButtonClickEvent(){
        await expect(this.buttonClickEvent).not.toHaveClass(/btn-success/);
        await this.buttonClickEvent.click();
        await expect(this.buttonClickEvent).toHaveClass(/btn-success/);
    }
}