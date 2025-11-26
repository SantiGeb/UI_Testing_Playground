import { Page, Locator, expect } from '@playwright/test'
import { BasePage } from '../PageObjects/basePage'

export class TextInputPage extends BasePage {

    private readonly textBoxForm: Locator;
    private readonly clickButtonNameInput: Locator;

    constructor(page: Page) {
        super(page);
        this.textBoxForm = this.page.locator("//input[@id='newButtonName' and @placeholder='MyButton']");
        this.clickButtonNameInput = this.page.locator('#updatingButton');
    }

    async fillBoxFormAndClickButton(inputName: string){
        await this.textBoxForm.fill(inputName);
        await this.clickButtonNameInput.click();
        await expect(this.clickButtonNameInput).toHaveText(inputName);
    }
}