// ---------------- CARTA ----------------
function abrirCarta(){
document.getElementById("portada").style.display="none";
document.getElementById("contenido").classList.remove("oculto");
document.getElementById("musica").play();
}

// ---------------- SECCIONES ----------------
function cerrarTodo(){
document.getElementById("seccionFotos").classList.add("oculto");
document.getElementById("seccionPoemas").classList.add("oculto");
document.getElementById("seccionRazones").classList.add("oculto");
}

function toggleFotos(){
cerrarTodo();
document.getElementById("seccionFotos").classList.toggle("oculto");
}

function togglePoemas(){
cerrarTodo();
document.getElementById("seccionPoemas").classList.toggle("oculto");
}

function toggleRazones(){
cerrarTodo();
document.getElementById("seccionRazones").classList.toggle("oculto");
}

// ---------------- ESCRITURA ----------------
const nombres="Gabriela ❤️ Richard";
const mensaje="Esta página es para ti porque te amo mucho y eres especial ❤️";

let i=0;
let j=0;

function escribirNombres(){
if(i<nombres.length){
document.getElementById("titulo").innerHTML+=nombres.charAt(i);
i++;
setTimeout(escribirNombres,100);
}else{
setTimeout(escribirMensaje,500);
}
}

function escribirMensaje(){
if(j<mensaje.length){
document.getElementById("submensaje").innerHTML+=mensaje.charAt(j);
j++;
setTimeout(escribirMensaje,40);
}else{
document.getElementById("mensajeIntro").classList.remove("oculto-intro");
document.getElementById("sobre").classList.remove("oculto-intro");
}
}

escribirNombres();

// ---------------- CORAZONES ----------------
function crearCorazon(){
const c=document.createElement("div");
c.className="corazon";
c.innerHTML="❤";
c.style.left=Math.random()*window.innerWidth+"px";
c.style.fontSize=(15+Math.random()*25)+"px";
c.style.animationDuration=(3000+Math.random()*3000)+"ms";
document.body.appendChild(c);
setTimeout(()=>c.remove(),5000);
}

setInterval(crearCorazon,120);

// ---------------- CONTADOR ----------------
const fechaInicio=new Date("2025-06-15");

function actualizarContador(){
const ahora=new Date();
let diff=ahora-fechaInicio;

let s=Math.floor(diff/1000)%60;
let m=Math.floor(diff/1000/60)%60;
let h=Math.floor(diff/1000/60/60)%24;
let d=Math.floor(diff/1000/60/60/24);

document.getElementById("tiempoJuntos").innerText=
`${d} días, ${h} horas, ${m} minutos, ${s} segundos`;
}

setInterval(actualizarContador,1000);
actualizarContador();

// ---------------- MENSAJE GUARDADO ----------------
function editarMensaje(){
let nuevo=prompt("Escribe el nuevo mensaje 💖");
if(!nuevo) return;

localStorage.setItem("mensaje",nuevo);
document.getElementById("mensaje").innerText=nuevo;
}

// cargar mensaje
window.onload=function(){
let msg=localStorage.getItem("mensaje");
if(msg){
document.getElementById("mensaje").innerText=msg;
}
};