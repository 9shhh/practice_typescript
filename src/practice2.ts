// function

function sum(x: number, y: number): number {
    return x + y;
}

function sumArr(nums : number[]) : number{
    return nums.reduce((acc, current) => acc + current, 0);
}

function returnNothing() : void{
    console.log('nothing');
}

const total = sumArr([1,2,3,4,5]);

console.log(total);
