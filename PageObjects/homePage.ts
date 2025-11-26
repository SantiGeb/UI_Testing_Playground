import { Page } from '@playwright/test'
import { BasePage } from '../PageObjects/basePage'

export class HomePage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    async navigateToDynamicIdPage() {
        await this.page.getByRole('link', {name: 'Dynamic ID'}).click();
        await this.validatePageTitle('Dynamic ID');
    }

     async navigateToClassAttribute() {
        await this.page.getByRole('link', {name: 'Class Attribute'}).click();
        await this.validatePageTitle('Class Attribute');

    }

     async navigateToHiddenLayers() {
        await this.page.getByRole('link', {name: 'Hidden Layers'}).click();
        await this.validatePageTitle('Hidden Layers');

    }

    async navigateToLoadDelayPage() {
    await this.page.getByRole('link', {name: 'Load Delay'}).click();
    await this.validatePageTitle('Load Delay');

    }

    async navigateToAjaxData() {
    await this.page.getByRole('link', {name: 'AJAX Data'}).click();
    await this.validatePageTitle('AJAX Data');

    }

    async navigateToClientSideDelay() {
    await this.page.getByRole('link', {name: 'Client Side Delay'}).click();
    await this.validatePageTitle('Client Side Delay');

    }

    async navigateToClickPage() {
    await this.page.getByRole('link', {name: 'Click'}).click();
    await this.validatePageTitle('Click');

    }

    async navigateToTextInput() {
    await this.page.getByRole('link', {name: 'Text Input'}).click();
    await this.validatePageTitle('Text Input');

    }

    async navigateToScrollsbars() {
        await this.page.getByRole('link', {name: 'Scrollbars'}).click();
        await this.validatePageTitle('Scrollbars');
    }
}