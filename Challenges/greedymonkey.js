function solve(maxWeight, maxVolume, fruits) {
    let currWeight= fruits[0][0];
    let currVolume = fruits[0][1];
    let currValue = fruits[0][2];

    prev = [[0, 0, 0], [currWeight, currVolume, currValue]];

    for (let i = 0; i < fruits.length; i++) {
        curr = [];
        let currWeight= fruits[i][0];
        let currVolume = fruits[i][1];
        let currValue = fruits[i][2];

        for (let j = 0; j < prev.length; j++) {
            // If the fruit is not in basket
            curr[j] = prev[j];

            if (prev[j][0] + currWeight <= maxWeight && prev[j][1] + currVolume <= maxVolume) {
                curr.push([prev[j][0] + currWeight, prev[j][1] + currVolume, prev[j][2] + currValue]);
            }
        }
        prev = curr;
    }
    return Math.max(prev.map((x) => x[2]));
}

module.exports = { solve };