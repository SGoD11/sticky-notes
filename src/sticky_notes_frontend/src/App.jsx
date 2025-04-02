import { useEffect, useState } from 'react';
import { sticky_notes_backend as backend } from 'declarations/sticky_notes_backend';

function App() {
  // State to hold the notes (initially an empty array)
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [save, setSave] = useState(false);
  

  // Toggle dark/light mode
  const handleToggleMode = () => {
    setIsDarkMode(prev => !prev);
    document.body.classList.toggle('dark-mode', !isDarkMode);
    document.body.classList.toggle('light-mode', isDarkMode);
  };


  // for fetching previous data
  useEffect(()=>{
    const fetch = async()=>{
      const fetchedNotes = await backend.getNotes();
      setNotes(fetchedNotes);
      
    };
    fetch();
  },[]);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if title and description are at least 5 characters long
    if (title.length < 5 || description.length < 5) {
      setErrorMessage('Both title and description must be at least 5 characters long');
      return;
    }

    // Create the new note and compute the updated notes array
    const newNote = { title, description };
    const updatedNotes = [newNote, ...notes ];

    // Immediately update the state
    setNotes(updatedNotes);

    // Log the updated notes (this now reflects the new state)
    console.log("Updated notes:", updatedNotes);

    // Send the updated notes to the backend
    try {
      setSave(true);
      const result = await backend.addNote(newNote.title, newNote.description);
      console.log("this is result", result);
      result && setSave(false);
    } catch (error) {
      console.error("Error sending notes to backend:", error);
    }

    // Reset the form fields and error message
    setTitle('');
    setDescription('');
    setErrorMessage('');
    setSave(false);
  };

  // Function to delete Notes
   function deleteNotes(id){
    setNotes(pre => {
      return pre.filter((noteItem, index)=>{
        return index !==id;
      });
    });

    // backend delete
     try {
      backend.removeNote(id);
      console.log("deleted ");
     } catch (error) {
      console.log("error in deleting ", error);
     }
  };

  return (
    <>
      <header>
        <h1>Sticky Notes</h1>
        <span className="toggle-container">
          <label>
            Dark Mode
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={handleToggleMode}
            />
          </label>
        </span>
      </header>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title</label> <br />
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
            />
          </div>

          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <button type="submit" disabled={save}>Add Note</button>
        </form>

        {/* Render notes */}
        <div className="notes-container">
          {notes.length > 0 ? (
            notes.map((note, index) => (
              <div key={index} className="note">
                <h3>{note.title}</h3>
                <p>{note.description}</p>
                <button onClick={() => deleteNotes(index)}>Delete</button>
              </div>
            ))
          ) : (
            <div className="no-notes">No notes yet</div>
          )}
        </div>
      </div>

      <footer>
        <p>Sticky Notes App - Footer</p>
      </footer>
    </>
  );
}

export default App;
