// Функции
//1) Напишите функцию max, которая сравнивает два числа и возвращает большее:

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
alert(max(31, 34));


//2)Напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них:

function getMin() {
    const arrArg = [...arguments];
    return arrArg.reduce((acc, item) => {
        if (acc > item) return acc = item;
        return acc;
    });
}
console.log( getMin(433, 63, 40) );


//3)    3. Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов), каждый объект имеет поля firstname, lastname, age с разными значениями. Используя встроенные функции массивов:
//         a. Отфильтруйте пользователей младше 18 лет
//         b. Добавьте каждому объекту поле fullName, которое является конкатенацией имени и фамилии
//         c. Сформируйте новый массив, который содержит только полное имя пользователей

let users = [
    {firstName: 'John', lastName: 'Smith', age: 24},
    {firstName: 'Kate', lastName: 'Johnson', age: 4},
    {firstName: 'Poll', lastName: 'Williams', age: 21},
    {firstName: 'Lena', lastName: 'Jones', age: 24},
    {firstName: 'Tim', lastName: 'Brown', age: 33},
    {firstName: 'Tom', lastName: 'Davis', age: 45},
    {firstName: 'Chris', lastName: 'Miller', age: 73},
    {firstName: 'Alice', lastName: 'Wilson', age: 12},
    {firstName: 'Dmitrii', lastName: 'Harris', age: 35},
    {firstName: 'Vladimir', lastName: 'Lee', age: 17}
];

//a)
let youth = users.filter((item) => item.age < 18);
console.log(youth)

//b)
users.forEach((item) => {
    item.fullName = item.firstName+' '+item.lastName;
    });
console.log(users);

// c)
let newArr = users.map(function(item) {
    return {fullName: item.firstName+' '+item.lastName};
});
console.log(newArr);

//4)Напишите функцию аналог метода массива shift. Функция удаляет из переданного в параметре массива первый элемент.

function removeFirstElement(arr)  {
    let newArr = [];
    for (let i = 1; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(removeFirstElement(['14', '1997', '33', '23']));


//5)Напишите функцию аналог метода массива push. Функция добавляет в конец переданного в параметре массив произвольное количество элементов.

function addToTheEnd(arr) {
    const newElements = [];
    for (let i = 1; i < arguments.length; i++) {
        newElements.push(arguments[i]);
    }
    return [...arr, ...newElements];
}
console.log(addToTheEnd(['1', 2, '9', 'a', '1b']));


//6)Напишите функцию аналог метода Object.assign(). Первый параметр функции - целевой объект, поля которого будут изменены или расширены. Остальные параметры - объекты-источники, полями которых будет расширяться целевой объект.

let source = {firstname: 'Kate', age: 4};
let a = extend(source, {firstname: 'Alice'}, {lastname: 'Wilson'});
function extend(source) {
    let obj = {};
    for (let i = 1; i < arguments.length; i++) {
        obj = {
            ...obj,
            ...arguments[i]
        };
    }
    return {
        ...source,
        ...obj
    }
}
console.log(source);
console.log(a);


//7) Напишите функцию setComment с параметрами: date, message, author. Дата и текст сообщения - обязательные параметры, если какой-то из них или оба отсутствуют, то выполнение функции должно обрываться, а пользователю выдаваться предупреждение (alert) о том, что данные переданы некорректно. Параметр author - опциональный, но должна происходить проверка: если параметр не передан, то вместо него подставляется значение ‘Anonymous’. Функция распечатывает в консоли текст в формате:
// 				<имя_автора>, <дата>
// 				<текст_сообщения>

function setComment(date, message, author = 'Anonymous') {
    if (!date || !message) {
        return alert('Data transferred incorrectly');
    }
    console.log(author + ', ' + date + '\n' + message);
}
setComment('2021-07-14', 'Hello World', 'Alex');// отобразит все параметры.
setComment('2021-07-14', 'Hello World');// вместо-author выведет-‘Anonymous’.
setComment('2021-07-14');// выполнение функции обрывается и выводится alert('Data transferred incorrectly').


//Замыкание.

//1)Используя замыкание, напишите функцию createTimer, которая использует метод performance.now() для получения текущей временной метки и служит для замера времени выполнения другого кода(код менять, видоизменять нельзя, как написан так и должен остаться):

function createTimer() {
    let t0 = performance.now();
    return () => {
        let t1 = performance.now();
        return (t1 - t0);
    }
}
let timer = createTimer();
alert('!')  // код, время выполнения которого нужно измерить
alert( timer() ); // время в мкс от начала выполнения createTimer() до момента вызова timer()


//2)Используя замыкания, создайте функцию createAdder(), которая принимает на вход любой примитивный параметр и возвращает функцию, которая добавляет к первому параметру второй. Функция работает по следующему принципу:

function createAdder(arg1) {
    return (arg2) => arg1 + arg2;
}
let hello = createAdder('Hello, ');
alert( hello('John') ); // Hello, John
alert( hello('Harry') ); // Hello, Harry

let plus = createAdder(5);
alert( plus(1) ); // 6
alert( plus(5) ); // 10
