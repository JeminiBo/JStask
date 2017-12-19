class Rule {


    constructor(user) {

        this.value = user.name;
        this.length = this.value.length;
        this.check = false;
    }
    isRequired() {

        return this;
    }
    maxLength() {

        if (this.length <= 10)
            this.check = true;
        else
            this.check = false;

        console.log(this.check);

        return this;
    }
    minLength() {

        if (this.length >= 4)
            this.check = true;
        else
            this.check = false;
        console.log(this.check);

        return this;
    }
    max() {

        if (this.value <= 110)
            this.check = true;
        else
            this.check = false;

        console.log(this.check);

        return this;
    }
    min() {

        if (this.value >= 16)
            this.check = true;
        else
            this.check = false;

        console.log(this.check);
        return this;
    }
    isEmail() {

        var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (emailFormat.test(this.value))
            this.check = true;
        else
            this.check = false;

        console.log(this.check);

        return this;
    }
    isInt() {
        if (isNaN(this.value) == true)
            this.check = false;
        else
            this.check = true;

        console.log(this.check);

        return this;
    }

};



class Validator extends Rule {

}





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