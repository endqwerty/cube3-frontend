import { AppPage } from './app.po';
import { AdminPage } from './admin.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  let adminPage: AdminPage;

  beforeEach(() => {
    page = new AppPage();
    adminPage = new AdminPage();
  });

  it('should show dashboard welcome message', () => {
    page.navigateTo();
    expect(page.getBaseTemplateText()).toEqual('Hi');
    expect(page.getDashboardText()).toEqual('dashboard works!');
  });

  it('should show admin welcome message', () => {
    adminPage.navigateTo();
    expect(adminPage.getBaseTemplateText()).toEqual('Hi');
    expect(adminPage.getAdminText()).toEqual('admin works!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
