

function Validator(value) {

    this.value = value || "";
    this.errorMessage = [];

}



Validator.prototype.isRequired = function () {

    if (this.value.length == "") {
        this.errorMessage.push("Значение отсутствует");

    }
    return this;
}
Validator.prototype.maxLength = function (maxValue) {

    if (this.value.length > maxValue) {
        this.errorMessage.push("Максимальное количество символов " + maxValue);

    }

    return this;
}
Validator.prototype.minLength = function (minValue) {

    if (this.value.length < minValue) {
        this.errorMessage.push("Минимальное количество сиволов " + minValue);

    }

    return this;
}
Validator.prototype.max = function (max) {
    if (isNaN(Number(this.value)) == true) {
        this.errorMessage.push("Значение должно быть числом " );
    }
    if (this.value >= max) {
        this.errorMessage.push("Максимально возможное значение " + max);

    }

    return this;
}
Validator.prototype.min = function (min) {
    if (isNaN(Number(this.value)) == true) {
        this.errorMessage.push("Значение должно быть числом " );
    }
    if (this.value <= min) {
        this.errorMessage.push("Минимально возможное значение " + min);

    }


    return this;
}
Validator.prototype.isEmail = function () {

    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailFormat.test(this.value) == false) {
        this.errorMessage.push("Неверный формат Email ");

    }

    return this;
}
Validator.prototype.isInt = function () {

    if (isNaN(this.value) == true) {
        this.errorMessage.push("Значение должно быть целым");

    }

    return this;
}

Validator.prototype.isValid = function () {


    if (this.errorMessage.length == 0) {
        return true;
    }
    else {

        return false;
    }

}


var valid = new Validator("sfs").minLength(5).maxLength(10);
valid.isValid();










