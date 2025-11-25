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
    await expect(page).toHaveURL(/dynamicid/i);
})

test ('TC02 Class Attribute', async ({page}) => {
    const pm = new PageManager(page)
    await pm.onHomePage().navigateToClassAttribute()
    await pm.onClassAttributePage().clickBlueButton()
    await expect(pm.onClassAttributePage()).toBeTruthy()
})

test ('TC03 Hidden Layers', async ({page}) => {
    
})