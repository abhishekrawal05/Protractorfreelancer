let loginPage= function(){

   let emailaddress=element(by.css('[type="email"]'));
   let password=element(by.xpath('//input[@class="NativeElement HasIconEnd ng-untouched ng-pristine ng-invalid ng-star-inserted"]'));
   let selectRemembermeCheckbox=element(by.xpath('//label[@class="CheckboxLabel"]'));
   let loginButton=element(by.css('[type="submit"]'));


    this.get= function(url){

        browser.get(url);
    }

    this.enterpassword= function(pass){

        password.sendKeys(pass);
    }

    this.enterEmailaddress= function(email){
        
        emailaddress.sendKeys(email);
    }

    this.selectRememberMeCheckbox= function(checkbox){

        selectRemembermeCheckbox.click();
    }

    this.clickOnLoginButton= function(loginBtn){

        loginButton.click();
    }

    this.verifyLogin= function(loginUrl){

        browser.get(loginUrl);
    }
};

module.exports=new loginPage();