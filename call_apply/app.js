var obj = {
    name: 'Gabriela Ponceleon',
    greet:function(){
        console.log(`Hello ${this.name}`);
    }
}

obj.greet();

obj.greet.call({name:'Amaro Duarte'}); //se le puede pasar un objeto que sobreescriba el this.name
obj.greet.apply({name:'Amaro Duarte'}); 

/*La diferencia entre call y apply es que si la funcion 
tiene param se deben pasar con coma y apply es un arreglo*/