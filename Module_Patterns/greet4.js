function Greetr(){
    this.greeting = 'Hola Mundo empiezo con node,paton 4!';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = Greetr;