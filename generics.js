// function echo(arg){
//     return arg
// }
//
// const result = echo(123)
// 这时候我们发现了一个问题，我们传入了数字，但是返回了 any
function echo(arg) {
    return arg;
}
var result = echo(123);
//泛型可以传入多个值
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
var result2 = swap(["string", 123]);
console.log(result2);
