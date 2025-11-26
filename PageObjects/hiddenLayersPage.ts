import { Page, Locator, expect} from '@playwright/test'
import { BasePage } from '../PageObjects/basePage'

export class HiddenLayersPage extends BasePage {

    private readonly greenButton: Locator;

    constructor(page: Page){
        super(page);
        this.greenButton = this.page.locator('#greenButton');
    }

    async validateGreenButtonSingleClickBehavior() {
        await expect(this.greenButton).toBeVisible();
        await this.greenButton.click();
        await expect(this.greenButton.click({ trial: true, timeout: 1000 })).rejects.toThrow();
    }
}