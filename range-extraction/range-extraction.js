// Consolidate range in array
// [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20] should return "-6,-3-1,3-5,7-11,14,15,17-20"

const solution = list => {
    const p = acc => {
        const x = acc.current;
        acc.out.push(x.length > 2 ? `${x.shift()}-${x.pop()}` : x.join(','));
    }
    const output = list.reduce((acc, curr, i, arr) => {
        curr - 1 === arr[i - 1] || i === 0 ? acc.current.push(curr) : (p(acc), acc.current = [curr]);
        i === arr.length -1 ? p(acc) : null;
        return acc;
    }, { out: [], current: [] });
    return output.out.join(',')
}