function solve(maxWeight, maxVolume, fruits) {
    prev = [[0, 0, 0]];

    for (let i = 0; i < fruits.length; i++) {
        curr = [];
        let currWeight= fruits[i][0];
        let currVolume = fruits[i][1];
        let currValue = fruits[i][2];

        for (let j = 0; j < prev.length; j++) {
            // If the fruit is not in basket
            curr.push(prev[j]);

            if (prev[j][0] + currWeight <= maxWeight && prev[j][1] + currVolume <= maxVolume) {
                curr.push([prev[j][0] + currWeight, prev[j][1] + currVolume, prev[j][2] + currValue]);
            }
        }
        prev = curr;
    }
    prev = prev.map((x) => x[2]);
    return Math.max(...prev);
}

module.exports = { solve };