function checkEmpty(){
    var customerName = document.getElementById('customerName'),
    phoneNumber = document.getElementById('phoneNumber'),
    emailAddress = document.getElementById('emailAddress'),
    userName = document.getElementById('userName'),
    pickupTime = document.getElementById('pickupTime'),
    dropOffPlace = document.getElementById('dropOffPlace');
    if(customerName.value == ""){
        customerName.style.backgroundColor = 'yellow';
    } 
    else{
        customerName.style.backgroundColor = '';
    }

    if(phoneNumber.value == ""){
        phoneNumber.style.backgroundColor = 'yellow';
    } 
    else{
        phoneNumber.style.backgroundColor = '';
    }

    if(emailAddress.value == ""){
        emailAddress.style.backgroundColor = 'yellow';
    } 
    else{
        emailAddress.style.backgroundColor = '';
    }

    if(userName.value == ""){
        userName.style.backgroundColor = 'yellow';
    } 
    else{
        userName.style.backgroundColor = '';
    }

    if(pickupTime.value == ""){
        pickupTime.style.backgroundColor = 'yellow';
    } 
    else{
        pickupTime.style.backgroundColor = '';
    }
    
    if(dropOffPlace.value == ""){
        dropOffPlace.style.backgroundColor = 'yellow';
    } 
    else{
        dropOffPlace.style.backgroundColor = '';
    }
}
document.addEventListener("DOMContentLoaded", function(event) {
    checkEmpty();
});

function processForm(){
    var customerName = [],
    fname = [],
    lname = [],
    validateLetters = /^[A-Za-z]+$/,
    fnameBool = false,
    lnameBool = false;

    customerName = document.getElementById('customerName').value;

    fname = customerName.substring(0, customerName.indexOf(' '));

    for(var i = 0; i < customerName.length; i++){
        lname = customerName.substring(customerName.lastIndexOf(' ')+1);
    }
    for(var i = 0; i < fname.length; i++){
        if(fname[0] == fname[0].toLowerCase() || fname[0] != fname[0].match(validateLetters)){
            alert('Capitalize your initial your first name and make sure it is an alphabet');
            document.getElementById('customerName').focus();
            fnameBool = false;
            break;
        }
        else{
            document.getElementById('customerName').blur();
            fnameBool = true;
        }
        if(fname[1] == fname[1].toUpperCase() && fname[1] != fname[1].match(validateLetters)){
            alert('Make sure the second letter of your name is lower case and an alphabet.');
            fnameBool = false;
        }
        else{
            fnameBool = true;
        }
    }
    /*for(var i = 0; i < lname.length; i++){
        if(lname[0] == lname[0].toLowerCase() || lname[0] != lname[0].match(validateLetters)){
            alert('Capitalize your initial your last name and make sure it is an alphabet');
            document.getElementById('customerName').focus();
            nameBool = false;
            break;
        }
        else{
            document.getElementById('customerName').blur();
            lnameBool = true;
        }
        if(lname[1] == lname[1].toUpperCase() && lname[1] != lname[1].match(validateLetters)){
            alert('Make sure the second letter of your name is lower case and an alphabet.');
            lnameBool = false;
        }
        else{
            lnameBool = true;
        }
    }*/
    //name validation
    //*var name = document.getElementById('customerName').value,
    //*name_validator = new nameValidator(name);
    //*
    //*if(!name_validator.isNameValid()){
        //errorMessageSpan.style.display = "inline-block";
    //*    alert(name_validator.errorMessage);
    //*    document.getElementById('customerName').focus();          
    //*}

    //username validation
    //*var user = document.getElementById('userName'),
    //*user_validator = new nameValidator(user);
//*
    //*if(!user_validator.isUserValid()){
    //*    alert(user_validator.errorMessage);
    //*    document.getElementById('customerName').focus();
    //*}

    //change textarea value
    //*var txt = document.getElementById('comments').value,
    //*text_validator = new nameValidator(txt);

    //process if above validations are true
    //https://stackoverflow.com/questions/2276463/how-can-i-get-form-data-with-javascript-jquery
   /* if( text_validator.isUserValid() && name_validator.isNameValid() && text_validator.isTextChanged()){
        document.getElementById('orderDetails').style.visibility = "visible";
        var customerName = document.getElementById('customerName'),
        phoneNumber = document.getElementById('phoneNumber'),
        emailAddress = document.getElementById('emailAddress'),
        userName = document.getElementById('userName'),
        carTaxi = document.getElementById('carTaxi'),
        vanTaxi = document.getElementById('vanTaxi'),
        tuktukTaxi = document.getElementById('tuktukTaxi'),
        extrasBaby = document.getElementById('extrasBaby'),
        extrasWheelchair = document.getElementById('extrasWheelchair'),
        extrasTip = document.getElementById('extrasTip'),
        pickupTime = document.getElementById('pickupTime'),
        pickup_place = document.getElementById('pickup_place'),
        dropOffPlace = document.getElementById('dropOffPlace'),
        comments = document.getElementById('comments');
        var heading = "";
        heading += customerName.value + phoneNumber.value + emailAddress.value + userName.value;
        if(carTaxi.checked){
            heading += carTaxi.value;
        }
        else if(vanTaxi.checked){
            heading += vanTaxi.value;
        }
        else if(tuktukTaxi.checked){
            heading += tuktukTaxi.value;
        }
        if(extrasBaby.checked){
            heading += heading.value;
        }
        if(extrasWheelchair.checked){
            heading += extrasWheelchair.value;
        }
        if(extrasTip.checked){
            heading+= extrasTip.value;
        }
        heading += pickupTime.value +pickup_place.value + dropOffPlace.value + comments.value;
        document.getElementById('orderDetailsHeading').innerHTML = heading;
    }
	*/

    //
}
setTimeout(function() {
    document.getElementById('sbmtBtn').onclick = function(e){
        e.preventDefault();
        processForm();
    }
});
