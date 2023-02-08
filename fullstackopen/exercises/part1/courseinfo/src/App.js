import React from 'react'


const Header = (props) => {

  console.log(props)

  return (
    <h1>Hello from {props.course}</h1>
  )

}

const Part = (props) => {

return (

  <p> {props.part} which has {props.exercises} exercises </p>

)

}



const Content = (props) => {
// note - you need an empty ROOT element if you have multiple elements
// You can do either this or return an array --> return [<p>...</p>, <p>...</p>]
  return (
    <> 
    <h2> The content is: </h2>
    <Part part={props.part1} exercises={props.exercises1} />
    <Part part={props.part2} exercises={props.exercises2} />
    <Part part={props.part3} exercises={props.exercises3} />

    {/* this is a JSX comment */}
    {/* This is without using a part component 
    <p> {props.part1} which has {props.exercises1} exercises </p>
    <p> {props.part2} which has {props.exercises2} exercises </p>
    <p> {props.part3} which has {props.exercises3} exercises </p>
    */}
  
    </>

  )

}

const Total = (props) => {

  return (
    <p> Total number of exercises are {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )

}


const App = () => {
  // All data lies in App
  const course = 'Half Stack Application Development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  // Use objects instead of variables..

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  // What if you used an array for everything?

  const parts = [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]




  return (
    <div>
      <Header course={course} />     
      <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises} />     
     {/* Following line is passed from arrays */}
      <Content part1={parts[0].name} exercises1={parts[0].exercises} part2={parts[1].name} exercises2={parts[1].exercises} part3={parts[2].name} exercises3={parts[2].exercises} />           
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
}

export default App