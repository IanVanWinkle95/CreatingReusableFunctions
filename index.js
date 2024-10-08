// ---------------Part1-----------------

function sumArray(num) {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum = sum + num[i];
    }
    return sum;
}

function averageArray(num) {
    let sum = 0;
    for (let j = 0; j < num.length; j++) {
        sum = sum + num[j];
    }
    if (num.length === 0) {
        return 0;
    } else {
        return sum / num.length;
    }
}

function longestString(strings) {
    let longest = "";
    for (let k = 0; k < strings.length; k++) {
        if (strings[i].length > longest.length) {
            longest = strings[i];
        }
    }
    return longest;
}



function stringsLongerThan(arr, num) {
    return arr.filter(str => str.length > num);
}

const result = stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);
console.log(result);


function printNumbers(n, current = 1) {
    if (current > n) {
        return;
    }
    console.log(current);
    printNumbers(n, current + 1);
}

printNumbers(6);

// ------------------------Part2-------------------------

const data = [
    { id: "42", name: "Bruce", occupation: "Wayne", age: "41" },
    { id: "48", name: "BarryAllen", occupation: "FastestManAlive", age: "25" },
    { id: "57", name: "BobRoss", occupation: "Painter", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "BilboBaggins", occupation: "Ring Bearer", age: "111" }
];

const sortedByAge = data.sort((a, b) => Number(a.age) - Number(b.age));

console.log("Sorted by Age:", sortedByAge);

const filteredByAge = sortedByAge.filter(person => Number(person.age) <= 50);

console.log("Filtered by Age (<= 50):", filteredByAge);

const mappedArray = filteredByAge.map(person => (
    {
        ...person,
        job: person.occupation,
        age: Number(person.age) + 1
    }
));

console.log("Mapped Array:", mappedArray);

const sumOfAges = mappedArray.reduce((sum, person) => sum + person.age, 0);

console.log("Sum of Ages:", sumOfAges);

const averageAge = sumOfAges / mappedArray.length;

console.log("Average Age:", averageAge);

// ---------------------Part3-----------------------------

function incrementAge(obj) {
    if (!obj.age) obj.age = 0;
    obj.age += 1;
    obj.updated_at = new Date(); 
}

function copyAndIncrementAge(obj) {
    const copy = { ...obj };
    if (!copy.age) copy.age = 0;
    copy.age += 1;
    copy.updated_at = new Date();
    return copy;
}

const person = { id: "1", name: "Clark Kent", occupation: "News Person" };

incrementAge(person);
console.log(person);

const newPerson = copyAndIncrementAge(person);
console.log(newPerson);
console.log(person);