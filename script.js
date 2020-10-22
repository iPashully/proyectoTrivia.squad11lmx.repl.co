
// Funcion que recupera nombre y muestra pantalla de categorias
function mostrar(){
let=  userName= document.getElementById("name").value;
  console.log(userName)
  document.getElementById("welcome").innerHTML = userName + ", escoge la categoría en la que quieras jugar"
document.getElementById("section1").style.display="none";
document.getElementById("section2").style.display="block";
document.getElementById("pregunta1l").style.display="none";
document.getElementById("pregunta2l").style.display="none";
document.getElementById("pregunta3l").style.display="none";
document.getElementById("pregunta1c").style.display="none";
document.getElementById("pregunta2c").style.display="none";
document.getElementById("pregunta3c").style.display="none";
document.getElementById("score_section").style.display="none";
}


//Funcion que muestra primera pregunta de la categoría lugares
 
function mostrar_q1l(){
document.getElementById("section1").style.display="none";
document.getElementById("section2").style.display="none";
document.getElementById("pregunta1l").style.display="block";
document.getElementById("pregunta2l").style.display="none";
document.getElementById("pregunta3l").style.display="none";
document.getElementById("pregunta1c").style.display="none";
document.getElementById("pregunta2c").style.display="none";
document.getElementById("pregunta3c").style.display="none";
document.getElementById("score_section").style.display="none";
}


//Funcion que muestra segunda pregunta de la categoría de lugares
function mostrar_q2l(){
let respuestaCorrectap1l= document.getElementById("p1r3t").checked;
  console.log(respuestaCorrectap1l)

  if (respuestaCorrectap1l==true){
    alert ("Simona, la mona")
    
  }
  else{
    alert ("Nel, Pastel")
     
  }

  var puntop1= Number (respuestaCorrectap1l);
  console.log(puntop1)
  
document.getElementById("section1").style.display="none";
document.getElementById("section2").style.display="none";
document.getElementById("pregunta1l").style.display="none";
document.getElementById("pregunta2l").style.display="block";
document.getElementById("pregunta3l").style.display="none";
document.getElementById("pregunta1c").style.display="none";
document.getElementById("pregunta2c").style.display="none";
document.getElementById("pregunta3c").style.display="none";
document.getElementById("score_section").style.display="none";
}


//Funcion que muestra tercera pregunta de la categoria de lugares
function mostrar_q3l(){

  let respuestaCorrectap2l= document.getElementById("p2r3t").checked;
  console.log(respuestaCorrectap2l)

  if (respuestaCorrectap2l==true){
    alert ("Simona, la mona")
    
  }
  else{
    alert ("Nel, Pastel")
    
  }
  
 
  var puntop2= Number (respuestaCorrectap2l);
  console.log(puntop2)

document.getElementById("section1").style.display="none";
document.getElementById("section2").style.display="none";
document.getElementById("pregunta1l").style.display="none";
document.getElementById("pregunta2l").style.display="none";
document.getElementById("pregunta3l").style.display="block";
document.getElementById("pregunta1c").style.display="none";
document.getElementById("pregunta2c").style.display="none";
document.getElementById("pregunta3c").style.display="none";
document.getElementById("score_section").style.display="none";
}

//Funcion que muestra primera pregunta de la categoria comida
function mostrar_q1c(){
document.getElementById("section1").style.display="none";
document.getElementById("section2").style.display="none";
document.getElementById("pregunta1l").style.display="none";
document.getElementById("pregunta2l").style.display="none";
document.getElementById("pregunta3l").style.display="none";
document.getElementById("pregunta1c").style.display="block";
document.getElementById("score_section").style.display="none";
document.getElementById("pregunta2c").style.display="none";
document.getElementById("pregunta3c").style.display="none"
}


//Funcion que muestra segunda pregunta de la categoria de comida
function mostrar_q2c(){

  let respuestaCorrectap1c= document.getElementById("p1r3tc").checked;
  console.log(respuestaCorrectap1c)

  if (respuestaCorrectap1c==true){
    alert ("Simona, la mona")
    
  }
  else{
    alert ("Nel, Pastel")
     
  }

  var puntop1c= Number (respuestaCorrectap1c);
  console.log(puntop1c)

document.getElementById("section1").style.display="none";
document.getElementById("section2").style.display="none";
document.getElementById("pregunta1l").style.display="none";
document.getElementById("pregunta2l").style.display="none";
document.getElementById("pregunta3l").style.display="none";
document.getElementById("pregunta1c").style.display="none";
document.getElementById("pregunta2c").style.display="block";
document.getElementById("score_section").style.display="none";
document.getElementById("pregunta3c").style.display="none"
}


//Funcion que muestra tercera pregunta de la categoría comida
function mostrar_q3c(){

 let respuestaCorrectap2c= document.getElementById("p2r3tc").checked;
  console.log(respuestaCorrectap2c)

  if (respuestaCorrectap2c==true){
    alert ("Simona, la mona")
    
  }
  else{
    alert ("Nel, Pastel")
     
  }
   var puntop2c= Number (respuestaCorrectap2c);
  console.log(puntop2c)

  document.getElementById("section1").style.display="none";
document.getElementById("section2").style.display="none";
document.getElementById("pregunta1l").style.display="none";
document.getElementById("pregunta2l").style.display="none";
document.getElementById("pregunta3l").style.display="none";
document.getElementById("pregunta1c").style.display="none";
document.getElementById("pregunta2c").style.display="none";
document.getElementById("pregunta3c").style.display="block";
document.getElementById("score_section").style.display="none";
}

//Funcion que muestra pantalla de resultados para lugares
function mostrar_score(){
    let respuestaCorrectap1l= document.getElementById("p1r3t").checked;
    
    let respuestaCorrectap2l= document.getElementById("p2r3t").checked;

    let respuestaCorrectap3l= document.getElementById("p3r3t").checked;
  console.log(respuestaCorrectap3l)

  if (respuestaCorrectap3l==true){
    alert ("Simona, la mona")
    
  }
  else{
    alert ("Nel, Pastel")
   
  }


   var puntop1= Number (respuestaCorrectap1l);
 

  var puntop2= Number (respuestaCorrectap2l);
  

 var puntop3= Number (respuestaCorrectap3l);
 console.log(puntop3)
  

  let score_finall= puntop1+puntop2+puntop3


document.getElementById("resultado").innerHTML = "Obtuviste " +  score_finall+" de 3 respuestas correctas"

document.getElementById("section1").style.display="none";
document.getElementById("section2").style.display="none";
document.getElementById("pregunta1l").style.display="none";
document.getElementById("pregunta2l").style.display="none";
document.getElementById("pregunta3l").style.display="none";
document.getElementById("score_section").style.display="block";
document.getElementById("pregunta1c").style.display="none";
document.getElementById("pregunta2c").style.display="none";
document.getElementById("pregunta3c").style.display="none"
}

//Funcion que muestra pantalla de resultados para comida
function mostrar_score2(){

  let respuestaCorrectap1c= document.getElementById("p1r3tc").checked;
    
    let respuestaCorrectap2c= document.getElementById("p2r3tc").checked;

    let respuestaCorrectap3c= document.getElementById("p3r3tc").checked;
  console.log(respuestaCorrectap3c)


  if (respuestaCorrectap3c==true){
    alert ("Simona, la mona")
    
  }
  else{
    alert ("Nel, Pastel")
     
  }

  var puntop1c= Number (respuestaCorrectap1c);
 

  var puntop2c= Number (respuestaCorrectap2c);
  

 var puntop3c= Number (respuestaCorrectap3c);
  console.log(puntop3c)

  let score_finalc= puntop1c+puntop2c+puntop3c


document.getElementById("resultado").innerHTML = "Obtuviste " +  score_finalc+" de 3 respuestas correctas"


document.getElementById("section1").style.display="none";
document.getElementById("section2").style.display="none";
document.getElementById("pregunta1l").style.display="none";
document.getElementById("pregunta2l").style.display="none";
document.getElementById("pregunta3l").style.display="none";
document.getElementById("pregunta1c").style.display="none";
document.getElementById("pregunta2c").style.display="none";
document.getElementById("pregunta3c").style.display="none";
document.getElementById("score_section").style.display="block";
}
