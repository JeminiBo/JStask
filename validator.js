function Rule() {


};
Rule.prototype.isRequired = function() {

    return this;
}
Rule.prototype.maxLength = function() {

    if (this.length <= 10)
        console.log(true);
    else
        console.log(false);

    return this;
}
Rule.prototype.minLength = function() {

    if (this.length >= 4)
        console.log(true);
    else
        console.log(false);

    return this;
}
Rule.prototype.max = function() {

    if (this.value <= 110)
        console.log(true);
    else
        console.log(false);

    return this;
}
Rule.prototype.min = function() {

    if (this.value >= 16)
        console.log(true);
    else
        console.log(false);
    return this;
}
Rule.prototype.isEmail = function() {

    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailFormat.test(this.value))
        console.log(true);
    else
        console.log(false);

    return this;
}
Rule.prototype.isInt = function() {
    if (isNaN(this.value) == true)
        console.log(false);
    else
        console.log(true);

    return this;
}



function Validator(user) {
    this.length = user.name.length;
    this.value = user.name;

}

Validator.prototype = Object.create(Rule.prototype);

var user = {
    name: "Pas",
    password: 123456,
    email: "joiker@tut.by"
}

var Name = new Validator(user).maxLength().minLength();