import { test, expect} from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../utils/testData';
test.describe('Role Based Flow Login Tests', () => {
    let login: LoginPage;

    test.beforeEach(async ({ page }) => {
        login = new LoginPage(page);
        await login.goto();
    });
    test('LF_001-Empty fields validation', async({page}) =>{
        await login.login("", "");
        await expect(page.getByText('Both fields are required.')).toBeVisible()
    })

    test('LF_002-Invalid credentials', async({page}) =>{
        await login.login(users.invalidUser.username, users.invalidUser.password);
        await expect(page.getByText('Invalid username or password.')).toBeVisible();

    })

    test('LF_003-Login as User', async({page}) =>{
        await login.login(users.user.username, users.user.password);
        await expect(page.getByText('You are logged in as USER')).toBeVisible();
        await expect(page.locator('body')).toContainText('User Dashboard');
    })
    test('LF_004-Login as Admin', async({page}) =>{
        await  login.login(users.admin.username, users.admin.password);
        await expect(page.getByText('You are logged in as ADMIN')).toBeVisible();
        await expect(page.locator('body')).toContainText('Admin Dashboard');
 
    })

    test('LF_005-Logout Functionality', async({page}) =>{
        const dashboard = new DashboardPage(page);
        await login.login(users.user.username, users.user.password);
        await dashboard.clickLogoutButton();
        await expect(login.loginButton).toBeVisible();
        await expect(login.usernameInputField).toBeEmpty();
        await expect(login.passwordInputField).toBeEmpty();

    })

});