class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    log() {
        console.log('I am', this._firstName, this._lastName);
    }

    // setters
    set profession(val) {
        this._profession = val;
    }
    // getters
    get profession() {
        console.log(this._firstName, this._lastName, 'is a', this._profession);
    }
// With the above code, even though we can access the properties outside the function to change their content what if we don't want that.
// Symbols come to rescue.
let s_firstname  = new Symbol();

class Person {
    constructor(firstName, lastName) {
        this[s_firstName] = firstName;
        this._lastName = lastName;
    }

    log() {
        console.log('I am', this._firstName, this._lastName);
    }

    // setters
    set profession(val) {
        this._profession = val;
    }
    // getters
    get profession() {
        console.log(this[s_firstName], this._lastName, 'is a', this._profession);
    }
