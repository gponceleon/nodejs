var person = {
    firstname:'',
    lastname:'',
    greet: function(){
        return this.firstname +' '+this.lastname;
    }
};

var gaby= Object.create(person);
gaby.firstname='Gabriela';
gaby.lastname='Ponce';
console.log(gaby.greet());