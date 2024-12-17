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
  });
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

/*function countSmileys(arr) {
  const simileys = [':)', ':D', ':-)', ':-D', ':~)', ':~D', ';)', ';D', ';-)', ';-D', ';~)', ';~D'];
  let numSmiles = 0;

  arr.forEach(function(char){
    if (simileys.includes(char)) {
      numSmiles = numSmiles + 1;
    }; 
  });
  return numSmiles;
}
console.log(countSmileys([':)','X-)',':-D']));*/


function countSmileys(arr) {
  let smileysNum = 0;

  arr.forEach(function (face) {
    if (face.length === 2) {
      if ((face[0] === ':' || face[0] === ';') && (face[1] === ')' || face[1] === 'D')) {
        smileysNum += 1;
      }
    }

    if (face.length === 3) {
      if (
        (face[0] === ':' || face[0] === ';') &&
        (face[1] === '-' || face[1] === '~') &&
        (face[2] === ')' || face[2] === 'D')
      ) {
        smileysNum += 1;
      }
    }
  });

  return smileysNum;
}


function countSmileys(arr) {
  let smileysNum = 0;

  const validSmiles = arr.map(function(face) {
    if (face.length === 2) {
      if ((face === ':' || face === ';') && (face === ')' || face === 'D')) {
        return true;
      }
    }

    if (face.length === 3) {
        (face[0] === ':' || face[0] === ';') &&
        (face[1] === '-' || face[1] === '~') &&
        (face[2] === ')' || face[2] === 'D')
        return true;
      }
      return false;
  });
  return validSmiles.length;
};

// primer char= : o ;
// segundo char = -, ~, ), D
// tercer char = ), D

// Si el str tiene 2 characteres significa que no tiene nariz



// kata 

function openOrSenior(data){
  return data.map(function(memberInfo){
    const age = memberInfo[0];
    const handicap = memberInfo [1];

    if (age >= 55 && handicap > 7) {
      return 'Senior';
    } return 'Open';
  })
}
console.log(openOrSenior([58, 8]));



// Ternarios 

/** Crear una función que, dados dos parámetros, name y age:
 * Si name y age tienen un valor devolveremos Hola me llamo [NAME] y tengo [AGE] años
 * Si age no tiene valor pero name si devolveremos Hola me llamo [NAME]
 * Si ninguno tiene valor devolvermos No quiero decirte mi nombre, pringao
 */

const nameAndAge = (name, age) => {
  if (name !== undefined && age !== undefined) {
    return `Hola me llamo ${name} y tengo ${age} años`;
  } else if (name !== undefined && age === undefined) {
    return `Hola me llamo ${name}`;
  } return 'No quiero decirte mi nombre, pringao';
}
console.log(nameAndAge( ));

// Ternario

const nameAndAge1 = (name, age) => {
  if (name !== undefined && age !== undefined) {
    return `Hola me llamo ${name} y tengo ${age} años`;
  }
    return name && !age ? `Hola me llamo ${name}` : 'No quiero decirte mi nombre, pringao';
  } 
  console.log(nameAndAge1());



// bucle For

/**
 * Escribe una función que dado un número, escriba su tabla de multiplicar en consola
 * Por ejemplo si le digo 1 debe escribir:
 *  1 x 1 = 1
 *  1 x 2 = 2
 *  .........
 */

function table(num){
  for(let multiplicando = 1; multiplicando <=10; multiplicando++) {
   
    console.log(`${num} x ${multiplicando} = ${num * multiplicando}`);
  }
}
table(1);



/**
 * Haz una función que dado un número, escriba todos los números pares desde el 0 al número introducido. 
 * Por ejemplo si introduzco 6, mostrará:
 *  0
 *  2
 *  4
 *  6
 */

const numPar = (num) => {
  for(let par = 0; par <= num; par++) {
    if(par % 2 === 0)   
    console.log(par)
  }
}
numPar(6);

/**
 * Cambia la función anterior para no usar condicionales
 */

const numPar1 = (num) => {
  for(let par = 0; par <= num; par+= 2) {   
    console.log((par));
  }
};
numPar1(6);


/** Haz una función que, dado un número, escriba una cuenta atrás de ese número en pantalla.
 * Por ejemplo, si introduzco 3, escribirá:
 * 3
 * 2
 * 1
 * 0
 */

const countDown = (num) => {
  for (let numero = num; numero >= 0; numero--) {
    console.log(numero)
  }
}
countDown(3);

/**
 * Escribe una función que acepte una letra y un número, y el programa mostrará una cadena formada por la letra repetida el número que haya introducido.
 */

const cadena = (letter, num) => {
  let result = '';
  for(let param = 0; param < num; param++) {
    result += letter;
  }
  console.log(result);
}
cadena('a', 5);


/**
 * Gutufasio está programando un carrito de la compra y está pensando en como modelar los objetos.
 * Imagina que en el carrito de la compra hay los siguientes elementos:
 *  7 botellas de agua - 700€
 *  2 bolsas de palomitas: 255.5€
 *  1 kg de azúcar: 1000€
 *  728 panes de hamburguesa: 928€
 *  28 kg de tofu ahumado: 2223€
 * Escribe un array para representar esa información.
 */

const shoppingCart4 = [
  {product: 'botella de agua', cuantity: 7, price: 100},
  {product: 'bolsa de palomitas', cuantity: 2, price: 127.75},
  {product: 'azucar', cuantity: 1, price: 1000},
  {product: 'pan de hamburguesa', cuantity: 728, price: 1.27},
  {product: 'tofu ahumado', cuantity: 28, price: 79.39}
];

/**
 * Al carrito vamos a aplicarle los impuestos.
 * Los impuestos dependerán del país. Gutufasio no sabe mucho de esto y lo único que sabe es que en España
 * los impuestos son el 21%, salvo en Ceuta, Melilla y Canarias, que no hay impuestos.
 *
 * Además, Gutufasio es UX, así que ha decidido poner en la interfaz los impuestos de cada elemento del array
 * por lo que necesita que en el array, cada elemento tenga, además de su precio, el impuesto.
 *
 * Crea una función que se llame calculateTaxes, que acepte dos parámetros de entrada:
 * - country
 * - state
 * La función debe devolver un nuevo array incluyendo el precio con impuestos y el precio total para cada elemento.
 */


const shoppingCart5 = [
  {product: 'botella de agua', cuantity: 7, price: 100},
  {product: 'bolsa de palomitas', cuantity: 2, price: 127.75},
  {product: 'azucar', cuantity: 1, price: 1000},
  {product: 'pan de hamburguesa', cuantity: 728, price: 1.27},
  {product: 'tofu ahumado', cuantity: 28, price: 79.39}
];


 const calculateTaxes = (country, state) => {
   
    shoppingCart5.forEach(product => {
      if (country === 'España' && (state !== 'Ceuta' && state !== 'Melilla' && state !== 'Canarias')) {
        let totalPrice = (product.cuantity * product.price);
        let priceWithTax = (product.cuantity * product.price) * 0.21;
        return product.totalPrice = totalPrice, product.priceWithTax = priceWithTax; 
      }  else if (state === 'Ceuta' || state === 'Melilla' || state === 'Canarias') {
        let totalPrice = (product.cuantity * product.price);
        return product.totalPrice = totalPrice;
      }
    });
   return shoppingCart5;   
 };
 console.log(calculateTaxes('España', 'Valencia'));
 
 
 /**
 * Gutufasio quiere añadir cupones, porque total, como cobra la botella de agua a 100€, pues se lo puede permitir.
 *
 * Los cupones tienen 3 propiedades:
 * - El código del cupón
 * - El porcentaje de descuento que tiene
 * - El mínimo de dinero que tiene que costar el carrito de la compra sin impuestos, para que el cupón aplique
 *
 *
 * Los cupones válidos serán:
 *  GUTUFACIO10, ROBUSTIO20, LOSORNITORRINCOSMOLANUNHUEVO50
 *  Los porcentajes de descuento son 10, 20 y 50 respectivamente, y las cantidades mínimas para que funcionen son
 *  1000€, 20€ y 5000€
 *
 * Como ya hemos dicho, Gutufacio le gusta poner toda la información en la interfaz, y quiere poner el precio original de cada
 * elemento y el precio después de aplicar el cupón.
 *
 * La función para comprobar y aplicar un cupón de descuento se llamará applyCoupon y tendrá dos parámetros:
 *  - El cupón de descuento
 *  - El array con el carrito de la compra
 * La función debe devolver el nuevo carrito con el cupón aplicado si es válido
 *
 * Nota, el descuento se aplica sobre el precio sin impuestos. Los impuestos se calculan sobre el precio base.
 */

 
 const shoppingCart6 = [
  {product: 'botella de agua', cuantity: 7, price: 100},
  {product: 'bolsa de palomitas', cuantity: 2, price: 127.75},
  {product: 'azucar', cuantity: 1, price: 1000},
  {product: 'pan de hamburguesa', cuantity: 728, price: 1.27},
  {product: 'tofu ahumado', cuantity: 28, price: 79.39}
];

const applyCoupon = ( carrito) => {
  /* Obtener el precio total de cada item */
  shoppingCart6.forEach(product => {
    let totalPrice = (product.cuantity * product.price);
    return product.totalPrice = totalPrice;
  })

  
  
  /* Obtener el precio total del carrito en un nuevo array */
  let totalPriceCart = 0;
  for(item = 0; item < carrito.length; item++) {
    const prod = carrito[item];
    totalPriceCart += prod.totalPrice;
  };
  const totalCart = [...carrito, {precioTotal: `${totalPriceCart}€`}];

};
console.log(applyCoupon('LOSORNITORRINCOSMOLANUNHUEVO50', shoppingCart6));







/**
 * Al carrito de la compra de Gutufasio le vamos a aplicar ahora los gastos de envío.
 * Los gastos de envío dependerán del país y de la región.
 *  Si el país es españa:
 *      Si la región es Ceuta, Melilla o Canarias, los gastos de envío serán 2€
 *      Si la región es otra serán de 1.5€
 *  Si el país es Francia los gastos de envío serán 500€, porque Gutufasio odia a los franceses y no quiere enviarles nada
 *  salvo a la región de Alsacia, que está muy bonita en navidad, así que los gastos de envío serán 5€ en ese caso.
 *  Si el país es Andorra, los gastos de envío serán 100€, ya que no pagan impuestos pues que paguen por el envío.
 *  En cualquier otro caso los gastos de envío serán 30€
 */

const shoppingCart7 = [
  {product: 'botella de agua', cuantity: 7, price: 100},
  {product: 'bolsa de palomitas', cuantity: 2, price: 127.75},
  {product: 'azucar', cuantity: 1, price: 1000},
  {product: 'pan de hamburguesa', cuantity: 728, price: 1.27},
  {product: 'tofu ahumado', cuantity: 28, price: 79.39}
];

const shippingCost = (country, state) => {
  
  shoppingCart7.forEach(cost => {
    if (country === 'España' && (state !== 'Melilla' || state !== 'Ceuta' || state !== 'Canarias')) {
      return shippingCost = totalCart + 1.5;
    } else if (country === 'España' && (state === 'Melilla' || state === 'Ceuta' || state === 'Canarias')) {
      return shippingCost = totalCart + 2;
    }
  }
)}
console.log(shippingCost('España', 'Murcia'));






// kata

function order(words){
  const sortedWords = [];

   words.split(' ').forEach(word => {   // dejar un espacio den el .split (' ')
    const number = word.split('').find(char => {
      return Number(char);
    });
    sortedWords[number-1] = word;
   })
   return sortedWords.join(' ');
}
console.log(order("is2 Thi1s T4est 3a"));





function invert(array) {
  
   return array.map(number => {
    return number * -1
  });
}
console.log(invert([1, 2, 3, 4, 5]));




function filter_list(l) {
  return filter(e => {
    return typeof e === 'number';
  })
}
console.log(filter_list([1,2,'a','b']));



