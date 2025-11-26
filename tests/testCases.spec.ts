import {test, expect} from '@playwright/test'
import { PageManager } from '../PageObjects/pageManager'

test.beforeEach(async ({page}) => {
    await page.goto('http://uitestingplayground.com/')
})

//ID is not a reliable attributefor using in elemento selector, record button click then execute your test tomake sure that ID is not used for button identificacion
test ('TC01 Dynamic ID', async ({page}) => {
    const pm = new PageManager(page);
    await pm.onHomePage().navigateToDynamicIdPage();
    await pm.onDynamicIdPage().clickDynamicButton();
})

test ('TC02 Class Attribute', async ({page}) => {
    const pm = new PageManager(page)
    await pm.onHomePage().navigateToClassAttribute()
    await pm.onClassAttributePage().clickBlueButton()
    await expect(pm.onClassAttributePage()).toBeTruthy()
})

test ('TC03 Hidden Layers', async ({page}) => {
    const pm = new PageManager(page)
    await pm.onHomePage().navigateToHiddenLayers()
    await pm.onHiddenLayersPage().validateGreenButtonSingleClickBehavior()
})

test ('TC04 Load Delay', async ({page}) => {
    const pm = new PageManager(page)
    await pm.onHomePage().navigateToLoadDelayPage()
    await pm.onLoadDelayPage().clickButtonDelay()
})

test ('TC05 Ajax Data', async ({page}) =>{
    const pm = new PageManager(page)
    await pm.onHomePage().navigateToAjaxData()
    await pm.onAjaxDataPage().buttonClickAjaxRequest()
})

test ('TC06 Client Side Delay', async ({page}) => {
    const pm = new PageManager(page)
    await pm.onHomePage().navigateToClientSideDelay()
    await pm.onClientSideDelayPage().clickClientSideButton()
})

test ('TC07 Click Page', async ({page}) => {
    const pm = new PageManager(page)
    await pm.onHomePage().navigateToClickPage()
    await pm.onClickPage().clickButtonClickEvent()
})

test ('TC08 Text Input', async ({page}) => {
    const pm = new PageManager(page)
    await pm.onHomePage().navigateToTextInput()
    await pm.onTextInputPage().fillBoxFormAndClickButton('boton1')
})

test ('TC09 Scrollbards', async ({page}) => {
    const pm = new PageManager(page)
    await pm.onHomePage().navigateToScrollsbars()
    await pm.onScrollbarsPage().scrollAndClickHidingButton()
})