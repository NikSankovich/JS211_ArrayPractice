// length
let cars = ['Ford', 'Chevy', 'Beemer', 'Jeep'];

console.log(`1. Length of cars is ${cars.length}`);

// concat
let moreCars = ['Toyota', 'Isuzu', 'Mitsubishi', 'Honda'];
let totalCars = cars.concat(moreCars)

console.log(`2. Concat both arrays ${totalCars}`);
console.log(totalCars);

//indexOf
let hondaIndex = totalCars.indexOf('Honda')
console.log(`3. Honda's index is ${hondaIndex}`);

//lastIndexOf
let fordIndex = totalCars.lastIndexOf('Ford');
console.log(`4. Ford's last index is ${fordIndex}`);

//join
let stringOfCars = totalCars.join();
console.log(`5. Convert totalCars to a string: ${stringOfCars}`);

//split 
let carsFromString = stringOfCars.split(" ")
console.log(`6. String of cars as an array: ${carsFromString}`);

//reverse
let carsInReverse = totalCars.reverse();
console.log(`7. Reversed cars are ${carsInReverse}`);

//sort
let sortReverse = carsInReverse.sort();
console.log(`8. Sort carsInReverse: ${sortReverse}`);

//slice 
const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
const reptiles = pets.slice(4, 6);
console.log(`9. Reptiles array: ${reptiles}`);
//console.log(reptiles);

//splice
const removedReptiles = pets.splice(4, 2, 'hamster');
console.log(removedReptiles);
console.log(pets);
//console.log(`5. Convert totalCars to a string: ${stringOfCars}`);

//pop
const removedPet = pets.pop();
console.log(`10. ${pets}`);
console.log(`10. ${removedPet}`);

//push 
pets.push(removedPet);
//console.log('This is the new array:', newArray);
console.log(`11. ${pets}`);


pets.shift();
console.log(`12. Remove first item in pets array: ${pets}`);


pets.unshift("turtle");
console.log(`13. add "turtle" to pets: ${pets}`);


const numbers = [23, 45, 0, 2, 8, 44, 100, 1, 3, 91, 34,]
function addTwo(num, index, arr) {
    arr[index] = num + 2;
}
numbers.forEach(addTwo)

console.log(numbers)


