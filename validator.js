function Rule() {
    this.check = true;
    this.length = user.name.length;
    this.name = user.name;

};

Rule.prototype.isRequired = function() {

    return this;
}
Rule.prototype.maxLength = function() {

    if (this.length <= 10 && this.check == true)
        this.check = true;
    else
        this.check = false;

    console.log(this.check);

    return this;
}
Rule.prototype.minLength = function() {

    if (this.length >= 4 && this.check == true)
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



function Validator(rule) {
    this.check = rule.check;
    var promise = new Promise(function(resolve, reject) {
        if (this.check == true)
            resolve("resolved");
        else
            reject("rejected");
    });

    promise
        .then(function(result){return console.log("Fulfilled: " + result),rule.value} )
        .catch(function(error){console.log("Rejected: " + error)});



}



var user = {
    name: "Pas",
    password: 123456,
    email: "joiker@tut.by"
};

var rule = new Rule(user).minLength().maxLength();
Validator(rule);


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

// Попытаться сделать this.check массивом
// var rules = { name: new Rule().isRequired().maxLength(30) }
// Var Rules=new Rule();