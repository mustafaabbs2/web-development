import ReactDOM from 'react-dom'
import App from './App'

let counter = 1 //define counter
ReactDOM.render(
  <App counter={counter} />,
  document.getElementById('root'))


// uncomment this for a counter incrementing every 1 second


// // create a render function that you can call - so the page keeps refreshing with an updated value
// const render = () => {
// ReactDOM.render(
//   <App counter={counter} />,
//   document.getElementById('root')
// )
// }

// //create an empty function that renders the page and increments the counter..slowly - every second
// setInterval(
//   () => {
//   render()
//   counter++
//   },
//   1000
// )

// render()
// counter +=1
// render()
// counter +=1
// render()


