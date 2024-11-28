//  Ejercicios Arrayas
/*
  1. Crea un array que contenga un listado de tareas. Las tareas tienen un texto y pueden estar completadas o pendientes. 
*/
const taskList = [
 { tarea1: 'recoger',
   completed: true,
}, 
 { tarea2: 'limpiar', 
   completed: false,
}, 
{ tarea3: 'comprar',
  completed: true,
} 
];


const taskIncompleted = []

taskList.forEach(function(ruperto){   // ruperto es el nombre del objeto
  console.log(ruperto)
  if (!ruperto.completed)
    taskIncompleted.push(ruperto)
    
  })
  console.log(taskIncompleted)







/*
  2. Crea un array que contenga un listado de vehículos. Usa al menos 5 propiedades en cada vehículo. 
*/
const vehicle = [
  {
    marca: "ford",
    modelo: "focus",
    tamaño: "mediano",
    color: "azul",
    año: 2022,
  },
  {
    marca: "citroen",
    modelo: "C4",
    tamaño: "grande",
    color: "gris",
    año: 2015,
  },
  {
    marca: "ferrari",
    modelo: "la ferrari",
    tamaño: "mediano",
    color: "rojo",
    año: 2024,
  },
  {
    marca: "toyota",
    modelo: "raptor",
    tamaño: "grande",
    color: "negro",
    año: 2020,
  },
  {
    marca: "fiat",
    modelo: "500",
    tamaño: "pequeño",
    color: "blanco",
    año: 2019,
  },
];
console.log(vehicle);
const vehicleColor = []

vehicle.forEach(function(ruperto){
  console.log(ruperto)
  if (ruperto.color === 'negro')
    taskIncompleted.push(ruperto)
    
  })
  console.log(taskIncompleted)





/*
  3. Imagina que estás en un supermercado haciendo la compra y tienes que comprar lo que está 
  en la variable shoppingList.

  Crea una función a la que le pases dos parámetros, el array de la compra, y el elemento que has comprado
  esa función debe buscar el elemento en el array y eliminarlo.

  Por ejemplo, si le paso un array ['pepino', 'tomate', 'sandía'] y el string 'tomate', debe devolver un array ['pepino', 'sandía']
*/
const shoppingList = [
  'x2 leche de coco',
  'pimiento rojo',
  'pimiento verde',
  'x6 garrafas de agua',
  'aguacates',
  'avena',
  'tomate frito',
  'pepino'
];
 
function itemBought(list, itemToRemove) {
  const indexToRemove = list.indexOf(itemToRemove)
  if (indexToRemove > -1) {
    list.splice(indexToRemove, 1) 
  }
}
itemBought(list, 'pepino')
console.log(itemBought)


