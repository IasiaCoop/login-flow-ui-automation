import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInputField: Locator;
    readonly passwordInputField: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInputField = page.getByRole('textbox', {name: /username/i});
        this.passwordInputField = page.getByRole('textbox', {name: /password/i})
        this.loginButton = page.getByRole('button', {name: 'Login'});
    }


    async goto() {
        await this.page.goto('https://www.cnarios.com/challenges/login-flow#challenge');
    }

    async login(username: string, password: string){
        await this.usernameInputField.fill(username);
        await this.passwordInputField.fill(password);
        await this.loginButton.click();

    }


}