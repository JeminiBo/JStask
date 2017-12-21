
function Validator(value) {

    this.value = value;
    this.check = true;
    this.errorMessage = [];
    this.i = 0;
}



Validator.prototype.isRequired = function () {

    return this;
}
Validator.prototype.maxLength = function (maxValue) {

    if (this.value.length <= maxValue) {
        this.check = true;
    }
    else {
        this.check = false;
        this.errorMessage[this.i] = "Максимальное количество символов " + maxValue;
        this.i++;
    }

    console.log(this.check);

    return this;
}
Validator.prototype.minLength = function (minValue) {

    if (this.value.length >= minValue) {
        this.check = true;
    }
    else {
        this.check = false;
        this.errorMessage[this.i] = "Минимальное количество сиволов " + minValue;
        this.i++;
    }

    console.log(this.check);

    return this;
}
Validator.prototype.max = function () {

    if (this.value <= 110) {
        this.check = true;
    }
    else {
        this.check = false;
    }

    console.log(this.check);

    return this;
}
Validator.prototype.min = function () {

    if (this.value >= 16) {
        this.check = true;
    }
    else {
        this.check = false;
    }

    console.log(this.check);
    return this;
}
Validator.prototype.isEmail = function () {

    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailFormat.test(this.value)) {

        this.check = true;
    }
    else {
        this.check = false;
    }


    console.log(this.check);

    return this;
}
Validator.prototype.isInt = function () {
    
    if (isNaN(this.value) == true) {
        this.check = false;
        this.errorMessage[this.i] = "Значение должно быть целым";
        this.i++;
    }

    else {
        this.check = true;
       
    }

    console.log(this.check);

    return this;
}

Validator.prototype.isValid = function () {

    for(var i = 0 ; i < this.errorMessage.length; i++)
    {
        console.log(this.errorMessage[i]);
    }

}

valid = new Validator("pas").minLength(5).maxLength(10).isInt();
valid.isValid();

   






// Попытаться сделать this.check массивом  +
// var rules = { name: new Rule().isRequired().maxLength(30) }  +
// Var Rules=new Rule(); ++