window.onload = init;


function init() {

  edtSenha = document.getElementById('senha');
  edtSenha.onkeyup = function () {
      var totPass = 0; 
      var cor = "red";
      var spanCriterios = document.getElementById('validaCriterios');
      validarSenha(this.value);
      totPass += validarMaiuscula(this.value);
      totPass += validarMinuscula(this.value);
      totPass += validarNumeros(this.value);
      totPass += validarSimbolos(this.value);
      
      //criar aqui sua função com totPass
      if (totPass >=3){
        spanCriterios.innerHTML = "Quantidade de critérios aprovados: " +totPass +" de 4.";
        cor = "green";
      }
      else {
        spanCriterios.innerHTML = "Quantidade de critérios aprovados: " +totPass +" de 4.";
      }
      spanCriterios.style = "color:" +cor;
  }
  
}


function validarSenha(senha) {
  var spanExibeSenha       = document.getElementById('exibeSenha');
  var spanValidaTamanho    = document.getElementById('validaTamanho');
  spanExibeSenha.innerHTML = senha;
  
  var tamanho = senha.length;
  var cor     = "red";
  
  if (tamanho >= 8)
    cor = "green";  
  
  spanValidaTamanho.innerHTML = "A senha tem o tamanho " + tamanho;
  spanValidaTamanho.style     = "color:" + cor;
 }

 function validarMaiuscula(senha) {
   var cont = 0;
  var cor = "red";
  var retorno = 0; 
  var spanMaiuscula = document.getElementById('validaMaiuscula');
    for (i=0; i<senha.length; i++){
        if (senha.charCodeAt(i) >=65 && senha.charCodeAt(i) <90) {
        	cont +=1;
          cor = "green";
        }
        
    }
  spanMaiuscula.innerHTML = "Quantidade de caracteres maiúsculos: " +cont;
  spanMaiuscula.style = "color:" + cor;
  return cont > 0 ? 1:0;
 }

function validarMinuscula(senha) {
  var cont = 0;
  var cor = "red";
  var spanMinuscula = document.getElementById('validaMinuscula');
    for (i=0; i<senha.length; i++){
        if (senha.charCodeAt(i) >=97 && senha.charCodeAt(i) <123) {
        	cont +=1;
            spanMinuscula.innerHTML = "Quantidade de caracteres minúsculos: " + cont;
            console.log;
           
        }
        
      }
    
    spanMinuscula.innerHTML = "Quantidade de caracteres minúsculos: " + cont;
  	if (cont> 0){
  		cor = "green";
  	}
  	spanMinuscula.style = "color:" + cor;
    return cont > 0 ? 1:0;
}

function validarNumeros(senha){
  var cont = 0;
  var cor = "red";
  var spanNumeros = document.getElementById('validaNumeros');
  for (i=0; i<senha.length; i++){
    if (!isNaN(senha[i])){
      cont +=1;
      cor = "green";
    }
  }
  spanNumeros.innerHTML = "Quantidade de Números: " +cont;
  spanNumeros.style = "color:" +cor;
  return cont > 0 ? 1:0;
}

function validarSimbolos(senha) {
 
  var cont = 0;
  var cor = "red";
  var spanSimbolos = document.getElementById('validaSimbolos');
    for (i=0; i<senha.length; i++){
        if (senha.charCodeAt(i) >=0 && senha.charCodeAt(i) <48  || (senha.charCodeAt(i)>57 && senha.charCodeAt(i)< 65) || senha.charCodeAt(i)> 90 && senha.charCodeAt(i)<97 || senha.charCodeAt(i)> 122){
        	cont +=1;
            spanSimbolos.innerHTML = "Quantidade de Símbolos: " + cont;
            console.log;
            
        }
        
      }
    
    spanSimbolos.innerHTML = "Quantidade de Símbolos: " + cont;
  	if (cont> 0){
  		cor = "green";
  	}
  	spanSimbolos.style = "color:" + cor;
    return cont > 0 ? 1:0;
  
}