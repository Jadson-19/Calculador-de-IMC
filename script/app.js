// MOSTRAR O REGISTRO DO HTML NA TELA

function calcularIndice() {

  let inputNome = document.querySelectorAll('.nome')[0].value;
  let inputAltura = document.querySelectorAll('.altura')[0].value;
  let inputPeso = document.querySelectorAll('.peso')[0].value;

  let verificarIndice = document.getElementById("verificarIndice");

  let nome = inputNome;
  let altura = inputAltura;
  let peso =  inputPeso;

  altura / 100;

  let calculo = peso / (altura * altura);

  verificarIndice.innerHTML = altura;
  verificarIndice.innerHTML = peso;
  verificarIndice.innerHTML = calculo.toFixed(1);

  

if (nome == "" || altura == "" || peso == ""){

    verificarIndice.innerHTML = "Por favor, verifique se preencheu todos os campos."
}

else if (calculo <  17){

    verificarIndice.innerHTML =  nome + "," + " seu IMC é " + calculo.toFixed(1) + "." + " Cuidado! Você está muito abaixo do seu peso ideal, aumente a ingestão de nutrientes e pratique atividade fisica.";
}

else if (calculo >= 17 && calculo < 18.49){

    verificarIndice.innerHTML = nome + "," + " seu IMC é " + calculo.toFixed(1) + "." + " Você está abaixo do seu peso ideal, faça uma dieta pra ganho de massa muscular e pratique atividade fisica.";
}

else if (calculo >= 18.5 && calculo < 24.99){
  verificarIndice.innerHTML = nome + "," + " seu IMC é " + calculo.toFixed(1) + "." + " Seu peso está normal, parabéns! Continue se alimentando bem e treinando.";
  
}

else if (calculo >= 25 && calculo < 29.99){
  verificarIndice.innerHTML = nome + "," + " seu IMC é " + calculo.toFixed(1) + "." + " Você encontra-se acima do seu peso ideal, faça uma dieta pra perda de gordura e pratique atividade fisica, dando ênfase em aeróbicos.";
  
}

else if (calculo >= 30 && calculo < 34.99){
  verificarIndice.innerHTML = nome + "," + " seu IMC é " + calculo.toFixed(1) + "." + " Cuidado! Você está com Obesidade nível I, faça uma dieta pra perda de gordura e pratique atividade fisica, dando ênfase em aeróbicos.";
  
}

else if (calculo >=  35 && calculo < 39.99){
  verificarIndice.innerHTML = nome + "," + " seu IMC é " + calculo.toFixed(1) + "." + " Muito cuidado! Você está com Obesidade nível II, faça uma dieta pra perda de gordura o mais rápido possível e pratique atividade fisica, dando ênfase em aeróbicos.";
  
}

else{

  verificarIndice.innerHTML = nome + "," + " seu IMC é " + calculo.toFixed(1) + "." + " Muito cuidado! Você está com Obesidade nível III, faça uma dieta pra perda de gordura o mais rápido possível e pratique atividade fisica, dando ênfase em aeróbicos.";

}

  console.log("Calculando...");
}

function mascara(i){
   
  var v = i.value;
  
  if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
     i.value = v.substring(0, v.length-1);
     return;
  }
  
  i.setAttribute("maxlength", "4");
  if (v.length == 1) i.value += ".";
  

}

function mascaraPeso(i){
   
  var v = i.value;
  
  if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
     i.value = v.substring(0, v.length-1);
     return;
  }
  
  i.setAttribute("maxlength", "6");
  if (v.length == 3 || v.length == 4) i.value += ".";
  

}