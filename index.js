// lesson task 1

alert('Hello world');

// lesson task 2

document.write('I like frontend ');
document.write('I like backend');

// lesson task 3

const myName = 'Oleh';
let admin;;

alert(`admin = ${admin}`);

admin = myName;

alert(`admin = ${admin}`);

// lesson task 4

const userName = prompt('What is your name?')

alert(`${userName} batʹkovych`)

// lesson task 5

let year;

alert(`Declared but not assigned ${year}`);

// homework task 1

const userAge = prompt('How old are you?')
alert(`Your are ${userAge} years old`);

// homework task 2

const currentYear = 2021;
const userBirthdayYear = prompt('What is your birthday year?');
alert(`Your are ${currentYear - userBirthdayYear} years old`);

// homework task 3

const widthSideLength = prompt('Width side length');
const heightSideLength = prompt('Height side length');
alert(`The perimeter of the rectangler is equal to ${(+widthSideLength + +heightSideLength) * 2}`);

// homework task 4

const radius = prompt('Input the radius value');
alert(`The square of the circle is equal to ${Math.PI * (radius ** 2)}`);

// homework task 5

const roadTimeOHours = prompt('How long will you keep driving? (in hours)');
const roadTimeMinutes = prompt('How long will you keep driving? (in minutes)');
alert(parseFloat((roadTimeOHours * 50) + (roadTimeMinutes * (50 / 60))));

//homework task 6

const kilometersInMile = 1.60934;
const milesInKilometer = 0.621371;

const miles = prompt('Сonvert miles to kilometers');
alert(`${miles} miles = ${miles * kilometersInMile} kilometers`);

const kilometers = prompt('Сonvert kilometers to miles');
alert(`${kilometers} kilometers = ${kilometers * milesInKilometer} miles`);

//homework task 7

const userFunds = prompt('Your funds', 42);
const fuelPrice = prompt('Fuel price');

alert(`You can buy ${Math.floor(userFunds/fuelPrice)}, and you also will have your ${userFunds % fuelPrice}`)