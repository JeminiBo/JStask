function Rule() {
    this.checkName = true;
    this.checkPassword = true;
    this.checkEmail = true;
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.length = user.name.length;
};

Rule.prototype.isRequired = function () {

    return this;
}
Rule.prototype.maxLength = function () {

    if (this.length <= 10 && this.checkName == true)
        this.checkName = true;
    else
        this.checkName = false;

    console.log(this.checkName);

    return this;
}
Rule.prototype.minLength = function () {

    if (this.length >= 4 && this.checkName == true)
        this.checkName = true;
    else
        this.checkName = false;

    console.log(this.checkName);

    return this;
}
Rule.prototype.max = function () {

    if (this.value <= 110)
        this.check = true;
    else
        this.check = false;

    console.log(this.check);

    return this;
}
Rule.prototype.min = function () {

    if (this.value >= 16)
        this.check = true;
    else
        this.check = false;

    console.log(this.check);
    return this;
}
Rule.prototype.isEmail = function () {

    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailFormat.test(this.email))
        this.checkEmail = true;
    else
        this.checkEmail = false;


    console.log(this.checkEmail);

    return this;
}
Rule.prototype.isInt = function () {
    if (isNaN(this.password) == true)
        this.checkPassword = false;

    else
        this.checkPassword = true;


    console.log(this.checkPassword);

    return this;
}
var user = {
    name: "Paw",
    password: 123456,
    email: "joiker@tut.by"
};

var rules = {
    name: new Rule(user.name).minLength().maxLength(),
    password: new Rule(user.password).isInt(),
    email: new Rule(user.email).isEmail()
}