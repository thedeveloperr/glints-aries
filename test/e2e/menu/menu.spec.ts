import { test, expect } from '@playwright/test';
import { MenuPage } from './menuPage';

test('Menu - basic without title', async ({ page }) => {
  const menuPage = new MenuPage(page);
  await menuPage.goto('args=title:');
  await expect(menuPage.canvas).toHaveScreenshot(
    'menu-basic-without-title.png'
  );
});

test('Menu - basic with disabled option', async ({ page }) => {
  const menuPage = new MenuPage(page);
  await menuPage.goto();
  await menuPage.options.first().waitFor();
  await expect(menuPage.canvas).toHaveScreenshot(
    'menu-basic-with-disabled-option.png'
  );

  await menuPage.options.nth(1).hover();
  await expect(menuPage.canvas).toHaveScreenshot('menu-basic-option-hover.png');

  await menuPage.options.nth(1).click();
  await expect(menuPage.canvas).toHaveScreenshot(
    'menu-basic-option-selected.png'
  );
});
