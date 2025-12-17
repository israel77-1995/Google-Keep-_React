import Header from 'components/Header';
import NoteForm from 'components/NoteForm';
import NoteList from 'components/NoteList';
import { useState} from 'react';

function  App() {
    const [notes, setNotes] = useState([]);
    
    const addNote = (noteData) => {
        const newNote = {
            id: Date.now(),
            ...noteData,
            archived: false
        };
        setNotes([newNote, ...notes]);
        
    }
    return (
        <div className="App">
            <Header />
        </div>
    );
}

export default App;