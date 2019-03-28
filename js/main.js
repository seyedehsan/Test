class User {
    constructor(name, family, age){
        this.name = name;
        this.family = family;
        this.age = age;
    }
    displayUser(){
        console.log(this);
    }
}

class Admin extends User {
    constructor(email){
        super
    }
    deleteAccount(accountName){
        users = users.filter( user =>{
            return user.name != accountName;
        });
    }
}

let userOne = new User('Ehsan', 'Seyedian', 37);
let userTwo = new User('Majid', 'Seyedian', 50);
let admin = new Admin('Mohsen', 'Seyedian', 45);

let users = [userOne, userTwo, admin];

console.log(users);
admin.deleteAccount('Majide');
console.log(users);