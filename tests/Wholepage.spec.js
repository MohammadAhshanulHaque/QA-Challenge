import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('textbox', { name: 'Enter Username' }).click();
  
  await page.getByRole('textbox', { name: 'Enter Username' }).fill('SomeUser_name');
  await page.getByRole('textbox', { name: 'password' }).click();
  await page.getByRole('textbox', { name: 'password' }).fill('TopSecret1234!');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page.getByText('Hello SomeName')).toBeVisible();
  await expect(page.getByText('NameSomeName')).toBeVisible();
  await expect(page.getByText('Favourite Fruitsome fruit')).toBeVisible();
  await expect(page.getByText('Favourite MovieThe Room')).toBeVisible();
  await expect(page.getByText('Favourite NumberBN<1234>')).toBeVisible();
  await expect(page.getByRole('button', { name: 'LOGOUT' })).toBeVisible();
  await page.getByRole('button', { name: 'LOGOUT' }).click();
  await page.getByRole('textbox', { name: 'Enter Username' }).click();
  await page.getByRole('textbox', { name: 'Enter Username' }).fill('dummytree');
  await page.getByRole('textbox', { name: 'password' }).click();
  await page.getByRole('textbox', { name: 'password' }).fill('        "password": "test1"');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByRole('textbox', { name: 'password' }).click();
  
  await page.getByRole('textbox', { name: 'password' }).fill('"password": "test1"');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByRole('textbox', { name: 'Enter Username' }).click();
  
  await page.getByRole('button', { name: 'LOGIN' }).click();
 
  await page.getByRole('textbox', { name: 'Enter Username' }).fill('dummytree');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByRole('textbox', { name: 'password' }).click();
  await page.getByRole('textbox', { name: 'password' }).click();
  await page.getByRole('textbox', { name: 'password' }).fill('test1');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page.getByText('Hello undefined')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: 'Name' }).nth(3)).toBeVisible();
  await expect(page.getByText('Favourite FruitMango')).toBeVisible();
  await expect(page.getByText('Favourite MovieV for Vendetta')).toBeVisible();
  await expect(page.getByText('Favourite NumberThe last')).toBeVisible();
  await expect(page.getByRole('button', { name: 'LOGOUT' })).toBeVisible();
  await page.getByRole('button', { name: 'LOGOUT' }).click();
});