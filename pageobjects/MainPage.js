import {expect} from '@playwright/test';
class MainPage {


constructor(page)
{
    this.page = page;
    this.mailBoxField = page.getByPlaceholder('mailbox');
    this.checkTheMailBttn = page.getByRole('button', { name: 'Check the mail!' });

}

async goTo()
{
    await this.page.goto('https://mailsac.com/');
}

async addMail(mailbox)
{
    await this.mailBoxField.click();
    await this.mailBoxField.fill(mailbox);
    await this.checkTheMailBttn.click();

}

}
module.exports = {MainPage};
