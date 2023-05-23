$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("logintest.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "\r\nAs a user I want to login to Orange Hrm Website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4722731299,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "BackgroundSteps.iAmLoginPage()"
});
formatter.result({
  "duration": 73415599,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User should login successfully",
  "description": "",
  "id": "login-test;user-should-login-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    },
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on login tab",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should navigate to \"Dashboard\" page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 1072651401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 1072327001,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginTab()"
});
formatter.result({
  "duration": 1875963700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard",
      "offset": 22
    }
  ],
  "location": "LoginSteps.iShouldNavigateToPage(String)"
});
formatter.result({
  "duration": 1031896800,
  "status": "passed"
});
formatter.after({
  "duration": 618593300,
  "status": "passed"
});
formatter.uri("userstest.feature");
formatter.feature({
  "line": 1,
  "name": "User Test",
  "description": "\r\nAs a user I want to create and delete record.",
  "id": "user-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2466253400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login tab",
  "keyword": "And "
});
formatter.match({
  "location": "BackgroundSteps.iAmLoginPage()"
});
formatter.result({
  "duration": 20400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 1045614599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 1062588900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginTab()"
});
formatter.result({
  "duration": 1958393800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Admin should add user successfully",
  "description": "",
  "id": "user-test;admin-should-add-user-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I click on admin tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should be navigated to \"System Users\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be navigated to the \"Add User\" Page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I select user role \"Admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter employee name \"Peter\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter user name \"Ananya Dash\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "select user status \"Disabled\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter new password \"Admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter confirm password \"Admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see the message \"Successfully Saved\"",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 1801092899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "System Users",
      "offset": 26
    }
  ],
  "location": "UserSteps.iShouldBeNavigatedToPage(String)"
});
formatter.result({
  "duration": 1031265400,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iClickOnAddButton()"
});
formatter.result({
  "duration": 1317180600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add User",
      "offset": 30
    }
  ],
  "location": "UserSteps.iShouldBeNavigatedToThePage(String)"
});
formatter.result({
  "duration": 1031913600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 20
    }
  ],
  "location": "UserSteps.iSelectUserRole(String)"
});
formatter.result({
  "duration": 2079746300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Peter",
      "offset": 23
    }
  ],
  "location": "UserSteps.iEnterEmployeeName(String)"
});
formatter.result({
  "duration": 2090980200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ananya Dash",
      "offset": 19
    }
  ],
  "location": "UserSteps.iEnterUserName(String)"
});
formatter.result({
  "duration": 1063413799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Disabled",
      "offset": 20
    }
  ],
  "location": "UserSteps.selectUserStatus(String)"
});
formatter.result({
  "duration": 2079905101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin@123",
      "offset": 22
    }
  ],
  "location": "UserSteps.iEnterNewPassword(String)"
});
formatter.result({
  "duration": 1059465701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin@123",
      "offset": 26
    }
  ],
  "location": "UserSteps.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 1068938700,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iClickOnSaveButton()"
});
formatter.result({
  "duration": 1042454399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Successfully Saved",
      "offset": 26
    }
  ],
  "location": "UserSteps.iShouldSeeTheMessage(String)"
});
formatter.result({
  "duration": 2025539599,
  "status": "passed"
});
formatter.after({
  "duration": 620460300,
  "status": "passed"
});
formatter.before({
  "duration": 2718246400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login tab",
  "keyword": "And "
});
formatter.match({
  "location": "BackgroundSteps.iAmLoginPage()"
});
formatter.result({
  "duration": 13899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 1046329600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 1061895800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginTab()"
});
formatter.result({
  "duration": 1837748501,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Search the created user and verify it",
  "description": "",
  "id": "user-test;search-the-created-user-and-verify-it",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@smoke"
    },
    {
      "line": 26,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I click on admin tab",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should be navigated to \"System Users\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select user role \"Admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter employee name \"Ananya Dash\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "select user status \"Disabled\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see the employee name \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 1649865600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "System Users",
      "offset": 26
    }
  ],
  "location": "UserSteps.iShouldBeNavigatedToPage(String)"
});
formatter.result({
  "duration": 1033146200,
  "status": "passed"
});
formatter.match({
  "location": "UserSteps.iClickOnAddButton()"
});
formatter.result({
  "duration": 1335724000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 20
    }
  ],
  "location": "UserSteps.iSelectUserRole(String)"
});
formatter.result({
  "duration": 2085100100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ananya Dash",
      "offset": 23
    }
  ],
  "location": "UserSteps.iEnterEmployeeName(String)"
});
formatter.result({
  "duration": 21083936000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@role\u003d\u0027listbox\u0027]//*[contains(text(),\u0027Ananya Dash\u0027)]\"}\n  (Session info: chrome\u003d113.0.5672.127)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [a6e235c305b4616813f457c27e8311b6, findElement {using\u003dxpath, value\u003d//div[@role\u003d\u0027listbox\u0027]//*[contains(text(),\u0027Ananya Dash\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.127, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\patel\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64799}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64799/devtoo..., se:cdpVersion: 113.0.5672.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: a6e235c305b4616813f457c27e8311b6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat com.orangehrmlive.demo.utility.Utility.clickOnElement(Utility.java:45)\r\n\tat com.orangehrmlive.demo.pages.AddUserPage.enterEmployeeName(AddUserPage.java:46)\r\n\tat com.orangehrmlive.demo.steps.UserSteps.iEnterEmployeeName(UserSteps.java:44)\r\n\tat ✽.And I enter employee name \"Ananya Dash\"(userstest.feature:32)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Disabled",
      "offset": 20
    }
  ],
  "location": "UserSteps.selectUserStatus(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    }
  ],
  "location": "UserSteps.iShouldSeeTheEmployeeName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 759464000,
  "status": "passed"
});
});