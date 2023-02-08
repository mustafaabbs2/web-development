import React from 'react'
import Note from './components/Note'


// Moved this to its own component file

// const Note = ({ note }) => {
//   return (
//     <li>{note.content}</li>
//   )
// }

const App = (props) => {
  const { notes } = props

  // You can change the stuff above via destructuring

  // The standard way of returning...
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         <li>{notes[0].content}</li>
//         <li>{notes[1].content}</li>
//         <li>{notes[2].content}</li>
//       </ul>
//     </div>
//   )
// }

// The shorthand 
// note => note.id
// is for..

// (note) => {
//   return note.id
// }



  // return (
  //   <div>
  //     <h1> Notes </h1>
  //     <ul>
  //      {notes.map(note => 
  //         <li key={note.id}>
  //             {/* The li element needs a note id attribute */}
  //             {note.content}
  //         </li>
  //       )}
  //      {/* Must be wrapped in curly braces since li tags are being generated */}
  //     </ul>
  //   </div>
  // )


  // You can use the return below if you want to use the Note component

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )




}

export default App