import { Page } from '@playwright/test';
import { HomePage } from '../PageObjects/homePage'
import { DynamicIdPage } from '../PageObjects/dynamicIdPage'
import { ClassAttributePage } from './classAttributePage'
import { HiddenLayersPage } from './hiddenLayersPage'
import { LoadDelayPage } from './loadDelayPage'

export class PageManager {

    private readonly homePage: HomePage;
    private readonly dynamicIdPage: DynamicIdPage;
    private readonly classAttributePage: ClassAttributePage
    private readonly hiddenLayersPage: HiddenLayersPage
    private readonly loadDelayPage: LoadDelayPage

    constructor(private readonly page: Page) {
        this.homePage = new HomePage(page);
        this.dynamicIdPage = new DynamicIdPage(page);
        this.classAttributePage = new ClassAttributePage(page)
        this.hiddenLayersPage = new HiddenLayersPage(page)
        this.loadDelayPage = new LoadDelayPage(page)

    }

    onHomePage() {
        return this.homePage;
    }

    onDynamicIdPage() {
        return this.dynamicIdPage;
    }

    onClassAttributePage(){
        return this.classAttributePage;
    }

    onHiddenLayersPage(){
        return this.hiddenLayersPage;
    }

    onLoadDelayPage(){
        return this.loadDelayPage;
    }
}