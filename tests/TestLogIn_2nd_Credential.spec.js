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

  await page.getByRole('textbox', { name: 'Enter Username' }).fill('dummytree');
  
  await page.getByRole('textbox', { name: 'password' }).fill('test1');
  
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.waitForTimeout(3000);

  await expect(page.getByText('Hello undefined')).toBeVisible();

  await page.waitForTimeout(3000);

  await page.getByRole('button', { name: 'LOGOUT' }).click();

 

});

test('Verify user information for UndefinedUser_name', async ({ page }) => {
    await page.goto('http://localhost:8080/');
   
    await page.getByRole('textbox', { name: 'Enter Username' }).fill('dummytree');
    
    await page.getByRole('textbox', { name: 'password' }).fill('test1');
  
    await page.waitForTimeout(2000);
  
    await page.getByRole('button', { name: 'LOGIN' }).click();
  
    await expect(page.getByText('Hello undefined')).toBeVisible();
  
  
    await expect(page.locator('div').filter({ hasText: 'Name' }).nth(3)).toBeVisible();
    await expect(page.getByText('Favourite FruitMango')).toBeVisible();
    await expect(page.getByText('Favourite MovieV for Vendetta')).toBeVisible();
    await expect(page.getByText('Favourite NumberThe last')).toBeVisible();
  
    await page.waitForTimeout(3000);
    
    await page.getByRole('button', { name: 'LOGOUT' }).click();
  });

test('Verify Login failed with invalid username & valid password', async ({ page }) => {
    await page.goto('http://localhost:8080/');
  
    await page.getByRole('textbox', { name: 'Enter Username' }).fill('xyz');
    
    await page.getByRole('textbox', { name: 'password' }).fill('test1');
    
    await page.getByRole('button', { name: 'LOGIN' }).click();

    await page.waitForTimeout(2000);
  
    await expect(page.locator('#root')).toContainText('If you do not have an account, contact an admin');
  
  });

  test('Verify Login failed with valid username & invalid password', async ({ page }) => {
    await page.goto('http://localhost:8080/');
  
    await page.getByRole('textbox', { name: 'Enter Username' }).fill('dummytree');
    
    await page.getByRole('textbox', { name: 'password' }).fill('321');
    
    await page.getByRole('button', { name: 'LOGIN' }).click();
  
    await expect(page.locator('#root')).not.toContainText('If you do not have an account, contact an admin');
     
  
  });

  test('Verify Login failed with invalid username & invalid password', async ({ page }) => {
    await page.goto('http://localhost:8080/');
  
    await page.getByRole('textbox', { name: 'Enter Username' }).fill('abc');
    
    await page.getByRole('textbox', { name: 'password' }).fill('321');
    
    await page.getByRole('button', { name: 'LOGIN' }).click();
  
    await expect(page.locator('#root')).toContainText('If you do not have an account, contact an admin');
     
  
  });

  test('Verify Login failed with blank username & blank password', async ({ page }) => {
    await page.goto('http://localhost:8080/');
  
    await page.getByRole('textbox', { name: 'Enter Username' }).fill('');
    
    await page.getByRole('textbox', { name: 'password' }).fill('');
    
    await page.getByRole('button', { name: 'LOGIN' }).click();
  
    await expect(page.locator('#root')).toContainText('If you do not have an account, contact an admin');

    await page.waitForTimeout(5000);
     
  });