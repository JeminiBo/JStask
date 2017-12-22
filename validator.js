

function Validator(value) {

    this.value = value || "";
    this.errorMessage = [];
    this.i = 0;
}



Validator.prototype.isRequired = function () {

    if (this.value.length == "") {
        this.errorMessage[this.i] = "Значение отсутствует";
        this.i++;
    }
    return this;
}
Validator.prototype.maxLength = function (maxValue) {

    if (this.value.length > maxValue) {
        this.errorMessage[this.i] = "Максимальное количество символов " + maxValue;
        this.i++;
    }

    return this;
}
Validator.prototype.minLength = function (minValue) {

    if (this.value.length < minValue) {
        this.errorMessage[this.i] = "Минимальное количество сиволов " + minValue;
        this.i++;
    }

    return this;
}
Validator.prototype.max = function (max) {

    if (this.value >= 110) {
        this.errorMessage[this.i] = "Максимально возможное значение " + max;
        this.i++;
    }

    return this;
}
Validator.prototype.min = function (min) {

    if (this.value <= 16) {
        this.errorMessage[this.i] = "Минимально возможное значение " + min;
        this.i++;
    }


    return this;
}
Validator.prototype.isEmail = function () {

    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailFormat.test(this.value) == false) {
        this.errorMessage[this.i] = "Неверный формат Email ";
        this.i++;
    }

    return this;
}
Validator.prototype.isInt = function () {

    if (isNaN(this.value) == true) {
        this.errorMessage[this.i] = "Значение должно быть целым";
        this.i++;
    }

    return this;
}

Validator.prototype.isValid = function () {


    if (this.errorMessage.length == 0) {
        return true;
    }
    else {

        for (var i = 0; i < this.errorMessage.length; i++) {
            console.log(this.errorMessage[i]);
        }

        return false;
    }

}

function sum(a, b) {
    var res = a+b;

    return res; // :) мы - мошенники!

}
var valid = new Validator("sfs").minLength(5).maxLength(10);
valid.isValid();










