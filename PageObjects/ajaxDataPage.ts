import { Page, Locator, expect} from '@playwright/test'
import { BasePage } from '../PageObjects/basePage'

export class AJAXDataPage extends BasePage {

    private readonly buttonAjaxRequest: Locator
    private readonly ajaxResultText: Locator

    constructor(page: Page){
        super(page)
        this.buttonAjaxRequest = this.page.locator('#ajaxButton')
        this.ajaxResultText = this.page.locator("//p[@class='bg-success' and text()='Data loaded with AJAX get request.']")
    }
    
    async buttonClickAjaxRequest() {
        await expect(this.buttonAjaxRequest).toBeVisible()
        await this.buttonAjaxRequest.click()
        await this.ajaxResultText.waitFor({ state: 'visible' });
    }
}