import { Page } from '@playwright/test';
import { HomePage } from '../PageObjects/homePage'
import { DynamicIdPage } from '../PageObjects/dynamicIdPage'
import { ClassAttributePage } from '../PageObjects/classAttributePage'
import { HiddenLayersPage } from '../PageObjects/hiddenLayersPage'
import { LoadDelayPage } from '../PageObjects/loadDelayPage'
import { AJAXDataPage } from '../PageObjects/ajaxDataPage'
import { ClientSideDelayPage } from '../PageObjects/clientSideDelayPage'
import { ClickPage } from '../PageObjects/clickPage'
import { TextInputPage } from '../PageObjects/textInputPage'
import { ScrollbarsPage } from '../PageObjects/scrollbarsPage'

export class PageManager {

    private readonly homePage: HomePage;
    private readonly dynamicIdPage: DynamicIdPage;
    private readonly classAttributePage: ClassAttributePage;
    private readonly hiddenLayersPage: HiddenLayersPage;
    private readonly loadDelayPage: LoadDelayPage;
    private readonly ajaxDataPage: AJAXDataPage;
    private readonly clientSideDelayPage: ClientSideDelayPage;
    private readonly clickPage: ClickPage;
    private readonly textInputPage: TextInputPage;
    private readonly scrollbarsPage: ScrollbarsPage;

    constructor(private readonly page: Page) {
        this.homePage = new HomePage(page);
        this.dynamicIdPage = new DynamicIdPage(page);
        this.classAttributePage = new ClassAttributePage(page);
        this.hiddenLayersPage = new HiddenLayersPage(page);
        this.loadDelayPage = new LoadDelayPage(page);
        this.ajaxDataPage = new AJAXDataPage(page);
        this.clientSideDelayPage = new ClientSideDelayPage(page);
        this.clickPage = new ClickPage(page);
        this.textInputPage = new TextInputPage(page);
        this.scrollbarsPage = new ScrollbarsPage(page);

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

    onClickPage(){
        return this.clickPage;
    }

    onTextInputPage(){
        return this.textInputPage;
    }

    onScrollbarsPage(){
        return this.scrollbarsPage;
    }
}