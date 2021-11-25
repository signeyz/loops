// FOR loop

const cars = ['Cybertruck', 'Model S Plaid', 'Roadster'];

for (i = 0; i < cars.length; i++) {
  console.log(cars[i]);
  if (cars[i] === 'Cybertruck') {
    break;
  }
}

// DO WHILE loop

const fruits = ['apple', 'orange', 'pear'];

let a = 0;

do {
  console.log(fruits[a]);
  a++;
} while (a < fruits.length);

// WHILE Loop

const appleProducts = ['iphone', 'air-pods', 'apple watch'];

b = 0;

while (b < appleProducts.length) {
  console.log(appleProducts[b]);
  b++;
}

// FOR...OF loop

const characters = ['luigi', 'mario', 'bowser'];

for (const [index, character] of characters.entries()) {
  console.log(index);
  console.log(character);
}
