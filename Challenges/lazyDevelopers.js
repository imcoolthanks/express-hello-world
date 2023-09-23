exports.getNextProbableWords = function(classes, statements) {
    // Fill in your solution here and return the correct output based on the given input
  
    // Assumptions:
    // 1. If a word in the statement is not found in classes (e.g. Orde.) then [""] will be returned
    // 2. The keys in an object are unique.
  
    let results = {};
  
    statements.forEach((input) => {
      // Separate input by '.' to navigate through classes
      const params = input.split('.');
      // Item will hold the probable words
      let item = classes;
  
      for (let i = 0; i < params.length; i++) {
        // If item is a list of objects
        if (Array.isArray(item) && typeof item[0] === "object") {
          if (i == params.length - 1) {
            // If it is the last one, give suggestions, map all objects to their keys and flatten the array
            const listOfKeys = [].concat(...item.map((obj) => Object.keys(obj)));
            item = listOfKeys.filter((obj) => obj.startsWith(params[i]));
          } else {
            // Navigate into item
            // Get the item where its key matches the param, else return no words
            const objectMatchesKey = item.filter((obj) => Object.keys(obj).includes(params[i]))[0] || {};
            item = objectMatchesKey[params[i]] || "";
          }
        }
        // List of strings  
        else if (Array.isArray(item) && typeof item[0] === "string") {
          item = item.filter((str) => str.startsWith(params[i]));
        }
        // A single string
        else if (typeof item === "string") {
          // cannot be nested, must be empty
          item = [""];
        }
        // Class containing more key-value pairs
        else {
          if (i == params.length - 1) {
            // If it is the last one, give suggestions, else navigate into the object
            item = Object.keys(item).filter((d) => d.startsWith(params[i]));
          } else {
            item = item[params[i]] || "";
          }
        }
      }
      item = item.sort().slice(0, 5);
  
      results[input] = item;
    });
  
    return results;
  }