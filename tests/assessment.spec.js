import { test, expect } from '@playwright/test';

let page;

test.beforeEach(async({browser})=>{
  //Initial setup:
  page = await browser.newPage();
  await page.goto('https://minimals.cc/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByLabel('Email address').fill('demo@minimals.cc');
  await page.getByLabel('Password').fill('demo1234');
  await page.getByRole('button', { name: 'Login' }).click();
});

test.afterEach(async()=>{

  await page.getByRole('button', { name: 'Jaydon Frankie' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();

});
//Test Case 1:Update Billing Information
test('testcase 1', async()=>{

    //Navigation:
    await page.getByRole('button', { name: 'user' }).click();
    await page.getByRole('button', { name: 'account' }).click();
    await page.getByRole('tab', { name: 'Billing' }).click();

    //Actions:
    await page.getByRole('button', { name: 'Jayvion Simon' }).click();
    await page.getByRole('button', { name: 'Deja Brady 18605 Thompson' }).click();
    await page.getByRole('button', { name: '**** **** ****' }).click();
    await page.getByRole('heading', { name: '**** **** **** 1234' }).click();

    //Validation:
    await expect( page.getByRole('button', { name: 'Deja Brady' })).toBeVisible();
    await expect(page.getByRole('heading',{name:'**** **** **** 1234'})).toBeVisible();
});
