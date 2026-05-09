import { Page, Locator} from '@playwright/test';

export class DashboardPage {
    readonly page: Page;
    readonly logoutButton : Locator;


    constructor(page: Page){
        this.page = page;
        this.logoutButton = page.getByRole('button', {name: 'Logout'});
    }


    async clickLogoutButton() {
        await this.logoutButton.click();

    }




}