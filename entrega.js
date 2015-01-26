
  function sumar (id) {
    var element = document.getElementById(id);
    
    var string = element.innerHTML;
       console.log("array " + string.split("+"));
    var operador = string.split("+");
    var resultado = parseInt(operador[0]) + parseInt (operador[1]);
       console.log(resultado);
    element.innerHTML = resultado;
  
  }
  
  sumar("op");
  
  // http://jsfiddle.net ----para editar y ejecutar online javascript
