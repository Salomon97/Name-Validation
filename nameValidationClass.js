var stdValidation = {
    doesInputHaveNumbers:function(teststring){
        return /[0-9]/.test(teststring);
    },
    doesInputHaveSpecialChars:function(teststring){
        return /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(teststring);
    }
}
function nameValidator(customername = ""){
    this.name = customername;
    this.errorMessage = "";

    this.isFirstLetterUppercase = function(name = this.name){
        this.errorMessage = "name initials must be uppercase";
        return /[A-Z]/.test(name[0]);
    }
    this.doesNameHaveSpecialChars = function(name = this.name){

        this.errorMessage = "Name cannot contain special characters";
        return stdValidation.doesInputHaveSpecialChars(name);
       
    }
    this.doesNameHaveNumbers = function(name=this.name){
        this.errorMessage = "Name cannot contain numbers";
        return stdValidation.doesInputHaveNumbers(name);
    }
    this.isEmpty = function(name = this.name){
        this.errorMessage = "Please enter a name";
        return name.length <= 0;
    }
    this.doesNameHaveLowerCase = function(name = this.name){

        this.errorMessage = "first name or last name does not have any lower case letters after first letter";
        return /[a-z]/.test(name);
    }
    this.doesNameHaveSpace = function(name = this.name){

        return / /.test(name);

    }
    this.isFirstLetterSpace = function(name = this.name){

        this.errorMessage = "Name cannot contain a space as the first letter";
        return this.doesNameHaveSpace(name[0]);
        
    }
    this.getFirstName = function(name = this.name){
            return name.split(' ')[0];
    }
    this.doesNameHaveLastName =  function(name = this.name){
        this.errorMessage = "Please enter a last name";
        return / [a-z]/.test(name) || / [A-Z]/.test(name);
    }
    this.getLastName = function(name = this.name){
        return name.substr(name.replace(/ [A-Z]/,' @3').indexOf('@3'),name.length).split(' ')[0];
    }
    this.isNameValid =  function(name=this.name){
        return !this.isEmpty(name) && this.isFirstNameValid(name) && this.isLastNameValid(name);
    }
    this.isFirstNameValid = function(name = this.name){
        var firstName = this.getFirstName(name);

        if( this.doesNameHaveSpecialChars(firstName)
        ||  this.doesNameHaveNumbers(firstName)
        ||  this.isFirstLetterSpace(firstName)
        ||  !this.isFirstLetterUppercase(firstName)
        ||  !this.doesNameHaveLowerCase(firstName) ){
            
                return false;
        } 
        else{
            return true;
        }

    }
    this.isLastNameValid = function(name=this.name){
        if(this.doesNameHaveLastName(name)
        && this.isFirstLetterUppercase(this.getLastName(name)) )
            var lastName = this.getLastName(name);
        else{
            return false;
        }

        if(this.doesNameHaveSpecialChars(lastName) 
        || this.doesNameHaveNumbers(lastName) 
        || !this.doesNameHaveLowerCase(lastName)){
            return false;
        } 
        else{
            return true;
        }
    }
}
