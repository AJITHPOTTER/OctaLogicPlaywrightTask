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

//Test Case 2: Search Order
test('testcase 2', async()=>{

    //Navigation:
    await page.getByRole('button', { name: 'order' }).click();
    await page.getByRole('button', { name: 'list' }).click();
 
    //Actions:
    await page.getByPlaceholder('Search customer or order').fill('cor');
 
    //Validation:
    await expect(page.getByText('Cortez Herring')).toBeVisible();
    await expect(page.getByText('1–1 of 1')).toBeVisible();
 });
 
 //Test Case 3: Filter Jobs
 test('testcase 3', async () => {
 
     //Navigation:
     await page.getByRole('button', { name: 'job' }).click();
     await page.getByRole('button', { name: 'list' }).click();
     await page.getByRole('button', { name: 'Filters' }).click();
     
     //Actions:
     await page.getByLabel('On Demand').check();
     await page.getByRole('button').nth(1).click();
 
     //Validation:
     await expect(page.getByRole('button', { name: 'On Demand' })).toBeVisible();
 });