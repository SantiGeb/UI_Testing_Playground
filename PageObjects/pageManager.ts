import { Page } from '@playwright/test';
import { HomePage } from '../PageObjects/homePage'
import { DynamicIdPage } from '../PageObjects/dynamicIdPage'
import { ClassAttributePage } from './classAttributePage'
import { HiddenLayersPage } from './hiddenLayersPage'
import { LoadDelayPage } from './loadDelayPage'
import { AJAXDataPage } from './ajaxDataPage'
import { ClientSideDelayPage } from './clientSideDelayPage'

export class PageManager {

    private readonly homePage: HomePage;
    private readonly dynamicIdPage: DynamicIdPage;
    private readonly classAttributePage: ClassAttributePage
    private readonly hiddenLayersPage: HiddenLayersPage
    private readonly loadDelayPage: LoadDelayPage
    private readonly ajaxDataPage: AJAXDataPage
    private readonly clientSideDelayPage: ClientSideDelayPage

    constructor(private readonly page: Page) {
        this.homePage = new HomePage(page);
        this.dynamicIdPage = new DynamicIdPage(page);
        this.classAttributePage = new ClassAttributePage(page)
        this.hiddenLayersPage = new HiddenLayersPage(page)
        this.loadDelayPage = new LoadDelayPage(page)
        this.ajaxDataPage = new AJAXDataPage(page)
        this.clientSideDelayPage = new ClientSideDelayPage(page)

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

    onAjaxDataPage(){
        return this.ajaxDataPage;
    }

    onClientSideDelayPage(){
        return this.clientSideDelayPage;
    }
}