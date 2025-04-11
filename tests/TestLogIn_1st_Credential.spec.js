import { test, expect } from '@playwright/test';

test('Verify browser has correct title', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await expect(page).toHaveTitle('Document');
  });
  
  test('Verify Login page has correct header', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await expect(page.getByText('qa.code-quiz.dev')).toBeVisible();
  });
  

test('Verify Sucessful Login with valid credentials', async ({ page }) => {
  await page.goto('http://localhost:8080/');

  await page.getByRole('textbox', { name: 'Enter Username' }).fill('SomeUser_name');
  
  await page.getByRole('textbox', { name: 'password' }).fill('TopSecret1234!');
  
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.waitForTimeout(3000);

  await expect(page.getByText('Hello SomeName')).toBeVisible();

  await page.waitForTimeout(3000);

  await page.getByRole('button', { name: 'LOGOUT' }).click();

 

});

test('Verify user information for SomeUser_name', async ({ page }) => {
    await page.goto('http://localhost:8080/');
   
    await page.getByRole('textbox', { name: 'Enter Username' }).fill('SomeUser_name');
    
    await page.getByRole('textbox', { name: 'password' }).fill('TopSecret1234!');
  
    await page.waitForTimeout(2000);
  
    await page.getByRole('button', { name: 'LOGIN' }).click();
  
    await expect(page.getByText('Hello SomeName')).toBeVisible();
  
  
    await expect(page.getByText('NameSomeName')).toBeVisible();
    await expect(page.getByText('Favourite Fruitsome fruit')).toBeVisible();
    await expect(page.getByText('Favourite MovieThe Room')).toBeVisible();
    await expect(page.getByText('Favourite NumberBN<1234>')).toBeVisible();
  
    await page.waitForTimeout(3000);
    
    await page.getByRole('button', { name: 'LOGOUT' }).click();
  });

test('Verify Login failed with invalid username & valid password', async ({ page }) => {
    await page.goto('http://localhost:8080/');
  
    await page.getByRole('textbox', { name: 'Enter Username' }).fill('SomeUser');
    
    await page.getByRole('textbox', { name: 'password' }).fill('TopSecret1234!');
    
    await page.getByRole('button', { name: 'LOGIN' }).click();
  
    await expect(page.getByRole('button')).toContainText('LOGIN');
  
  
  });

  test('Verify Login failed valid username & invalid password', async ({ page }) => {
    await page.goto('http://localhost:8080/');
  
    await page.getByRole('textbox', { name: 'Enter Username' }).fill('SomeUser_name');
    
    await page.getByRole('textbox', { name: 'password' }).fill('TopSecret');
    
    await page.getByRole('button', { name: 'LOGIN' }).click();
  
    await expect(page.getByRole('button')).toContainText('LOGIN');
     
  
  });

  test('Verify Login failed with invalid username & invalid password', async ({ page }) => {
    await page.goto('http://localhost:8080/');
  
    await page.getByRole('textbox', { name: 'Enter Username' }).fill('SomeUser');
    
    await page.getByRole('textbox', { name: 'password' }).fill('TopSecret');
    
    await page.getByRole('button', { name: 'LOGIN' }).click();
  
    await expect(page.getByRole('button')).toContainText('LOGIN');
     
  
  });

  test('Verify Login failed with blank username & blank password', async ({ page }) => {
    await page.goto('http://localhost:8080/');
  
    await page.getByRole('textbox', { name: 'Enter Username' }).fill('');
    
    await page.getByRole('textbox', { name: 'password' }).fill('');
    
    await page.getByRole('button', { name: 'LOGIN' }).click();
  
    await expect(page.getByRole('button')).toContainText('LOGIN');
     
    await page.waitForTimeout(10000);
  });
