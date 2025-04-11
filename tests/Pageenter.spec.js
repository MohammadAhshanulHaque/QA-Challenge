import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await expect(page.getByRole('button', { name: 'LOGIN' })).toBeVisible();
  
  await expect(page.getByRole('button')).toContainText('LOGIN');
  await expect(page.getByText('If you do not have an account')).toBeVisible();
});