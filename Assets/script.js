class Person { 
    
    constructor(firstName, lastName) { 
        this.firstName = firstName; 
        this.lastName = lastName;

        this.lastName = function() { 
            return this.firstName + ' ' + this.lastName;
        }
    }
}

class Worker extends Person { 
    constructor(firstName, lastName) { 

    }
}