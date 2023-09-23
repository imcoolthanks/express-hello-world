class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

function findDifference(a, b) {
    if (a >= b) {
        return a - b;
    } else {
        return 10 - (b - a);
    }
}
  
function solve(generations, colony) {
    if (colony == 0) return 0;

    const head = new Node("", null);
    let curr = head;
    let sum = 0;

    // Set up initial colony
    for (let i = 0; i < colony.length; i++) {
        sum += parseInt(colony[i]);
        curr.next = new Node(parseInt(colony[i]));
        curr = curr.next;
    }

    curr = head.next;

    // Add to differences
    while (generations > 0) {
        let currSum = 0;
        while (curr.next != null) {
            let temp = curr.next;
            let digit = (sum + findDifference(curr.value, curr.next.value)) % 10;
          
            let newNode = new Node(digit);
            newNode.next = curr.next;
            
            curr.next = newNode;
            currSum += digit;
            curr = temp;
        }
        curr = head.next;
        sum += currSum;
        generations--;
    }

    return sum;
}

module.exports = { solve };