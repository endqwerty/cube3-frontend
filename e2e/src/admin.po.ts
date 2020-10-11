import { $, browser, by, element } from 'protractor';

export class AdminPage {
  navigateTo (): Promise<unknown> {
    return browser.get(`${browser.baseUrl}/admin`) as Promise<unknown>;
  }

  getBaseTemplateText (): Promise<string> {
    return $('[automation=base-template]').getText() as Promise<string>;
  }
  getAdminText (): Promise<string> {
    return $('[automation=admin]').getText() as Promise<string>;
  }
}
