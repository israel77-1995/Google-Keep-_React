import Header from './components/Header';
import Sidebar from './components/Sidebar';
import NoteForm from './components/Noteform';
import NoteList from './components/Notelist';
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
            <div className="d-flex">
                <Sidebar />
                <main className="flex-grow-1 p-4"/>
                

            </div>
        </div>
    );
}

export default App;