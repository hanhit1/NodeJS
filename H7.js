function checkPasswordPolicy(password, passwordPolicy){
    let specialCharactor =0,numbericCharactor =0,lowercaseCharactor=0,uppercaseCharactor=0;
    let passwordLength = password.length;
    const specialChars = `-#!$@£%^&*()_+|~=\`{}[]:";'<>?,./`;
    let message = "Password ";
    for (let i of password){
        if (i >= '0' && i <= '9'){
            numbericCharactor++;
        }
        else if (i >= 'a' && i <= 'z'){     
            lowercaseCharactor++;
        }
        else if (i >= 'A' && i <= 'Z'){
            uppercaseCharactor++;
        }
        else if (specialChars.includes(i)){
            specialCharactor++;
        }
    }
    let result = true;
    if (passwordPolicy.minLenght > passwordLength){
        result = false;
        message += "should be at least " + passwordPolicy.minLenght + (passwordPolicy.minLenght > 1 ? " charactors" : " charactor");
    }
    if (passwordPolicy.maxLenght < passwordLength){
        result = false;
        message += ", should be at most " + passwordPolicy.maxLenght + (passwordPolicy.maxLenght > 1 ? " charactors" : " charactor");
    }
    if (passwordPolicy.specialCharactor > specialCharactor){
        result = false;
        message += ", should be at least " + passwordPolicy.specialCharactor + " special " + (passwordPolicy.specialCharactor > 1 ? "charactors" : "charactor");
    }
    if (passwordPolicy.numbericCharactor > numbericCharactor){
        result = false;
        message += ", should be at least " + passwordPolicy.numbericCharactor + " numberic " + (passwordPolicy.numbericCharactor > 1 ? "charactors" : "charactor");
    }
    if (passwordPolicy.lowercaseCharactor > lowercaseCharactor){
        result = false;
        message += ", should be at least " + passwordPolicy.lowercaseCharactor + " lowercase " + (passwordPolicy.lowercaseCharactor > 1 ? "charactors" : "charactor");
    }
    if (passwordPolicy.uppercaseCharactor > uppercaseCharactor){
        result = false;
        message += ", should be at least " + passwordPolicy.uppercaseCharactor + " uppercase "+ (passwordPolicy.uppercaseCharactor > 1 ? "charactors" : "charactor");
    }
    if (result){
        return {isValidPassword: true}
    }
    else{
        return {isValidPassword: false, message: message
        }
    }


}
let password1 = "pass123";
const passwordPolicy1 = {
minLenght:8,
maxLength:64,
specialCharactor:1,
numbericCharactor:1
}
console.log(password1);
console.log(passwordPolicy1);
 console.log(checkPasswordPolicy(password1,passwordPolicy1));
let password2 = "Hanh1552004@";
const passwordPolicy2 = {
minLenght:8,
maxLength:64,
specialCharactor:1,
numbericCharactor:1,
uppercaseCharactor:1,
}
console.log(password2);
console.log(passwordPolicy2);
console.log(checkPasswordPolicy(password2,passwordPolicy2));
