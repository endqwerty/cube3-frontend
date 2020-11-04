import { $, browser } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getBaseTemplateText(): Promise<string> {
    return $('[automation=base-template]').getText() as Promise<string>;
  }
  getDashboardText(): Promise<string> {
    return $('[automation=dashboard]').getText() as Promise<string>;
  }
}
