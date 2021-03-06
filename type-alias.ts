//type alias

let sum: (x: number, y: number) => number;
const res = sum(1, 2,);
type PlusType = (x: number, y: number) => number
let sum2: PlusType;

//支持联合类型
type StrOrNumber = string | number
let results2: StrOrNumber = "123";
results2 = 123;

//字符串字面量
type Directions = "Up" | "Down" | "Left" | "Right"
let toWhere: Directions = "Up";

//交叉类型
interface IName {
    name: string;
}

type IPerson = IName & { age: number }
let person: IPerson = {name: "沈伊兰", age: 18};