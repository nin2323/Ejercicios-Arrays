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



// ejercicios casa

/*
  1. Dado el siguiente carrito de la compra, calcular el precio total y mostrarlo por pantalla con console.log
*/
const shoppingCart = [
	{ product: 'Red wine', price: 20, quantity: 1},
  { product: 'water', price: 1, quantity: 2 },
  { product: 'Pizza carbonara', price: 10, quantity: 3 },
  { product: 'Tiramisú', price: 5.99, quantity: 2 }
]
let totalPrice = 0;

shoppingCart.forEach(function(product, index) {
  totalPrice = totalPrice + product.price * product.quantity;
})
console.log(totalPrice);


/*
  2. Crea un array que contenga un listado de tareas. Las tareas tienen un texto y pueden estar completadas o pendientes. A continuación filtra el array para mostrar todas las 
  tareas que están completadas y luego todas las tareas que están pendientes.
*/
// hacer

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
 
 taskList.forEach(function(task){   
   console.log(task)
   if (!task.completed)
     taskIncompleted.push(task)
     
   })
   console.log(taskIncompleted)

/*
 3. Dado el listado de frutas que ponemos a continuación, recórrelo y crea otro array de igual longitud donde en cada elemento, aparezca el nombre de la fruta y si crece o no en un árbol.
   - Las que crecen en los árboles son las manzanas, las peras, las granadas y los plátanos.
*/


// crear un array de objetos donde tengan nombre de la fruta y se crece en un arbol o no

// Vamos a decirle que recorra el array
// Por cada elemento del array nos crea un objeto con nombre de la fruta
// Por cada objeto debe añadir el valor growsOnTree: false o true

const frutas = ['manzana', 'pera', 'granada', 'platano', 'uva', 'melon', 'sandia'];

const frutasArbol = frutas.map(fruta => {
  const isTree = fruta !== 'uva' &&  fruta !== 'melon' &&  fruta !== 'sandia';  // esto se puede simplificar?
  return { name: fruta, isTree };
})
console.log(frutasArbol);

/* 
   4. Dado el carrito de la compra del ejercicio 1, transforma ese array en otro que contenga además los impuestos. Por ejemplo, el primer elemento será:
	  { product: 'Red wine', price: 20, quantity: 1, taxes: 2 }

   Asumiremos que los impuestos son el 10% del precio total del producto.

   PD: La idea es que recorras el array original y lo transformes en otro con esa propiedad.
*/
const shoppingCart2 = [
	{ product: 'Red wine', price: 20, quantity: 1},
  { product: 'water', price: 1, quantity: 2 },
  { product: 'Pizza carbonara', price: 10, quantity: 3 },
  { product: 'Tiramisú', price: 5.99, quantity: 2 }
]

shoppingCart2.forEach(product => {
  const tax = (product.price * product.quantity) * 0.1;
   return product.tax = tax;  // hace falta return?
})
console.log(shoppingCart2)

/*
   5. Dado el carrito de la compra del ejercicio 1, implementa una función que permita eliminar una unidad de producto del carrito de la compra basándose 
   en el nombre del producto. Por ejemplo, si la función se invoca con "Red wine", el array debe eliminar ese elemento de la lista porque solo hay 1, pero si se invoca con
   "Tiramisú", simplemente se restará uno a la propiedad quantity de ese elemento.
*/
const shoppingCart3 = [
	{ product: 'Red wine', price: 20, quantity: 1},
  { product: 'water', price: 1, quantity: 2 },
  { product: 'Pizza carbonara', price: 10, quantity: 3 },
  { product: 'Tiramisú', price: 5.99, quantity: 2 }
]

/* function buyedProduct(prodName, cart) {
  const product = cart.find(item => item.product === prodName);

  if (product.quantity > 1) {
    product.quantity - 1;
  } else {
    const index = cart.indexOf(product);
    cart.splice(index);
  }
}
console.log('Water', shoppingCart3);*/

function buyedProduct(prodName, cart) {
  const product = cart.forEach(function(item, index){
    if (item.product !== productName) {
      prodNameCopy.push(item);
      return;
    }
    if (item.quantity === 1) {
      return;
    }
    prodNameCopy
  })
}


/* Lo que tiene que hacer esa función es recorrer el array que queramos filtrar, y para cada elemento comprobar si devuelve las condiciones. Si es así, el elemento se guardará en otro array que solo tendrá los elementos filtrados.

Después de recorrer la función, devolveremos el array filtrado. 


La función aceptará dos parámetros:
El primero será el array que queramos filtrar
El segundo será una función que se llamará para cada elemento del array a filtrar y que debe devolver true o false . Esta segunda función aceptará a su vez dos parámetros: el elemento del array (aka ruperto) y el índice que ocupa.*/

function filterArray(array, filterFunction) {
  const filteredArray = [];
  array.forEach(function(arrayItem, index){
    if (filterFunction(arrayItem, index)) {
      filteredArray.push(arrayItem);
    } 
  }) 
    return filteredArray;
  }


const tasks = [
  { text: 'hacer deberes', isCompleted: true },
  { text: 'hacer funcion dentro de funcion', isCompleted: false }
];

function isTaskCompleted(task, index) {
  console.log('Comprobando tarea con índice', index);

  return task.isCompleted;
}

const completedTasks = filterArray(tasks, isTaskCompleted);
console.log(completedTasks);

const cars = [
  { color: 'blue', doors: 4 },
  { color: 'red', doors: 5 }
];

function isRedCar(color, index) {
  console.log('Comprobando color', index);

  return color.cars;
}

const colorRed = filterArray(color, isRedCar);
console.log(colorRed);


// filtrar las frutas que no crecen en un arbol

/*const fruits = ['manzana', 'pera', 'granada', 'plátano', 'uva', 'melón', 'sandía'];
const fruitsComplete = [];

fruits.forEach(function (fruitName) {
  fruitsComplete.push({
    name: fruitName,
    growInTree: fruitName === 'manzana' || fruitName === 'pera' || fruitName === 'granada' || fruitName === 'plátano'
  });
})

const filterOnTree = fruitsComplete.filter(function(fruitInfo) { 
  return fruitInfo.grouInTree;
})
console.log(filterOnTree);*/



const fruits = ['manzana', 'pera', 'granada', 'plátano', 'uva', 'melón', 'sandía'];

const fruitsComplete = fruits.map(function (fruitName) {
  return {
    name: fruitName,
    growInTree: fruitName === 'manzana' || fruitName === 'pera' || fruitName === 'granada' || fruitName === 'plátano'
  };
});

const fruitsFound = fruits.find(function(fruitName) {
  return !fruitName.growInTree
})
console.log(fruitsComplete)


// Kata
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// tenemos un string
// tiene que salir un array con la misma longitud
// crear una variable con el array de salida 
// pasar el string de entrada a un array de carateres
// por cada caracter miramos su indice 
// creamos una variable de texto con el valor original cambiando el caracter original a mayuscula 

function wave(str) {
  const result = [];
  const characters = str.split('');

  characters.forEach(function(char, index){
    if(char === ' '){
      return;
    }
  const charactersCopy = [...characters];
  charactersCopy[index] = char.toUpperCase();
    result.push(charactersCopy.join(''));
  })
 console.log(result);
}
wave('hello');
console.log(wave('h e l l o'));

// otra forma de hacerlo

function wave(str){
  const result = [];
  const characters = str.split('');
  
  characters.forEach(function(char, index){
    characters[index] = char.toUpperCase();
    result.push(characters.join(''))
    characters[index] = char;
  })
  console.log(result)
  }
  
  console.log(wave('hello'))



// kata

/* Dado un array (arr) como argumento complete la función countSmileys que debe devolver el número total de caras sonrientes.

Reglas para una cara sonriente:

 - Cada cara sonriente debe contener un par de ojos válido. Los ojos pueden estar marcados como : o ;
 - Una carita sonriente puede tener nariz, pero no es obligatorio. Los caracteres válidos para la nariz son - o ~.
 - Toda cara sonriente debe tener una boca sonriente que debe marcarse con ) o D
 - No se permiten caracteres adicionales excepto los mencionados.
*/

function countSmileys(arr) {
  const simileys = [':)', ':D', ':-)', ':-D', ':~)', ':~D', ';)', ';D', ';-)', ';-D', ';~)', ';~D'];
  let numSmiles = 0;

  arr.forEach(function(char, index){
    if (simileys.includes(char)) {
      numSmiles = numSmiles + 1;
    }; 
  });
  return numSmiles;
}
console.log(countSmileys(['','','']));

// primer char= : o ;
// segundo char = -, ~, ), D
// tercer char = ), D

// Si el str tiene 2 characteres significa que no tiene nariz


