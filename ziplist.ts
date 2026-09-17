function zipList(list: string[], li: number[]): [string, number][] {
    const result: [string, number][] = [];
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < li.length; j++) {
            result.push([list[i], li[j]]);
        }
    }
    return result;
}

function zipListTheFunctionalWay(list: string[], li: number[]): [string, number][] {
    return list.map((str, num) => [str, li[num]]);

}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));