const suma1 = document.querySelector('.mas1');
const suma2 = document.querySelector('.mas2');
const result = document.querySelector('.btn');
const resultadoScript = document.querySelector('.resultado');

suma1.addEventListener('onkeypress', teclaPress);
function teclaPress(){
    for(let i = 0; i < 250; i++){
        console.log('¡ ' + 1 + i + 'Tecla oprimida!');
    }
}
suma2.addEventListener('onkeypress', tecla2Press);
function tecla2Press(){
    for(let i = 0; i < 250; i++){
        console.log('¡ ' + 1 + i + 'Tecla oprimida!');
    }
}
result.addEventListener('onmouseover', onMouseOverF);
function onMouseOverF(){
    console.log('Mouse sobre Botón');
}
result.addEventListener('click', siCayo);
function siCayo(){
    let sumatoria = suma1.value + suma2.value;
    console.log('Ha dado click en Botón Resultado.');
    resultadoScript.innerHTML = sumatoria
}

let arraysMakes = [
    "Chevrolet",
    "Suzuki",
    "Kia",
    "Renault",
    "Mazda",
    "Foton",
    "JAC",
    "Audi",
    "BMW",
    "Cadillac",
    "Ferrari",
    "Tesla",
    "Honda",
    "Jaguar",
    "Toyota"
];
let arraysModels = [
    "2006",
    "2004",
    "1994",
    "1993",
    "2010",
    "2020",
    "2019",
    "2017",
    "2003",
    "1954",
    "1999",
    "2000",
    "2005",
    "2015",
    "2016",
];
let arraysColors = [
    "Morado",
    "Fucsia",
    "Marrón",
    "Platiado",
    "Rojo Ferrari",
    "Verde Panela",
    "Negro del Valle",
    "Azul Agua",
    "Amarillo taxi",
    "Beige",
    "Blanco Celeste",
    "Naranja Mandarina",
    "Está Oxidado",
    "No se ve color esta lleno de stickers",
    "Gris Neutro",
];
function TemplateList(make, model, color){
    let templateListado = {
        Marca:make,
        Modelo:model,
        Color:color
    };
};

for(let i = 0; i < arraysMakes.length && i < arraysModels.length && i < arraysColors.length; i++){

};
