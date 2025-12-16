

function Note({note, onDelete, onArchive}) {
  return (
    <div className = "note">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <div className="note-actions">
        <button onClick={()=> onArchive(note.id)}>
          {note.archived ? "Unarchive" : "Archive"}
        </button>
        <button onClick={() => onDelete(note.id)}>Delete</button>
      </div>
    </div>
  )

}



export default Note;
