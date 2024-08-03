const sumAll = function(start, end) {
    let sum = 0;

    // Sum only positive integers
    if ( Number.isInteger(start) 
        && Number.isInteger(end) 
        && start >= 0 
        && end >= 0
    ) {
        if ( end < start ) {
            // When the end is lesser than start, swap
            let temp = start;
            start = end;
            end = temp;
        }

        for (let i = start; i <= end; i++) {
            sum += i;
        }

        return sum;
    }

    return "ERROR";
  };

// Do not edit below this line
module.exports = sumAll;
