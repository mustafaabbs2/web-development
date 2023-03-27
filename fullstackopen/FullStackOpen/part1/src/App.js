import React, {useState} from 'react'


//This is the first bit:
const Hello = (props) => {

  //destructuring the data from props
  // const name = props.name
  // const age = props.age

// ...or another way to shorten this.. 
// console.log("Entering Hello") will be displayed in the console tab
const { name, age } = props

// const Hello = ({ name, age }) => { .. the shortest way is to just put it in the definition

  //adding a function here that gives the year the person is born based on the age
// note that having a function inside another in JS is not difficult 
  const bornYear = () => {

    const yearNow = new Date().getFullYear()
    return yearNow - age // all the parameters in the function can be accessed
  }


  // another way to do the same thing - but without curly brackets
  const bornYear2 = () => new Date().getFullYear() - age


  return (
    <div>
      {/* <p>Hello {props.name}, you are {props.age} years old </p>   */}
       {/*this is if you do not destructure your data!  */}
      <p>Hello {name}, you are {age} years old </p>
      <p>.. and you were probably born in {bornYear2()}..? </p>
    </div>
  )
}

//create a component for every function .. this is good refactoring 
const Button = (props) => {
  // pass the event handler and the button name as properties 
  return (
    <button onClick={props.onClick}> 
      {props.text}
    </button>
  )
}

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

// use click history to decide what will be rendered = this is conditional rendering 
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}


// method using useState
const App = () => {
  const [counter, setCounter] = useState(0) //returns an array with the counter = 0 and a function to update it

  const [clicks, setClicks] = useState({
    left: 0, right: 0
  }) 
  // This initializes the state of clicks to 0 for both left and right clicks


  //two pieces of state are being used here - separately
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  

  //registering an event handler for a MOUSE EVENT
  const handleClick = () => {
    console.log('clicked')
    setCounter(counter + 1) //sets counter to an additional value when button clicked
  }

// Note that you should bnot change the state directly (dont do clicks.left++)
// it is forbidden in React to mutate state directly
  const handleLeftClick = () => {
    const newClicks = { 
      left: clicks.left + 1, 
      right: clicks.right 
    }
    setClicks(newClicks) //send new state via an object to setClicks
  }
  

  const handleRightClick = () => {
    const newClicks = { 
      left: clicks.left, 
      right: clicks.right + 1 
    }
    setClicks(newClicks)
  }

  // Use object spread operator 
  // The object spread operator creates copies of all properties of clicks and makes a change to the one after the comma
  const handleRightClickObjSpread = () => {
    const newClicks = { 
      ...clicks, 
      right: clicks.right + 1 
    }
    setClicks(newClicks)
  }

  const [allClicks, setAll] = useState([])
  // Use an array as state to store all clicks, starting with a blank array

  // the state is changed by appending an L to it during a left click
  const handleLeftClickAll = () => {
    setAll(allClicks.concat('L'))
    // allClicks.push('L')  //can also push - but this changes the state directly, so don't!
    setLeft(left + 1)
  }

  // the state is changed by appending an R to it during a right click
  const handleRightClickAll = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  //Simpler way of writing these event handlers:

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)


  console.log('I am rendering this...', )


      return (
        <div>
          {left}
          <button onClick={handleLeftClickAll}>left</button>
          <button onClick={handleRightClickAll}>right</button>
          {right} 
          {/* Displays the right value after the button */}
          <History allClicks={allClicks} />
          <p>{allClicks.join(' ')}</p> 
          {/* Displays each click - L or R   */}
        </div>
      )


}


export default App