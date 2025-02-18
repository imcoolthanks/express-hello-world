function handle(arr) {
    let results = [];
    for (let i = 0; i < arr.length; i++) {
        let args = arr[i].split(", ").map((x) => parseInt(x));
        const solve = (candidates, target) => {
            let res = 0;
            candidates.sort();
            const dfs = (curCandidates, curTarget, start) => {
                if(curTarget == 0) res += 1;
                if(curTarget <= 0 ) return;
                for(let g = start; g < curCandidates.length; g++){
                    dfs(curCandidates, curTarget-curCandidates[g], g);  
                }
            }
            dfs(candidates, target, 0);
            results.push(res);
        }
        console.log("solving the " + i + "th one");
        solve(args.slice(2, 2 + args[1]), args[0]);
    }
    return results;
}

module.exports = { handle };