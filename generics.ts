// function echo(arg){
//     return arg
// }
//
// const result = echo(123)

// 这时候我们发现了一个问题，我们传入了数字，但是返回了 any

function echo<T>(arg: T): T {
    return arg;
}

const result = echo(123);

//泛型可以传入多个值
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

const result2 = swap(["string", 123]);
console.log(result2);

function echoWithArr<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

const arrs = echoWithArr([1, 2, 3]);

interface IWithLength {
    length: number;
}

function echoWithLength<T extends IWithLength>(arg: T): T {
    console.log(arg.length);
    return arg;
}

const str1 = echoWithLength("str");
const obj = echoWithLength({length: 10, width: 10});
const arr2 = echoWithLength([1, 2, 3]);


