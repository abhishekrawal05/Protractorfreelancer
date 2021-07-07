
describe('Login to App',function(){

    it('Sigup with valid credentials',function(){
        //browser.ignoreSynchronization=true;
        browser.get('https://www.freelancer.com/');
        expect(browser.getCurrentUrl()).toBe('https://www.freelancer.com/');
        var login=element(by.css('[href="/login"]'));
        login.click();
        expect(browser.getCurrentUrl()).toBe('https://www.freelancer.com/login');
        var signUp=element(by.css('[fltrackinglabel="CredentialsForm-SignupLink"] > .LinkElement'));
        signUp.click();
        expect(browser.getCurrentUrl()).toBe('https://www.freelancer.com/signup');
        var email=element(by.css('[type="email"]')).sendKeys('abhishekrawal05@gmail.com');
        var password=element(by.xpath('//input[@class="NativeElement HasIconEnd ng-untouched ng-pristine ng-invalid ng-star-inserted"]')).sendKeys('Anuj@123');
        var selectCheckboxOfAgreement=element(by.xpath('//input[@class="NativeElement HasIconEnd ng-untouched ng-pristine ng-invalid ng-star-inserted"]')).click();
        var joinFreeLancerBtn=element(by.xpath('//button[contains(.,"Join Freelancer")]')).click();
        expect(browser.getCurrentUrl()).toBe('https://www.freelancer.com/new-freelancer/signup');

    });
}); 