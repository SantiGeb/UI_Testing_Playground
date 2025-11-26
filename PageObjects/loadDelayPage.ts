import { Page, Locator, expect} from '@playwright/test'
import { BasePage } from '../PageObjects/basePage'

export class LoadDelayPage extends BasePage {

    private readonly delayedButton: Locator;

    constructor(page: Page){
        super(page);
        this.delayedButton = this.page.getByRole('button', {name: 'Button Appearing After Delay'});
    }

    async clickButtonDelay(){
    await expect(this.delayedButton).toBeVisible();
    await this.delayedButton.click();
    }
}