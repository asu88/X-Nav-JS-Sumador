
  var sum = function sumaRandom(id, id2){
    
    //num = Math.floor((Math.random() * 10) + 1); 
    //console.log("rand "+num);
    var element = document.getElementById(id);
    var elem2 = document.getElementById(id2);  
    //var string = element.innerHTML;
      // console.log("array " + string.split("+"));
    var operador1 = Math.floor((Math.random() * 10) + 1); 
    var operador2 = Math.floor((Math.random() * 10) + 1); 
    var resultado = operador1 +  operador2;
       //console.log(resultado);
    
    element.innerHTML = operador1 + " + "+ operador2 
    elem2.innerHTML =  " = "+resultado;

  }
   //if ( document.readyState == complete ){
   		 sum("op","res");

  	//}
  