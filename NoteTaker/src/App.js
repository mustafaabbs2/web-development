import {useEffect, useState} from 'react'

import Footer from './components/Footer'
import Note from './components/Note'
import Notification from './components/Notification'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    // Fetching notes from the server
    noteService
      .getAll()
      .then(initialNotes => {
        // Set the fetched notes to the state variable
        setNotes(initialNotes)
      })
  }, [])  // Empty dependency array means this effect runs only once, when the component mounts

  // Function to add a new note
  const addNote = (event) => {
    event.preventDefault() // Prevent default form submission behavior
    
    // Create a new note object
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    }

    // Send a POST request to create the new note on the server
    noteService
      .create(noteObject)
      .then(returnedNote => {
        // Update the notes state with the newly created note
        setNotes(notes.concat(returnedNote))
        // Reset the newNote state to an empty string
        setNewNote('')
      })
  }

  // Function to handle changes in the newNote input field
  const handleNoteChange = (event) => {
    // Update the newNote state with the new input value
    setNewNote(event.target.value)
  }

  // Function to filter notes based on importance
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  // Function to toggle the importance of a note
  const toggleImportanceOf = id => {
    // Find the note with the given id
    const note = notes.find(n => n.id === id)
    // Create a new note object with the importance toggled
    const changedNote = { ...note, important: !note.important }

    // Send a PUT request to update the note's importance on the server
    noteService
      .update(id, changedNote).then(returnedNote => {
        // Update the notes state with the returned updated note
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        // Set an error message if the note was already removed from the server
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        // Clear the error message after 5 seconds
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        // Remove the note from the notes state
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  // Return the JSX representing the App component
  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        {/* Button to toggle between showing all and important notes */}
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div> 
      <ul>
        <ul>
          {/* Render the notes based on the filtered notesToShow */}
          {notesToShow.map(note => 
            <Note
              key={note.id}
              note={note}
              toggleImportance={() => toggleImportanceOf(note.id)}
            />
          )}
        </ul>
      </ul>
      {/* Form to add a new note */}
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type='submit'>save</button>
      </form>
      {/* Footer component */}
      <Footer />
    </div>
  )
}

export default App