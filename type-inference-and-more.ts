let str = "str";
//联合类型
let numberOrString: number | string;

function getLength(input: string | number): number {
    const str = input as string;
    if (str.length) {
        return str.length;
    } else {
        const number = input as number;
        return number.toString().length;
    }
}

function getLength2(input: string | number): number {
    if (typeof input === "string") {
        return input.length;
    } else {
        return input.toString().length;
    }
}