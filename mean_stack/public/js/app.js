angular.module('TestApp',[]);

angular.module('TestApp')
    .controller('MainController',ctrlFunc);

function ctrlFunc(){
    /*
    this.message = 'Hello';*/
    /*this.people = [{
        name:'Gabriela Ponceleon'},{name:'Amaro Duarte'},{name:'Adriana Ponceleon'}
        ]*/
    this.people= clientPeople;
}