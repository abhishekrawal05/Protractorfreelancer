let loginPage= require('../pages/login');
describe('Login to App',function(){

    it('Login with valid credentials',function(){
        //browser.ignoreSynchronization=true;
        //browser.get('https://www.freelancer.com/');
        loginPage.get('https://www.freelancer.com/login');
        //expect(browser.getCurrentUrl()).toBe('https://www.freelancer.com/');
        //var login=element(by.css('[href="/login"]'));
        //login.click();
        //expect(browser.getCurrentUrl()).toBe('https://www.freelancer.com/login');
        //var email=element(by.css('[type="email"]')).sendKeys('abhishekrawal05@gmail.com');
        loginPage.enterEmailaddress('abhishekrawal05@gmail.com');
        //var password=element(by.xpath('//input[@class="NativeElement HasIconEnd ng-untouched ng-pristine ng-invalid ng-star-inserted"]')).sendKeys('Anuj@123');
        loginPage.enterpassword('Anuj@123');
        loginPage.selectRememberMeCheckbox();

        //var selectRemembermeCheckbox=element(by.xpath('//label[@class="CheckboxLabel"]')).click();
        //var loginBtn=element(by.css('[type="submit"]')).click();
        loginPage.clickOnLoginButton();
        loginPage.get('https://www.freelancer.com/new-freelancer/skills');

    });
}); 