// Функция для нахождения максимального числа в массиве
function findMax(arr) {
    // Здесь напишите свою логику
}

// Проверка работы функции
console.log(findMax([3, 7, 2, 9, 5])); // Должно вывести 9
function testFunction() {
    alert("Код выполняется!");
}
function countProperties(obj) {
    return Object.keys(obj).length;
}

const person = {
    name: 'John',
    age: 30,
    gender: 'male'
};
function hasProperty(obj, key) {
    return key in obj;
}
const user = { name: "John", age: 30 };

console.log(hasProperty(user, "age"));  // true, свойство 'age' существует
console.log(hasProperty(user, "city")); // false, свойство 'city' не существует
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };  
}
const obj1 = { name: "Alice", age: 25 };
const obj2 = { age: 25, city: "New York" };
// объединение двух объектов
const merged = mergeObjects(obj1, obj2);
console.log(merged);  // { name: 'Alice', age: 25, city: 'New York' }
function getObjectKeys(obj) {
    return Object.keys(obj);  
}
function getObjectKeys(obj) {
    return Object.keys(obj);  
}
const car = { brand: "Toyota", model: "Camry", year: 2022 };

console.log(getObjectKeys(car)); 
// ["brand", "model", "year"]
function removeProperty(obj, key) {
    delete obj[key];  
}
const book = { title: "1984", author: "George Orwell", year: 1949 };

removeProperty(book, "year");
console.log(book);
//factorial zadanie 
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;  
    }
    return n * factorial(n - 1);  // Рекурсивный вызов
}
console.log(factorial(5));  // 120
console.log(factorial(0));  // 1
console.log(factorial(7));  // 5040
//isPrime zadanie
function isPrime(n) {
    if (n <= 1) {
        return false;  // Числа 0 и 1 не простые
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;  
        }
    }
    return true;  
}
console.log(isPrime(2));  // true
console.log(isPrime(4));  // false
console.log(isPrime(17)); // true
console.log(isPrime(18)); // false
//sumAll zadanie
function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0); 
}
console.log(sumAll(1, 2, 3, 4));        // 10
console.log(sumAll(5, 10, 15));         // 30
console.log(sumAll(1, 1, 1, 1, 1));     // 5
console.log(sumAll());                  // 0 
//zadanie reverse
function reverseString(str) {
let reversed = ''
for (let i = str.length - 1; i>= 0; i--) {
    reversed += str[i];
}
return reversed;
}
const newStr = reverseString ("Azat")
console.log(reverseString("Azat")) // tazA
//formatname zadanie
function formatName(name) {
    if (!name) return "";
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log(formatName("aLiCe")); // "Alice"
console.log(formatName("BOB"));   // "Bob"
console.log(formatName("john"));  // "John"
console.log(formatName(""));      // ""
console.log(formatName("eVa"));   // "Eva"
//zadanie findmax
function findMax(arr) {
    return Math.max(...arr);
}

console.log(findMax([3, 7, 2, 9, 5])); // 9
console.log(findMax([-10, -3, -5, -1])); // -1
console.log(findMax([100])); // 100
console.log(findMax([])); // -Infinity (если массив пустой)
//filternumbers zadanie
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(filterEvenNumbers([7, 9, 11])); // []
console.log(filterEvenNumbers([12, 14, 15, 17])); // [12, 14]
//zadanie mergueunique
function mergeUnique(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}


console.log(mergeUnique([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(mergeUnique([7, 8], [8, 9, 10])); // [7, 8, 9, 10]
console.log(mergeUnique([], [1, 2, 3])); // [1, 2, 3]
//zadanie reversearray
function reverseArray(arr) {
    return arr.slice().reverse();
}

console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
console.log(reverseArray(["a", "b", "c"])); // ["c", "b", "a"]
console.log(reverseArray([true, false, true])); // [true, false, true]
//findindex zadanie
function findIndex(arr, value) {
    return arr.indexOf(value);
}

console.log(findIndex([10, 20, 30, 40], 30)); // 2
console.log(findIndex(["apple", "banana", "cherry"], "banana")); // 1
console.log(findIndex([1, 2, 3], 4)); // -1
