import { test, expect } from '@playwright/test';

const UI_URL='http://localhost:5173/'

//test functionality for Sign IN

test('should allow the user to sign in', async ({ page }) => {
  await page.goto(UI_URL);
  // function to get different types of elements on the page
  await page.getByRole('link', {name: "Sign In" }).click();

  //assertions
  await expect(page.getByRole('heading', {name: "Sign In "})).toBeVisible();
  
  await page.locator('[name=email]').fill('t7@t7.com');
  await page.locator('[name=password]').fill('T7@t7t7t7t7');

  await page.getByRole('button', {name: "Login"}).click();

  await expect(page.getByText('Sign in successful')).toBeVisible();
  await expect(page.getByRole("link", {name: 'My Bookings'})).toBeVisible();
  await expect(page.getByRole("link", {name: 'My Hotels'})).toBeVisible();
  await expect(page.getByRole("button", {name: 'Sign Out'})).toBeVisible();

});


// test functionality for Register
test('should allow the user to register', async ({ page }) => {
  const testEmail = `test_register_${Math.floor(Math.random() * 90000) + 10000}@test.com`
  
  await page.goto(UI_URL);
  await page.getByRole('link', {name: "Sign In"}).click();

  await page.getByRole('link', {name: "Create an account here"}).click();
  await expect(page.getByRole('heading', {name: "Create an account "})).toBeVisible();

  await page.locator('[name=firstName]').fill('test_first_name');
  await page.locator('[name=lastName]').fill('test_last_name');
  await page.locator('[name=email]').fill(testEmail);
  await page.locator('[name=password]').fill('password123');
  await page.locator('[name=confirmPassword]').fill('password123');
  await page.getByRole('button', {name: "Create Account"}).click();
  await expect(page.getByText('Registration successful')).toBeVisible();
  await expect(page.getByRole("button", {name: 'Sign In'})).toBeVisible();
})