var display = document.getElementById("display")
var total = 0;
var inicial = 0;
var final = 0;
var opera = "";
/*var operandos = {
	operador:"",
	operadorAnt:"",
	numAnt:0
}*/

function ok(){
	calculadora.init();
}

function operaciones(numero1 , numero2 , opera){
	//suma
	if(opera == "+"){
         total = (parseInt(numero1) + parseInt(numero2));
         console.log(total);
         document.getElementById("display").innerHTML = total.toFixed(2);
	}
	//resta
	else if(opera == "-"){
         total = (parseInt(numero1) - parseInt(numero2));
         console.log(total);
         document.getElementById("display").innerHTML = total.toFixed(2);
	}
	//multi
	else if(opera == "*"){
         total = (parseInt(numero1) * parseInt(numero2));
         console.log(total);
         document.getElementById("display").innerHTML = total.toFixed(2);
	}
	//division
	else if(opera == "/"){
         total = (parseInt(numero1) / parseInt(numero2));
         console.log(total);
         document.getElementById("display").innerHTML = total.toFixed(2);
	}
}

var calculadora = {
	resultado : "",
	punto2 : 0,
	masMemos: 0,
	mm : 0,
	init: function(){
		var self = this
		var cero = document.getElementById("0")
		var uno = document.getElementById("1")
		var dos = document.getElementById("2")
		var tres = document.getElementById("3")
		var cuatro = document.getElementById("4")
		var cinco = document.getElementById("5")
		var seis = document.getElementById("6")
		var siete = document.getElementById("7")
		var ocho = document.getElementById("8")
		var nueve = document.getElementById("9")
		var punto = document.getElementById("punto")
		var on = document.getElementById("on")
		var sign = document.getElementById("sign")
		var raiz = document.getElementById("raiz")
		var div = document.getElementById("dividido")
		var por = document.getElementById("por")
		var menos = document.getElementById("menos")
		var mas = document.getElementById("mas")
		var igual = document.getElementById("igual")

		/*//funsion de display
		function numero(numero2){
		   document.getElementById("display").innerHTML = numero2;
		}*/
        
        cero.addEventListener("click",function(){
        	//validacion que no se agregue mas ceros si esta solo un cero
           if(calculadora.resultado != ""){
           	  self.numero("0")
           }
        })//fin numero
		cero.addEventListener("mousedown",function(){
			cero.setAttribute("style","transform:scale(0.95,0.95)")
		})//fin mousedown
		cero.addEventListener("mouseout",function(){
			cero.setAttribute("style","transform:scale(1,1)")
		})//fin mouseout
		uno.addEventListener("click",function(){
        	self.numero("1")
        })//fin numero
		uno.addEventListener("mousedown",function(){
			uno.setAttribute("style","transform:scale(0.95,0.95)")
		})//fin mousedown
		uno.addEventListener("mouseout",function(){
			uno.setAttribute("style","transform:scale(1,1)")
		})//fin mouseout
		dos.addEventListener("click",function(){
        	self.numero("2")
        })//fin numero
		dos.addEventListener("mousedown",function(){
			dos.setAttribute("style","transform:scale(0.95,0.95)")
		})//fin mousedown
		dos.addEventListener("mouseout",function(){
			dos.setAttribute("style","transform:scale(1,1)")
		})//fin mouseout
		tres.addEventListener("click",function(){
        	self.numero("3")
        })//fin numero
		tres.addEventListener("mousedown",function(){
			tres.setAttribute("style","transform:scale(0.95,0.95)")
		})//fin mousedown
		tres.addEventListener("mouseout",function(){
			tres.setAttribute("style","transform:scale(1,1)")
		})//fin mouseout
		cuatro.addEventListener("click",function(){
        	self.numero("4")
        })//fin numero
		cuatro.addEventListener("mousedown",function(){
			cuatro.setAttribute("style","transform:scale(0.95,0.95)")
		})//fin mousedown
		cuatro.addEventListener("mouseout",function(){
			cuatro.setAttribute("style","transform:scale(1,1)")
		})//fin mouseout
		cinco.addEventListener("click",function(){
        	self.numero("5")
        })//fin numero
		cinco.addEventListener("mousedown",function(){
			cinco.setAttribute("style","transform:scale(0.95,0.95)")
		})//fin mousedown
		cinco.addEventListener("mouseout",function(){
			cinco.setAttribute("style","transform:scale(1,1)")
		})//fin mouseout
		seis.addEventListener("click",function(){
        	self.numero("6")
        })//fin numero
		seis.addEventListener("mousedown",function(){
			seis.setAttribute("style","transform:scale(0.95,0.95)")
		})//fin mousedown
		seis.addEventListener("mouseout",function(){
			seis.setAttribute("style","transform:scale(1,1)")
		})//fin mouseout
		siete.addEventListener("click",function(){
        	self.numero("7")
        })//fin numero
		siete.addEventListener("mousedown",function(){
			siete.setAttribute("style","transform:scale(0.95,0.95)")
		})//fin mousedown
		siete.addEventListener("mouseout",function(){
			siete.setAttribute("style","transform:scale(1,1)")
		})//fin mouseout
		ocho.addEventListener("click",function(){
        	self.numero("8")
        })//fin numero
		ocho.addEventListener("mousedown",function(){
			ocho.setAttribute("style","transform:scale(0.95,0.95)")
		})//fin mousedown
		ocho.addEventListener("mouseout",function(){
			ocho.setAttribute("style","transform:scale(1,1)")
		})//fin mouseout
		nueve.addEventListener("click",function(){
        	self.numero("9")
        })//fin numero
		nueve.addEventListener("mousedown",function(){
			nueve.setAttribute("style","transform:scale(0.95,0.95)")
		})//fin mousedown
		nueve.addEventListener("mouseout",function(){
			nueve.setAttribute("style","transform:scale(1,1)")
		})//fin mouseout
		on.addEventListener("click",function(){
        	self.limpiar("")

        })//fin numero
		on.addEventListener("mousedown",function(){
			on.setAttribute("style","transform:scale(0.95,0.95)")
		})//fin mousedown
		on.addEventListener("mouseout",function(){
			on.setAttribute("style","transform:scale(1,1)")
		})//fin mouseout
		sign.addEventListener("click",function(){
		 if( calculadora.mm < 1){
		 	if(calculadora.resultado != ""){
			var masMen = "-";
			masMen += self.resultado;
			self.resultado = masMen;
        	document.getElementById("display").innerHTML = self.resultado;
        	self.masMenosValidacion(self.resultado); 
        	}
          }
        })//fin numero
		sign.addEventListener("mousedown",function(){
			sign.setAttribute("style","transform:scale(0.95,0.95)")
		})//fin mousedown
		sign.addEventListener("mouseout",function(){
			sign.setAttribute("style","transform:scale(1,1)")
		})//fin mouseout
		div.addEventListener("click",function(){
        	opera = "/";
            inicial = calculadora.resultado;
            calculadora.resultado = "";
        })//fin numero
		div.addEventListener("mousedown",function(){
			div.setAttribute("style","transform:scale(0.95,0.95)")
		})//fin mousedown
		div.addEventListener("mouseout",function(){
			div.setAttribute("style","transform:scale(1,1)")
		})//fin mouseout
		por.addEventListener("click",function(){
        	opera = "*";
            inicial = calculadora.resultado;
            calculadora.resultado = "";
        })//fin numero
		por.addEventListener("mousedown",function(){
			por.setAttribute("style","transform:scale(0.95,0.95)")
		})//fin mousedown
		por.addEventListener("mouseout",function(){
			por.setAttribute("style","transform:scale(1,1)")
		})//fin mouseout
		menos.addEventListener("click",function(){
        	opera = "-";
            inicial = calculadora.resultado;
            calculadora.resultado = "";
        })//fin numero
		menos.addEventListener("mousedown",function(){
			menos.setAttribute("style","transform:scale(0.95,0.95)")
		})//fin mousedown
		menos.addEventListener("mouseout",function(){
			menos.setAttribute("style","transform:scale(1,1)")
		})//fin mouseout
		mas.addEventListener("click",function(){
			//inical
        	opera = "+";
            inicial = calculadora.resultado;
            calculadora.resultado = "";
        })//fin numero
		mas.addEventListener("mousedown",function(){
			mas.setAttribute("style","transform:scale(0.95,0.95)")
		})//fin mousedown
		mas.addEventListener("mouseout",function(){
			mas.setAttribute("style","transform:scale(1,1)")
		})//fin mouseout
		igual.addEventListener("click",function(){
        	//final
        	if (final > 0 && opera == "-") {
        	  final = calculadora.resultado;
              inicial = total;
        	  operaciones(inicial,final,opera);
        	}else if(final > 0 ){
              inicial = calculadora.resultado;
              final = total;
        	  operaciones(inicial,final,opera);
        	}else{
        	  final = calculadora.resultado;
        	  operaciones(inicial,final,opera);
           }
        })//fin numero
		igual.addEventListener("mousedown",function(){
			igual.setAttribute("style","transform:scale(0.95,0.95)")
		})//fin mousedown
		igual.addEventListener("mouseout",function(){
			igual.setAttribute("style","transform:scale(1,1)")
		})//fin mouseout
		punto.addEventListener("click",function(){
			 // si hay mas de un punto no realizara insertar punto
		    if( calculadora.punto2 < 1){
		    	if (calculadora.resultado != "") {
        	    self.numero(".");
        	   }
        	}else{
		   	 alert("no se puede ingresar mas de un punto ");
		   };
        })//fin numero
		punto.addEventListener("mousedown",function(){
			punto.setAttribute("style","transform:scale(0.95,0.95)")
		})//fin mousedown
		punto.addEventListener("mouseout",function(){
			punto.setAttribute("style","transform:scale(1,1)")
		})//fin mouseout
	},//fin init,
	numero: function(numero2){
           this.validacionPunto(numero2);
          
		       this.resultado += numero2;
		       if(this.resultado.length < 9){
                  document.getElementById("display").innerHTML = this.resultado;
		       }else{
		   	   alert("no se puede ingresar mas de 8 digitos")
		   }
		
	},
	limpiar: function(on){
		calculadora.resultado = "";
	    document.getElementById("display").innerHTML = this.resultado;
	    document.getElementById("display").innerHTML = ("0");
	    this.punto = 0;
	    this.mm = 0;
	    this.punto2 = 0;
	    total = 0;
        inicial = 0;
        final = 0;
        opera = "";
	},
	validacionPunto: function(cadena){        
           	 
           	    if (this.punto2 < 2) {
           	       if(cadena == "."){
           	  	    this.punto2 += 1;
           	       }
           	  }
	},//fin punto
	masMenosValidacion:function(validar){

           if (calculadora.mm < 2) {
           	     for(var i=0; i < validar.length; i++){
           	       if(validar[i] == "-"){
           	  	    this.mm += 1;
           	  	    
           	       }
           	    }
           	  }
	}//fin mas menos validacion
}//fin calculadora
var number = parseInt("-12+10+2+3");
var numer2 = parseInt("50");
var res = number + numer2;
console.log(res);
