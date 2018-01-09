describe('Login app', () => {
    var username,password,loginbutton;
    var subjectname,subjectbutton;
    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.get('/');
        browser.sleep(2000);
        username = element(by.name('username'));
        password = element(by.name('password'));
        loginbutton = element(by.buttonText('Login'));
    });

    it ('1. Entrem amb admin admin',function() {
        username.sendKeys('admin');
        password.sendKeys('admin');
        loginbutton.click().then(function() {
                browser.sleep(2000)
                var addStudentLink = $('[href*="#addStudent"]');
                //var tableRanking = element(by.id('idTableRankingBody'));
                expect(addStudentLink.isDisplayed()).toBeTruthy();
                //let profileImages = element(by.className('profile')); //Image profiles TEST
                addStudentLink.click();

                username = element(by.name('firstname'));
                var surname = element(by.name('surnames'));
                username.sendKeys('Paco');
                surname.sendKeys('El Maco');
                var savebutton = element(by.buttonText('Save'));
                savebutton.click();
                browser.sleep(2000);
                var deleteStudentLink = element(by.id('deleteStudent'));
                deleteStudentLink.click();
                browser.switchTo().alert().then(function (alert) {
                    alert.accept();
                });
                browser.sleep(2000);
              });
      });
      it ('2. Taska proposta',function() {
                //Create User
                var addStudentLink = $('[href*="#addStudent"]');
                expect(addStudentLink.isDisplayed()).toBeTruthy();
                addStudentLink.click();

                username = element(by.name('firstname'));
                var surname = element(by.name('surnames'));
                username.sendKeys('Paco');
                surname.sendKeys('El Maco');
                var savebutton = element(by.buttonText('Save'));
                savebutton.click();
                browser.sleep(2000);

                //ADD ATTITUDE TASK
                 //Add first attTask
                var addAttitude = element(by.buttonText('+XP'));
                addAttitude.click();
                browser.sleep(2000);
                var addFirstAtt = element(by.buttonText('20 Correctly answer a question in class using English'));
                addFirstAtt.click();

                //Add second attTask
                browser.sleep(2000);
                var addAttitude = element(by.buttonText('+XP'));
                addAttitude.click();
                browser.sleep(2000);
                var addSecondAtt = element(by.buttonText('20 Present your solution in front of class'));
                addSecondAtt.click();

                //Enter user detail
                browser.sleep(2000);
                var addStudentLink = $('[href*="#student/1957027836"]');
                addStudentLink.click();
                browser.sleep(2000);

                //DELETE ATTITUDE TASKS
                //Delete first attTask
                var deleteFirst = $('[href*="#deleteXP/1957027836/2000002"]');
                deleteFirst.click();
                browser.sleep(1000);
                browser.switchTo().alert().then(function (alert) {
                    alert.accept();
                });
                //Delete second attTask
                var deleteSecond = $('[href*="#deleteXP/1957027836/2000001"]');
                deleteSecond.click();
                browser.sleep(2000);
                browser.switchTo().alert().then(function (alert) {
                    alert.accept();
                });

                //Return to home
                var goHome = $('[href*="#home"]').click();
                browser.sleep(2000);
                //Delete user
                var deleteStudent = $('[href*="#deleteStudent/1957027836"]').click();
                browser.switchTo().alert().then(function (alert) {
                    alert.accept();
                });
                browser.sleep(2000);
            });
            it ('3. Taska proposta 2',function() {
                //Create user 1
                var addStudentLink = $('[href*="#addStudent"]');
                expect(addStudentLink.isDisplayed()).toBeTruthy();
                addStudentLink.click();

                username = element(by.name('firstname'));
                var surname = element(by.name('surnames'));
                username.sendKeys('Paco');
                surname.sendKeys('El Maco');
                var savebutton = element(by.buttonText('Save'));
                savebutton.click();
                browser.sleep(2000);

                //Create user 2
                var addStudentLink = $('[href*="#addStudent"]');
                expect(addStudentLink.isDisplayed()).toBeTruthy();
                addStudentLink.click();

                username = element(by.name('firstname'));
                var surname = element(by.name('surnames'));
                username.sendKeys('Sergio');
                surname.sendKeys('Martinez');
                var savebutton = element(by.buttonText('Save'));
                savebutton.click();
                browser.sleep(2000);

                //Add attTask user 1
                var addAttitude = $('[href*="#addXP/1957027836"]')
                addAttitude.click();
                browser.sleep(2000);
                var addFirstAtt = element(by.buttonText('20 Correctly answer a question in class using English'));
                addFirstAtt.click();
                browser.sleep(2000);

                //Add attTask user 2
                var addAttitude = $('[href*="#addXP/949517085"]')
                addAttitude.click();
                browser.sleep(2000);
                var addFirstAtt = element(by.buttonText('-20 Arriving late to class'));
                addFirstAtt.click();
                browser.sleep(2000);

                //DELETE ATTTASKS
                //Delete attTask User 2
                browser.sleep(1000);
                var addStudentLink = $('[href*="#student/949517085"]');
                addStudentLink.click();
                browser.sleep(1000);

                var deleteFirst = $('[href*="#deleteXP/949517085/2000005"]');
                deleteFirst.click();
                browser.sleep(1000);
                browser.switchTo().alert().then(function (alert) {
                    alert.accept();
                });
                browser.sleep(1000);
                //Return to home
                var goHome = $('[href*="#home"]').click();
                browser.sleep(1000);

                //Delete attTask User 1
                browser.sleep(1000);
                var addStudentLink = $('[href*="#student/1957027836"]');
                addStudentLink.click();
                browser.sleep(1000);

                var deleteFirst = $('[href*="#deleteXP/1957027836/2000001"]');
                deleteFirst.click();
                browser.sleep(1000);
                browser.switchTo().alert().then(function (alert) {
                    alert.accept();
                });
                browser.sleep(2000);
                //Return to home
                var goHome = $('[href*="#home"]').click();
                browser.sleep(1000);
                //DELETE USERS
                //Delete user 1 
                var deleteStudent = $('[href*="#deleteStudent/1957027836"]').click();
                browser.switchTo().alert().then(function (alert) {
                    alert.accept();
                });
                browser.sleep(1000);
                //Delete user 2
                var deleteStudent = $('[href*="#deleteStudent/949517085"]').click();
                browser.switchTo().alert().then(function (alert) {
                    alert.accept();
                });
                browser.sleep(1000);
            });
  });