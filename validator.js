function Rule() {
    this.check = false;



};
Rule.prototype.isRequired = function() {

    return this;
}
Rule.prototype.maxLength = function() {

    if (this.length <= 10)
        this.check = true;
    else
        this.check = false;

    console.log(this.check);

    return this;
}
Rule.prototype.minLength = function() {

    if (this.length >= 4)
        this.check = true;
    else
        this.check = false;
    console.log(this.check);

    return this;
}
Rule.prototype.max = function() {

    if (this.value <= 110)
        this.check = true;
    else
        this.check = false;

    console.log(this.check);

    return this;
}
Rule.prototype.min = function() {

    if (this.value >= 16)
        this.check = true;
    else
        this.check = false;

    console.log(this.check);
    return this;
}
Rule.prototype.isEmail = function() {

    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailFormat.test(this.value))
        this.check = true;
    else
        this.check = false;

    console.log(this.check);

    return this;
}
Rule.prototype.isInt = function() {
    if (isNaN(this.value) == true)
        this.check = false;
    else
        this.check = true;

    console.log(this.check);

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
};

var Name = new Validator(user).minLength().maxLength();


/*
var promise = new Promise(function(resolve, reject) {
        if (this.check)
            resolve("resolved");
        else
            reject("rejected");
    });
    promise
        .then(
            result => {
                // первая функция-обработчик - запустится при вызове resolve
                console.log("Fulfilled: " + this.check); // result - аргумент resolve
            },
            error => {
                // вторая функция - запустится при вызове reject
                console.log("Rejected: " + this.check); // error - аргумент reject
            }
        );
*/