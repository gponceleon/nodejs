function Greetr(){
    this.greeting = 'Hola Mundo empiezo con node!';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = new Greetr(); // solo se corre una vez ya que se guarda en una cache