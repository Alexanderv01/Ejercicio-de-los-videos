 /*Sintaxis del lenguaje
 variables y tipos de datos*/
 console.log("Funcionando...")
 var numero = 10
 let num1; //undefined
 let num2 = null // nulo
 let entero = 10
 let decimal = 1.2
 let string = "Hello World"
 let booleano = false 
 let fecha = new Date()
 let dd = fecha.getDate(),
     mm = fecha.getMonth() + 1,
     aa = fecha.getFullYear(),
     hoy =`${aa}-${mm}-${dd}`
const pi = 3.1416 //constante
/* console.log("Numero1 =", num1)
console.log(`Numero2 =${num2}`)
console.log(`fecha hoy=${fecha}`)
console.log(hoy) */
//arreglos, json y objetos 
let numeros = [1, 2, 3, 4, 5];
let colores = ["red", "green", "blue"];

const json = {
    "nombres": ["Carmen", "Dayanara"],
    "genero": "femenino"
};

const teacher = {
    nombre:'Alexander',
    genero: 'Masculino',
    juegos: ['futbol', 'Basquet'],
    conocimientos: {
        lenguajes: [
            'Js', 'Python', 'Java', 'Php',
        ],
        materias: {Nivel1:'Logica', Nivel2: 'POO', Nivel3: 'POOI' }

    }
};
/* json.genero="F"
teacher.nombre = "Alexander"
teacher.edad = 50
console.log('Json',json, json.genero);
console.log('Objeto',teacher.conocimientos.lenguajes[1],); */
// estructuras de control
// + - * / %
// < == === <= > >= !=
// && || !
let n1 = 5
let n2 = 6
if (num1 === undefined)
    //console.log(`${num1}=undefined`);
if (num2 === null)
    //console.log(`${num2}=null`);
if (n1 == 0) {
    //console.log(n1);
} else if (n1 === n2) {
    //console.log(`${n1}=${n2}`);
} else {
    //console.log(`${n1}!=${n2}`);
}
let num = 5
let rec = num % 2;
switch (rec){
    case 0:
        //console.log(`${rec} - ${num} es Par`);
        break;
    case 1:
        //console.log(`${rec} - ${num} es Impar`);
        break;
    default:
        if (isNaN(rec))
            //console.log(`${rec} = error`);
        break;
}
//console.log("Sali del switch");
// bucles
// while
let i = 0
//console.log("bucle while", colores)
while (i < colores.length && colores [i] != "blue" ) { 
    //console.log(i, colores[i])
    i = i + 1
}
// bucle for usado mas incremento o decrementos automaticos 
//console.log("recorrido for incremento", colores);
for (let i = 9; i < colores.length; i++){
    //console.log(i, colores[i]);
} 
// in 
//console.log("recorrido for in", colores)
for (let j in colores){
    //console.log(j, colores[j])
}
// of
//console.log("recorrido for of", colores)
for (let color of colores) {
    //console.log(color)
}
let nombr = "Daniel"
for (let caracter of nombr) {
    //console.log(caracter)
}
const Personas = [
    {"nombre": "Pepe", "apellidos": "Perez" },
    {"nombre": "Ana", "apellidos": "Gomez" },
    {"nombre": "Daniel", "apellidos": "Vera" },
]
//console.log("of");
for (let persona of Personas) {
    //console.log(persona,persona.nombre)
}
//recorridos de objetos iterables
//console.log("foreach");
Personas.forEach(persona => { 
    if (persona.nombre !="Ana") 
        console.log(persona.nombre)
})
//Map
const persons = Personas.map(person => person.nombre) 
//console.log("Map", persons);
//filter 
const person = Personas.filter(person => person.nombre != "Ana")
//console.log("filter", person);
//find
const onePerson = Personas.find(person => person.nombre === "Ana")
console.log("find", onePerson);
//funciones
function sumar(){
    console.log(5+2);
}
sumar()
let suma = () => console.log(5+3);
suma()
function multiplicar(n1, n2) {
    return n1 * n2
}
let resp = multiplicar(5, 2)
console.log("si arrow",resp)
const multi = (n1, n2) => n1 * n2
console.log(multi(5,2));

function dividir(n1, n2 = 4) {
    let resp = 0
    try {
        resp = n1 / n2
    } catch (e) {
        console.log("Ha ocurrido un error: ", e.messege)

    }
    return resp
}
resp = dividir(8, 8)
console.log("Sin arrow",resp);
resp = dividir(8, 0)
console.log(resp);

const divi = (n1, n2 = 4) => {
    let resp = 0
    try {
        resp = n1 / n2
    }catch (e) {
        console.log("Ha ocurrido un error: ", e.message)
    }
    return resp
}
console.log(divi(8));
//fecth. sirve para consumir api(respuesta del servidor que entrega una respuesta con datos para ser consumidos)
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res => res.json())
    .then(datos => {
        //console.log(datos.results)
        //  datos.results.forEach(poke=> console.log(poke.name))
    })
    .catch(error => console.log("error del Api: ", error))
    //async await: devuelve un objeto asincronico

    const obtenerDatos = async () => {
        try {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
            const datos = await res.json()
            //console.log("Async await");
            //datos.results.forEach(poke => console.log(poke.name))
        } catch (error) {
            console.log("Eroor del Api con async: ", error )
        }
    }

//obtenerDatos ()
//DOM
let contenido = document.getElementById('contenedor')
let variable = document.getElementById('variable')
console.log(contenido);
console.log(variable);
variable.innerHTML = 'Enteros, Decimales, String, Boleanas, fechas';
variable.style.color = "red"
console.log(variable)
//let concepto = document.querySelector('. concepto')   
//console.log(conceptos);
//concepto.innerHTML = "Area de memoria"
let conceptos= document.querySelectorAll('.concepto')
let cont = 1 
conceptos.forEach(parrafo => {
    parrafo.innerHTML = `Area de memoria#${cont}`
    cont = cont + 1
})
console.log(conceptos);
//eventos 
let boton = document.getElementById('boton2')
let Valor = document.getElementById('valor')
boton.addEventListener('mouseover', () => {
    console.log("has pasado el mouse");
})
boton.addEventListener('click', () => {
    let nodo = document.createElement("p")
    nodo.innerHTML = "nuevo elemento"
    nodo.style.color = "red"
    contenido.appendChild(nodo) 

})