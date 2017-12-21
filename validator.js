
function Validator(value) {
       
    this.value = value;
    this.check = true;
    }


   
   Validator.prototype.isRequired = function () {
    
        return this;
    }
    Validator.prototype.maxLength = function (maxValue) {
    
        if (this.value <= maxValue )
            this.check = true;
        else
            this.check = false;
    
        console.log(this.check);
    
        return this;
    }
    Validator.prototype.minLength = function (minValue) {
        
        if (this.value >= minValue)
            this.check = true;
        else
            this.check = false;
    
        console.log(this.check);
    
        return this;
    }
    Validator.prototype.max = function () {
    
        if (this.value <= 110)
            this.check = true;
        else
            this.check = false;
    
        console.log(this.check);
    
        return this;
    }
    Validator.prototype.min = function () {
    
        if (this.value >= 16)
            this.check = true;
        else
            this.check = false;
    
        console.log(this.check);
        return this;
    }
    Validator.prototype.isEmail = function () {
    
        var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (emailFormat.test(this.email))
            this.checkEmail = true;
        else
            this.checkEmail = false;
    
    
        console.log(this.checkEmail);
    
        return this;
    }
    Validator.prototype.isInt = function () {
        if (isNaN(this.password) == true)
            this.checkPassword = false;
    
        else
            this.checkPassword = true;
    
    
        console.log(this.checkPassword);
    
        return this;
    }

 

    valid = new Validator(3).minLength(5).maxLength(10)

   






// Попытаться сделать this.check массивом  +
// var rules = { name: new Rule().isRequired().maxLength(30) }  +
// Var Rules=new Rule(); ++