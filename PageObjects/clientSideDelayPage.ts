import { Page, Locator, expect} from '@playwright/test'
import { BasePage } from '../PageObjects/basePage'

export class ClientSideDelayPage extends BasePage {

    private readonly buttonClientSideLogic: Locator;
    private readonly clientResultText: Locator;

    constructor(page: Page) {
        super(page);
        this.buttonClientSideLogic = this.page.locator('#ajaxButton');
        this.clientResultText = this.page.locator("//p[@class='bg-success' and text()='Data calculated on the client side.']");
    }

    async clickClientSideButton(){
        await expect(this.buttonClientSideLogic).toBeVisible();
        await this.buttonClientSideLogic.click();
        await this.clientResultText.waitFor({state: 'visible'});
    }
}