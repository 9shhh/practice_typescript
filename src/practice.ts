let count = 0;

count += 1;
// count += '갑분 문자열';     에러남

const msg: string = 'hello world';

const done: boolean = true;

const number: number[] = [1, 2, 3]; // 숫자 배열

const msgs: string[] = ['hello', 'world']; // 문자 배열

// msgs.push(1)     에러남

msgs.push('test');

let mightBeUndefined: string | undefined = undefined; // string or undefined 
let nullableNumber: number | null = null; // number or null

let color: 'red' | 'blue' | 'green' = 'red'; // red, blue, green 중 하나

// color = 'yellow';     에러남
// color = 'orange';     에러남








