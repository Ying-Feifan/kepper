import React, { useState } from "react";
import Footer from "./footer";
import Header from "./header"
import Note from "./note";
import noteList from "./noteList";
import CreateArea from "./createArea"

function App() {

    const [notes, setNotes] = useState([...noteList]);

    function addNote(newNote) {
        setNotes((prevNotes) => [...prevNotes,newNote]);
    }
    function removeNote(id){
        notes.splice(id,1)
        setNotes(prevNotes => [...prevNotes]);
    }

    return <div>
        <Header />
        <CreateArea add={addNote}/>
        {notes.map((note,index) => <Note
            key= {index}
            id={index}
            title={note.title}
            content={note.content}
            remove={removeNote}
        />)}
        <Footer />
    </div>

}

export default App;