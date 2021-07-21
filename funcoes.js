function insert(num) {
var numero = document.getElementById('resultado').value;
document.getElementById('resultado').value = numero + num;
}
function myFunction(event) {
    var x = event.keyCode;
    if (x==48) {// zero sendo bloqueado
       
        return
    }    
    else if(x==49){

        return

    }
    else if(x==50){
        
        return

    }
    else if(x==51){
        
        return

    }
    else if(x==52){
        
        return

    }
    else if(x==53){
        
        return

    }
    else if(x==54){
        
        return

    }
    else if(x==55){
        
        return

    }
    else if(x==56){
        
        return

    }
    else if(x==57){
        
        return

    }
    else if(x==58){
        
        return

    }
    else if(x==59){
        
        return

    }
    
    event.preventDefault(); //bloqueia o evento
    console.log('tecla pressionada:' + x)
}