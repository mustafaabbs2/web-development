const t = [1, -1, 3]

t.push(5)

// const t2 = t.concat(5) //preferable to use immutable data structures

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each to own line
})  


console.log("Multiplying", t, "by 2:")
const m1 = t.map(value => value * 2)
console.log(m1)
// forEach recieves a function which it calls for each element in the array

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)  
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed
// transform an array of integers into array of HTML strings

