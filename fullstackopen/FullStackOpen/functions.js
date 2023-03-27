const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
  }

  const result = sum(1, 5)
  console.log(result)




//   If there is just a single parameter, we can exclude the parentheses from the definition
  const square = p => {
    console.log(p)
    return p * p
  }

// note: in the function above, the braces aren't needed at all:

const squared = p => p * p

const result_sq = squared(5)
console.log(result_sq)



//The arrow was introduced in ES6, and it is a shorter way to write a function.

// The arrow function is equivalent to:

function product(a, b) {
    return a * b
  }
  
  const result_pr = product(2, 6)
  console.log(result_pr)


