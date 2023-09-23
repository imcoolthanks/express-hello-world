function handle(arr) {
    let results = [];
    for (let i = 0; i < arr.length; i++) {
        let args = arr[i].split(", ").map((x) => parseInt(x));
        results.push(solve(args.slice(2, 2 + args[1]), args[0]));
    }
    return results;
}

function solve(candidates, target) {
    let res = 0;
    const dfs = (curCandidates, curTarget, value) => {
        if( curTarget == 0) res += 1;
        if(curTarget <= 0 ) return;
        for(let g=0; g<curCandidates.length; g++){
            dfs(curCandidates.slice(g), curTarget-curCandidates[g], [...value, curCandidates[g] ] );  
        }
    }
    dfs(candidates, target, []);
    return res;
}

module.exports = { handle };