describe("Check function minLength", function () {
    it("It shoud return true, if test passed", function () {
        var valid = new Validator("sfsss").minLength(5);
        expect(valid.isValid()).toBe(true);
    });
});


describe("Check function maxLength", function () {
    it("It shoud return true, if test passed", function () {
        var valid = new Validator("sfsss").maxLength(10);
        expect(valid.isValid()).toBe(true);
    });
});

describe("Check function isInt", function () {
    it("It shoud return true, if test passed", function () {
        var valid = new Validator("123").isInt();
        expect(valid.isValid()).toBe(true);
    });
});
describe("Check function max", function () {
    it("It shoud return true, if test passed", function () {
        var valid = new Validator("123").max(150);
        expect(valid.isValid()).toBe(true);
    });
});
describe("Check function min", function () {
    it("It shoud return true, if test passed", function () {
        var valid = new Validator("dsa").min(5);
        expect(valid.isValid()).toBe(true);
    });
});

describe("Check function isEmail", function () {
    it("It shoud return true, if test passed", function () {
        var valid = new Validator("Joiekr@tut.by").isEmail();
        expect(valid.isValid()).toBe(true);
    });
});
describe("Check function isRequired", function () {
    it("It shoud return true, if test passed", function () {
        var valid = new Validator("123").isRequired();
        expect(valid.isValid()).toBe(true);
    });
});

describe("Check function maxLength and minLength together", function () {
    it("It shoud return true, if test passed", function () {
        var valid = new Validator("sdsws").minLength(5).maxLength(10);
        expect(valid.isValid()).toBe(true);
    });
});

describe("Check function maxLength and minLength together", function () {
    it("It shoud return false, if test passed", function () {
        var valid = new Validator("sds").minLength(5).maxLength(10);
        expect(valid.isValid()).toBe(false);
    });
});
describe("Check function min and isRequired together", function () {
    it("It shoud return true, if test passed", function () {
        var valid = new Validator("12").min(5).isRequired();
        expect(valid.isValid()).toBe(true);
    });
});

describe("Check function min and isRequired together", function () {
    it("It shoud return false, if test passed", function () {
        var valid = new Validator("1").min(5).isRequired();
        expect(valid.isValid()).toBe(false);
    });
});


